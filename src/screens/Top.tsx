import { useState, FC } from "react"
import Button from "../components/Button"
import { Title } from "../components/Title"
import { LocalIcon, GlobalIcon } from "../components/Icon"
import { useNavigate } from "react-router-dom"
import { OpenRoomModal } from "../components/OpenRoomModal"
import { RoomNumberModal } from "../components/RoomNumberModal"
import { RoomNotFoundModal } from "../components/RoomNotFoundModal"
import { connectWebSocket, createRoom, enterRoom } from "../utils/websocket"

export const Top: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [roomNumber, setRoomNumber] = useState<string | null>(null)
  const [showRoomNumber, setShowRoomNumber] = useState(false)
  const [showRoomNotFound, setShowRoomNotFound] = useState(false)

  const closeModal = () => {
    setIsOpen(false)
  }

  const closeRoomNumberModal = () => {
    setShowRoomNumber(false)
  }

  const closeRoomNotFoundModal = () => {
    setShowRoomNotFound(false)
  }

  const openModal = () => {
    setIsOpen(true)
  }

  const handleOpenRoom = (actionType: 'enter' | 'create', roomNumber?: string) => {
    if (actionType === 'enter' && roomNumber) {
      console.log("ルームに参加:", roomNumber)
      const ws = connectWebSocket(
        () => {
          enterRoom(ws, roomNumber)
        },
        (data) => {
          console.log('WebSocket received data:', data)
          if (data.type === 0) {
            setShowRoomNotFound(true)
            setIsOpen(false)
          } else if (data.type === 1) {
            setRoomNumber(roomNumber)
            localStorage.setItem('roomNumber', roomNumber)
            setIsOpen(false)
            localStorage.setItem('roomCount', data.enter_count.toString())
            navigate('/vote')
          }
        }
      )
    } else if (actionType === 'create') {
      console.log("新規ルームを作成")
      const ws = connectWebSocket(
        () => {
          createRoom(ws)
        },
        (data) => {
          console.log('WebSocket received data:', data)
          if (data.room_number) {
            setRoomNumber(data.room_number)
            localStorage.setItem('roomNumber', data.room_number)
            setShowRoomNumber(true)
            setIsOpen(false)
            localStorage.setItem('roomCount', "1")
          }
        }
      )
    }
  }

  const navigate = useNavigate()

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-blue-50 h-dvh w-screen">
        <div className="flex flex-col items-center justify-center bg-blue-50 h-1/2 w-screen">
          <Title />
        </div>
        <div className="max-w-96 px-8 mb-8">
          <Button icon={LocalIcon} text='1台で' onClick={() => navigate('vote')} />
          <Button icon={GlobalIcon} text='みんなで' onClick={openModal} />
        </div>
      </div>
      {isOpen && (
        <OpenRoomModal
          closeModal={closeModal}
          handleAction={handleOpenRoom}
        />
      )}
      {showRoomNumber && roomNumber && (
        <RoomNumberModal
          roomNumber={roomNumber}
          closeModal={closeRoomNumberModal}
        />
      )}
      {showRoomNotFound && (
        <RoomNotFoundModal
          closeModal={closeRoomNotFoundModal}
        />
      )}
    </>
  )
}