import { FC } from "react";

export const Question: FC = () => {
    return (
        <>
            {/* <div className="flex flex-col m-5 bg-white items-center justify-center rounded-2xl h-screen w-11/12">
                ここに質問を書きます?
            </div> */}
            <input
                className="flex flex-col m-5 bg-white text-center justify-center rounded-2xl h-screen w-11/12"
                type="text"
                defaultValue='ここに質問を書きます?'
                // value={'ここに質問を書きます?'}
                onChange={(e) => e.preventDefault()}
            />
        </>
    )
}