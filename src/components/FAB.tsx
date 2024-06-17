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
    const txtColor = op.txtColor ? op.txtColor : 'text-black';
    const bgColor = op.bgColor ? op.bgColor : 'bg-white';
    // bottom-10 right-10 
    return (
        <div
            className={`${op.coordinate} py-2 px-2 border-2 ${bgColor} ${txtColor} rounded-full cursor-pointer`}
            onClick={() => window.open("https://www.google.com/?hl=ja")}>
            {op.text}
        </div>
    );
};