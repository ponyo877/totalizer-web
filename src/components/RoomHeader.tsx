import { FC } from 'react'

interface RoomHeaderProps {
  roomNumber: string | null
  participants?: number
}

export const RoomHeader: FC<RoomHeaderProps> = ({ roomNumber, participants = 0 }) => {
  if (!roomNumber) return null

  return (
    <div className="fixed top-0 right-0 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md z-50">
      <div className="flex items-center gap-2 text-sm">
        <span>部屋No {roomNumber}</span>
        <span className="text-xs bg-blue-600/50 px-2 py-0.5 rounded">
          {participants}人参加中
        </span>
      </div>
    </div>
  )
}