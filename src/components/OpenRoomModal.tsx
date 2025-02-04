import { FC, memo, useState } from "react"
import { createPortal } from "react-dom"
import { MdClose } from "react-icons/md";
import Button from "./Button";

type Props = {
  closeModal: () => void
  handleAction: (actionType: 'join' | 'create') => void
}

export const OpenRoomModal: FC<Props> = memo((props) => {
  const {
    closeModal,
    handleAction,
  } = props
  const [roomKey, setRoomKey] = useState('')

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg max-w-sm w-full">
        <div className="flex flex-col items-center text-center mb-6">
          <button
            onClick={closeModal}
            className="self-start p-2 hover:bg-gray-100 rounded-full"
          >
            <MdClose className="fill-gray-500 w-6 h-6" />
          </button>
          <h2 className="text-xl font-bold mb-2">ルームに参加</h2>
          <div className="w-full mt-4">
            <input
              className="w-full rounded border border-gray-300 px-4 py-5 mb-4"
              type="text"
              placeholder="ルームキーを入力"
              value={roomKey}
              onChange={(e) => setRoomKey(e.target.value)}
            />
            <div className="flex justify-center items-center gap-4">
              <Button
                text="入室"
                bgColor="bg-blue-500"
                txtColor="text-white"
                center
                onClick={() => handleAction('join')}
              />
              <Button
                text="作成"
                bgColor="bg-blue-500"
                txtColor="text-white"
                center
                onClick={() => handleAction('create')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("root")!
  )
})