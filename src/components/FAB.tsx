import { FC, ReactNode } from "react";

type fabOption = {
    icon?: ReactNode;
    text?: ReactNode;
    txtColor?: string;
    bgColor?: string;
    coordinate?: string;
    onClick?: () => void;
};

export const FAB: FC<fabOption> = (op: fabOption) => {
    const txtColor = op.txtColor ? op.txtColor : 'text-white';
    const bgColor = op.bgColor ? op.bgColor : 'bg-white';
    // bottom-10 right-10 
    return (
        <div
            className={`${op.coordinate} p-2 text-2xl ${bgColor} ${txtColor} rounded-2xl w-[50%] shadow-lg font-Andika cursor-pointer`}
            onClick={() => window.open("https://www.google.com/?hl=ja")}>
            {op.text}
        </div>
    );
};