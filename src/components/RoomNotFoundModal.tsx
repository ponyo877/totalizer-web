import { FC } from "react"
import Button from "./Button"

interface RoomNotFoundModalProps {
    closeModal: () => void
}

export const RoomNotFoundModal: FC<RoomNotFoundModalProps> = ({ closeModal }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg max-w-sm w-full">
                <div className="flex flex-col items-center text-center mb-6">
                    <p className="text-center mb-6">指定された部屋が存在しません</p>
                    <Button
                        text="閉じる"
                        bgColor="bg-blue-500"
                        txtColor="text-white"
                        center
                        onClick={closeModal}
                    />
                </div>
            </div>
        </div>
    )
}