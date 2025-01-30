import { FC, useEffect, useState } from "react"

interface HistoryItem {
  question: string
  participants: number
  yesCount: number
  timestamp: string
}

const STORAGE_KEY = 'vote-history';

export const History: FC = () => {
  const [historyData, setHistoryData] = useState<HistoryItem[]>([]);

  useEffect(() => {
    const storedHistory = localStorage.getItem(STORAGE_KEY);
    if (storedHistory) {
      setHistoryData(JSON.parse(storedHistory));
    }
  }, []);

  return (
    <div className="flex flex-col bg-blue-50 min-h-dvh w-screen p-4">
      <div className="mt-4 space-y-4">
        {historyData.map((item: HistoryItem, index: number) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <div className="text-gray-600 text-sm">{item.timestamp}</div>
            <div className="font-bold mt-2">{item.question}</div>
            <div className="mt-2 text-sm">
              <span>参加人数: {item.participants}</span>
              <span className="ml-4">YES: {item.yesCount}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
