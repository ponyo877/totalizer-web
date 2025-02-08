import { FC } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

interface RoomNumberModalProps {
    roomNumber: string;
    closeModal: () => void;
}

export const RoomNumberModal: FC<RoomNumberModalProps> = ({ roomNumber, closeModal }) => {
    const navigate = useNavigate();

    const handleContinue = () => {
        closeModal();
        navigate('/vote');
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg max-w-sm w-full">
                <div className="flex flex-col items-center text-center mb-6">
                    <h2 className="text-xl font-bold mb-4 text-center">部屋番号</h2>
                    <p className="text-3xl text-center mb-6">{roomNumber}</p>
                    <Button
                        text="入室"
                        bgColor="bg-blue-500"
                        txtColor="text-white"
                        center
                        onClick={handleContinue}
                    />
                </div>
            </div>
        </div>
    );
};