import { FC, useState, useEffect } from "react";
import { ResultButton } from "./ResultButton";

interface QuestionProps {
    yesCount: number;
    noCount: number;
    onQuestionChange: (question: string) => void;
    onShowResults: () => void;
}

export const Question: FC<QuestionProps> = ({ yesCount, noCount, onQuestionChange, onShowResults }) => {
    const [showResults, setShowResults] = useState(false);
    const [question, setQuestion] = useState('ここに質問を書きます');
    const totalCount = yesCount + noCount;

    useEffect(() => {
        onQuestionChange(question);
    }, [question, onQuestionChange]);

    const handleShowResults = () => {
        setShowResults(true);
        onShowResults();
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
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                />
                {showResults && (
                        <div className="absolute top-[40%] text-center animate-scale-in">
                            <div className="text-lg font-bold animate-fade-in">YES</div>
                            <div className="flex items-end justify-center">
                                <div className="text-8xl font-bold mb-2 text-indigo-600 animate-pulse">
                                    {yesCount}
                                </div>
                                <div className="text-base mb-3 animate-fade-in">/{totalCount}</div>
                            </div>
                        </div>
                )}
                <div className="absolute top-[85%] flex flex-col items-center text-center max-w-96 w-screen">
                    <ResultButton 
                        text="結果を見る" 
                        bgColor="bg-indigo-400" 
                        onClick={handleShowResults}
                        disabled={showResults}
                    />
                </div>
            </div>
        </>
    );
};