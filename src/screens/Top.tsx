import { useState, FC } from "react";
import Button from "../components/Button"
import { Title } from "../components/Title"
import { LocalIcon, GlobalIcon } from "../components/Icon";
import { useNavigate } from "react-router-dom";
import { OpenRoomModal } from "../components/OpenRoomModal";


export const Top: FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => {
    setIsOpen(false)
  }
  const openModal = () => {
    setIsOpen(true)
  }
  const handleOpenRoom = () => console.log("ここで開室")
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-blue-50 h-dvh w-screen">
        <div className="flex flex-col items-center justify-center bg-blue-50 h-1/2 w-screen">
          <Title />
        </div>
        <div className="flex flex-col items-center bg-blue-50 h-1/2 w-screen">
          <Button icon={LocalIcon} text='1台で' onClick={() => navigate('vote')} />
          <Button icon={GlobalIcon} text='みんなで' onClick={openModal} />
        </div>
      </div>
      {isOpen && (
        <OpenRoomModal
          closeModal={closeModal}
          // isOpen={isOpen}
          handleAction={handleOpenRoom}
        />
      )}
    </>
  )
}