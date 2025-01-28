import { FC } from "react";
import Button from "./Button";

interface ModalProps {
    onReceiveClick: () => void;
}

const BlockModal: FC<ModalProps> = ({ onReceiveClick }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg max-w-sm w-full">
                <div className="flex flex-col items-center text-center mb-6">
                    <div className="text-xl font-bold mb-2">次の人に回してください</div>
                    <p className="text-gray-600 mb-4">OKを押すと回答できます</p>
                    <Button
                        text="OK"
                        bgColor="bg-blue-500"
                        txtColor="text-white"
                        center
                        onClick={onReceiveClick}
                    />
                </div>
            </div>
        </div>
    );
};

export default BlockModal;
