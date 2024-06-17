import { FC } from "react";
import { FAB } from "./FAB";

export const Question: FC = () => {
    return (
        <>
            {/* <div className="flex flex-col m-5 bg-white items-center justify-center rounded-2xl h-screen w-11/12">
                ここに質問を書きます?
            </div> */}
            {/* <input
                className="flex flex-col m-5 bg-white text-center justify-center rounded-2xl h-screen w-11/12"
                type="text"
                defaultValue='ここに質問を書きます?'
                onChange={(e) => e.preventDefault()}
            /> */}
            {/* <FAB coordinate="my-48" text="ぽにょ"/> */}
            <div className="relative flex flex-col items-center justify-center h-screen w-11/12">
                <input
                    className="absolute flex flex-col bg-white text-center rounded-2xl h-5/6 w-11/12"
                    type="text"
                    defaultValue='ここに質問を書きます?'
                    onChange={(e) => e.preventDefault()}
                />
                <div className="absolute top-3/4 flex flex-col text-center">
                    <FAB text="ぽにょ" />
                </div>
            </div>
        </>
    )
}