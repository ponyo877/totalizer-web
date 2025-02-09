import { FC, useState, useCallback, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Button from "../components/Button"
import { Question } from "../components/Question"
import BlockModal from "../components/BlockModal"
import { FAB } from "../components/FAB"
import { RoomHeader } from "../components/RoomHeader"
import { getCurrentWebSocket } from "../utils/websocket"

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
    const [currentQuestion, setCurrentQuestion] = useState('')
    const [roomNumber, setRoomNumber] = useState<string | null>(null)
    const [participants, setParticipants] = useState(0)
    const [roomID, setRoomID] = useState(0)

    useEffect(() => {
    const roomCount = localStorage.getItem('roomCount')
    if (roomCount) {
      setParticipants(parseInt(roomCount))
    }
        const storedRoomNumber = localStorage.getItem('roomNumber')
        console.log('Stored room number:', storedRoomNumber)
        if (storedRoomNumber) {
            setRoomNumber(storedRoomNumber)
        }
    }, [])

    useEffect(() => {
        const ws = getCurrentWebSocket()
        if (ws) {
            ws.onmessage = (event) => {
                const data = JSON.parse(event.data)
                // type=1: 参加人数の更新
                if (data.type === 1) {
                    if ('enter_count' in data) {
                        setRoomID(data.room_id)
                        setParticipants(data.enter_count)
                    }
                }
                // type=2: 質問の更新
                else if (data.type === 2) {
                    if ('question' in data) {
                        setCurrentQuestion(data.question)
                    }
                }
            }
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
        
        // 質問が変更されたらリアルタイムで他の参加者に通知
        if (roomID) {
            const ws = getCurrentWebSocket()
            if (ws && ws.readyState === WebSocket.OPEN) {
                ws.send(JSON.stringify({
                    type: 'ask',
                    room_id: roomID,
                    question: question
                }))
            }
        }
    }, [roomID])

    const handleShowResults = useCallback(() => {
        // 履歴に保存
        const historyItem: HistoryItem = {
            question: currentQuestion,
            participants: yesCount + noCount,
            yesCount: yesCount,
            timestamp: new Date().toLocaleString()
        }

        const existingHistory = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
        const updatedHistory = [...existingHistory, historyItem]
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory))

        if (roomID) {
            const ws = getCurrentWebSocket()
            if (ws && ws.readyState === WebSocket.OPEN) {
                ws.send(JSON.stringify({
                    type: 'ask',
                    room_id: roomID,
                    question: currentQuestion
                }))
            }
        }
    }, [currentQuestion, yesCount, noCount, roomNumber])

    return (
        <div className="relative">
            <RoomHeader roomNumber={roomNumber} participants={participants} />
            <div className="flex flex-col items-center justify-center bg-blue-50 h-dvh w-screen">
                <div className="flex flex-col items-center bg-blue-50 h-1/2 max-w-96 w-screen">
                    <div className="flex flex-col items-center bg-indigo-200 h-5/6 max-w-96 w-screen">
                        <Question
                            yesCount={yesCount}
                            noCount={noCount}
                            question={currentQuestion}
                            onQuestionChange={handleQuestionChange}
                            onShowResults={handleShowResults}
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center bg-blue-50 h-1/2 w-screen">
                    <div className="flex max-w-96 px-8 mb-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold">{yesCount+noCount}</div>
                            <div className="text-base">投票済み</div>
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
