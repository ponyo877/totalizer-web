import { FC, ReactNode } from "react";

type buttonOption = {
    icon?: ReactNode;
    text?: ReactNode;
    txtColor?: string;
    bgColor?: string;
    center? : boolean;
    onClick?: () => void;
};

const Button: FC<buttonOption> = (op: buttonOption) => {
    const txtColor = op.txtColor ? op.txtColor : 'text-black';
    const bgColor = op.bgColor ? op.bgColor : 'bg-white';
    return (
        <label
            className={`flex items-center ${op.center && 'justify-center'} h-20 w-64 min-w-1/3 px-6 m-4 text-3xl duration-150 ${bgColor} ${txtColor} rounded-2xl shadow-lg font-Andika cursor-pointer`}
            onClick={op.onClick}>
            {op.icon && <div className="pr-6">{op.icon}</div>}{op.text}
        </label>);
};

export default Button;