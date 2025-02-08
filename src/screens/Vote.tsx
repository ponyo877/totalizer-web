import { FC, useState, useCallback, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Button from "../components/Button"
import { Question } from "../components/Question"
import BlockModal from "../components/BlockModal"
import { FAB } from "../components/FAB"
import { RoomHeader } from "../components/RoomHeader"

interface HistoryItem {
  question: string
  participants: number
  yesCount: number
  timestamp: string
}

const STORAGE_KEY = 'vote-history'

export const Vote: FC = () => {
  const navigate = useNavigate()
  const [yesCount, setYesCount] = useState(0)
  const [noCount, setNoCount] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState('ここに質問を書きます?')
  const [roomNumber, setRoomNumber] = useState<string | null>(null)

  useEffect(() => {
    const storedRoomNumber = localStorage.getItem('roomNumber')
    console.log('Stored room number:', storedRoomNumber) // デバッグ用
    if (storedRoomNumber) {
      setRoomNumber(storedRoomNumber)
    }
  }, [])

  const handleYesClick = () => {
    const newYesCount = yesCount + 1
    setYesCount(newYesCount)
    setShowModal(true)
  }

  const handleNoClick = () => {
    const newNoCount = noCount + 1
    setNoCount(newNoCount)
    setShowModal(true)
  }

  const handleReceiveClick = () => {
    setShowModal(false)
  }

  const handleQuestionChange = useCallback((question: string) => {
    setCurrentQuestion(question)
  }, [])

  const handleShowResults = useCallback(() => {
    const historyItem: HistoryItem = {
      question: currentQuestion,
      participants: yesCount + noCount,
      yesCount: yesCount,
      timestamp: new Date().toLocaleString()
    }

    // LocalStorageから既存の履歴を取得
    const existingHistory = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    
    // 新しい履歴を追加
    const updatedHistory = [...existingHistory, historyItem]
    
    // LocalStorageに保存
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory))
  }, [currentQuestion, yesCount, noCount])

  console.log('Current room number:', roomNumber) // デバッグ用

  return (
    <div className="relative">
      <RoomHeader roomNumber={roomNumber} />
      <div className="flex flex-col items-center justify-center bg-blue-50 h-dvh w-screen">
        <div className="flex flex-col items-center bg-blue-50 h-1/2 max-w-96 w-screen">
          <div className="flex flex-col items-center bg-indigo-200 h-5/6 max-w-96 w-screen">
            <Question
              yesCount={yesCount}
              noCount={noCount}
              onQuestionChange={handleQuestionChange}
              onShowResults={handleShowResults}
            />
          </div>
        </div>
        <div className="flex flex-col items-center bg-blue-50 h-1/2 w-screen">
          <div className="flex max-w-96 px-8 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold">{yesCount + noCount}</div>
              <div className="text-base">参加</div>
            </div>
          </div>
          <div className="max-w-96 px-8 mb-8">
            <Button text='YES' bgColor='bg-emerald-600' txtColor='text-white' center onClick={handleYesClick} />
            <Button text='NO' bgColor='bg-rose-600' txtColor='text-white' center onClick={handleNoClick} />
          </div>
        </div>
      </div>

      {showModal && (
        <BlockModal onReceiveClick={handleReceiveClick} />
      )}
      
      <FAB 
        icon="history" 
        onClick={() => navigate('/history')}  
        className="fixed bottom-8"
      />
    </div>
  )
}
