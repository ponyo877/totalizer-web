import { FC, ReactNode } from "react";


type Props = {
    icon?: ReactNode;
    text: ReactNode;
};

const Button: FC<Props> = ({ icon, text }) => {
    return (
        <label className="flex items-center h-20 w-2/3 px-6 m-4 text-3xl duration-150 bg-white rounded-2xl shadow-lg font-andika cursor-pointer" onClick={() => alert("hello")}>
            {icon && <div className="pr-6">{icon}</div>}
            <button>{text}</button>
        </label>);
};

export default Button;