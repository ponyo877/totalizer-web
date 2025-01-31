import { FC, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import UndoIcon from "../assets/undo.svg";

interface HistoryItem {
  question: string
  participants: number
  yesCount: number
  timestamp: string
}

const STORAGE_KEY = 'vote-history';

export const History: FC = () => {
  const navigate = useNavigate()
  const [historyData, setHistoryData] = useState<HistoryItem[]>([]);

  useEffect(() => {
    const storedHistory = localStorage.getItem(STORAGE_KEY);
    if (storedHistory) {
      setHistoryData(JSON.parse(storedHistory));
    }
  }, []);

  return (
    <div className="flex flex-col bg-blue-50 min-h-dvh w-screen p-4 pb-20">
      <div className="mt-4 space-y-4">
        {historyData.map((item: HistoryItem, index: number) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <div className="text-gray-600 text-sm">{item.timestamp}</div>
            <div className="font-bold mt-2">{item.question}</div>
            <div className="mt-2 text-sm">
              <span>YES: {item.yesCount}</span>
              <span className="ml-4">ALL: {item.participants}</span>
            </div>
          </div>
        ))}
      </div>
      <div 
        className="fixed bottom-4 left-4 text-3xl cursor-pointer"
        onClick={() => navigate('/vote')}
      >
        <img
              className="avatar"
              src={UndoIcon}
              alt={'global'}
              style={{
                width: 32,
                height: 27,
              }}
            />
      </div>
    </div>
  )
}
