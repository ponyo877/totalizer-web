import { useState, FC } from "react"
import Button from "../components/Button"
import { Title } from "../components/Title"
import { LocalIcon, GlobalIcon } from "../components/Icon"
import { useNavigate } from "react-router-dom"
import { OpenRoomModal } from "../components/OpenRoomModal"
import { RoomNumberModal } from "../components/RoomNumberModal"
import { connectWebSocket, createRoom } from "../utils/websocket"

export const Top: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [roomNumber, setRoomNumber] = useState<string | null>(null)
  const [showRoomNumber, setShowRoomNumber] = useState(false)

  const closeModal = () => {
    setIsOpen(false)
  }

  const closeRoomNumberModal = () => {
    setShowRoomNumber(false)
  }

  const openModal = () => {
    setIsOpen(true)
  }

  const handleOpenRoom = (actionType: 'join' | 'create') => {
    if (actionType === 'join') {
      console.log("ルームに参加")
      // TODO: ルームキーを使用して参加処理を実装
    } else {
      console.log("新規ルームを作成")
      const ws = connectWebSocket(
        () => {
          createRoom(ws)
        },
        (data) => {
          console.log('WebSocket received data:', data) // デバッグ用
          if (data.type === 'room' && data.room_id) {
            setRoomNumber(data.room_id)
            // ローカルストレージに部屋番号を保存
            localStorage.setItem('roomNumber', data.room_id)
            console.log('Room number saved to localStorage:', data.room_id) // デバッグ用
            setShowRoomNumber(true)
            setIsOpen(false)
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
    </>
  )
}