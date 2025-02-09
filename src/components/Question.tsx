import { FC, useState, useEffect } from "react"
import { ResultButton } from "./ResultButton"

interface QuestionProps {
    yesCount: number
    noCount: number
    question: string
    onQuestionChange: (question: string) => void
    onShowResults: () => void
}

export const Question: FC<QuestionProps> = ({ 
    yesCount, 
    noCount, 
    question,
    onQuestionChange, 
    onShowResults 
}) => {
    const [showResults, setShowResults] = useState(false)

    const handleShowResults = () => {
        setShowResults(true)
        onShowResults()
    }

    return (
        <>
            <div className="relative flex flex-col items-center justify-center h-screen max-w-96 w-screen">
                <div 
                    className={`absolute flex items-center justify-center bg-white rounded-2xl w-[90%] ${
                        showResults 
                            ? 'h-[30%] top-[5%] text-sm' 
                            : 'h-[90%]'
                    }`}
                >
                    <textarea
                        className={`w-full h-full bg-transparent text-center focus:outline-none resize-none px-4 [&::-webkit-scrollbar]:hidden ${
                            showResults ? 'cursor-default' : 'cursor-text'
                        }`}
                        value={question}
                        onChange={(e) => onQuestionChange(e.target.value)}
                        placeholder="ここに質問を書きます"
                        readOnly={showResults}
                        style={{
                            wordWrap: 'break-word',
                            overflowWrap: 'break-word',
                            paddingTop: showResults ? '1rem' : 'calc(45% - 1rem)',
                            paddingBottom: showResults ? '1rem' : 'calc(45% - 1rem)',
                            msOverflowStyle: 'none',
                            scrollbarWidth: 'none'
                        }}
                    />
                </div>
                {showResults && (
                        <div className="absolute top-[40%] text-center animate-scale-in">
                            <div className="text-lg font-bold animate-fade-in">YES</div>
                            <div className="flex items-end justify-center">
                                <div className="text-8xl font-bold mb-2 text-indigo-600 animate-pulse">
                                    {yesCount}
                                </div>
                                <div className="text-base mb-3 animate-fade-in">/{yesCount + noCount}</div>
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
    )
}