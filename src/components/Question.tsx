import { FC } from "react";
import { FAB } from "./FAB";

export const Question: FC = () => {
    return (
        <>
            <div className="relative flex flex-col items-center justify-center h-screen max-w-96 w-screen">
                <input
                    className="absolute flex flex-col bg-white text-center rounded-2xl h-[90%] w-[90%]"
                    type="text"
                    defaultValue='ここに質問を書きます?'
                    onChange={(e) => e.preventDefault()}
                />
                <div className="absolute top-[85%] flex flex-col items-center text-center max-w-96 w-screen">
                    <FAB text="結果発表" bgColor="bg-indigo-400" />
                </div>
            </div>
        </>
    )
}