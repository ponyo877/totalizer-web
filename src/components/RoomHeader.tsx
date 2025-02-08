import { FC } from 'react'

interface RoomHeaderProps {
  roomNumber: string | null
}

export const RoomHeader: FC<RoomHeaderProps> = ({ roomNumber }) => {
  if (!roomNumber) return null

  return (
    <div className="fixed top-0 right-0 m-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md z-50">
      部屋番号: {roomNumber}
    </div>
  )
}