import { FC, useState } from "react";
import { FAB } from "./FAB";

interface QuestionProps {
    yesCount: number;
    noCount: number;
}

export const Question: FC<QuestionProps> = ({ yesCount, noCount }) => {
    const [showResults, setShowResults] = useState(false);
    const totalCount = yesCount + noCount;

    const handleShowResults = () => {
        setShowResults(true);
    };

    return (
        <>
            <div className="relative flex flex-col items-center justify-center h-screen max-w-96 w-screen">
                <input
                    className={`absolute flex flex-col bg-white text-center rounded-2xl w-[90%] transition-all duration-300 ${
                        showResults 
                            ? 'h-[30%] top-[5%] text-sm' 
                            : 'h-[90%] text-base'
                    }`}
                    type="text"
                    defaultValue='ここに質問を書きます?'
                    onChange={(e) => e.preventDefault()}
                />
                {showResults && (
                    <div className="absolute top-[40%] text-center">
                        <div className="text-lg font-bold">YES</div>
                        <div className="flex items-end">
                            <div className="text-8xl font-bold mb-2">
                                {yesCount}
                            </div>
                            <div className="text-base mb-3"> /{totalCount}</div>
                        </div>
                    </div>
                )}
                <div className="absolute top-[85%] flex flex-col items-center text-center max-w-96 w-screen">
                    <FAB 
                        text="結果を見る" 
                        bgColor="bg-indigo-400" 
                        onClick={handleShowResults}
                    />
                </div>
            </div>
        </>
    );
};