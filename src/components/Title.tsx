import { FC } from "react";
import MeltingIcon from "../assets/melting.svg";

const Title :FC = () => {
    return (
        <>
            <div className="flex flex-col pb-52 m-8 items-center">
                <img className="absolute opacity-10 avatar" src={MeltingIcon} alt={'melting'} style={{width: 250, height: 250}} />
                <div className="absolute pt-10 flex flex-col text-center">
                    <span className="text-7xl font-Andika text-stroke">totalizer</span>
                    <span className="text-3xl font-Andika">YES/NOアンケート</span>
                </div>                
            </div>
        </>
    );
};

export default Title;