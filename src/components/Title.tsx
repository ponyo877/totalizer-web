import { FC } from "react";
import MeltingIcon from "../assets/melting.svg";

const Title :FC = () => {
    return (
        <>
            <div className="flex flex-col items-center py-24 ">
                <img className="absolute top-24 opacity-10 avatar" src={MeltingIcon} alt={'melting'} style={{width: 250, height: 250}} />
                <div className="absolute top-40 flex flex-col text-center">
                    <span className="text-7xl font-andika text-stroke">totalizer</span>
                    <span className="text-3xl font-andika text-stroke">YES/NOアンケート</span>
                </div>                
            </div>
        </>
    );
};

export default Title;