import { FC, ReactNode } from "react";

type fabOption = {
    icon?: ReactNode;
    text?: ReactNode;
    txtColor?: string;
    bgColor?: string;
    className?: string;
    onClick?: () => void;
};

export const FAB: FC<fabOption> = (op: fabOption) => {
    const txtColor = op.txtColor ? op.txtColor : 'text-white';
    const bgColor = op.bgColor ? op.bgColor : 'bg-white';
    return (
        <div
            className={`fixed bottom-10 right-10 p-4 text-2xl ${bgColor} ${txtColor} rounded-full shadow-lg cursor-pointer ${op.className || ''}`}
            onClick={op.onClick}>
            {op.icon || op.text}
        </div>
    );
};