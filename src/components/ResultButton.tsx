import { FC, ReactNode } from "react";
import { useReward } from 'react-rewards';

type fabOption = {
    icon?: ReactNode;
    text?: ReactNode;
    txtColor?: string;
    bgColor?: string;
    coordinate?: string;
    disabled?: boolean;
    onClick?: () => void;

};

export const ResultButton: FC<fabOption> = (op: fabOption) => {
    const { reward, isAnimating } = useReward('rewardId', 'confetti', {
            elementCount: 100,
            elementSize: 13,
        }
    );
    const txtColor = op.txtColor ? op.txtColor : 'text-white';
    const bgColor = op.bgColor ? op.bgColor : 'bg-white';
    const opacity = op.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
    
    const handleReward = () => {
        if (!isAnimating) {
            reward();
        }
        op.onClick && op.onClick();
    }
    
    return (
        <div
            className={`${op.coordinate} p-2 text-2xl ${bgColor} ${txtColor} rounded-2xl w-[50%] shadow-lg font-Andika ${opacity} transition-all duration-300`}
            onClick={!op.disabled ?handleReward : undefined}>
            <span id="rewardId" />
            {op.text}
        </div>
    );
};