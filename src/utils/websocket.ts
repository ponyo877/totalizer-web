export const connectWebSocket = (onOpen?: () => void, onMessage?: (data: any) => void) => {
  const ws = new WebSocket('ws://localhost:8000')
  
  ws.onopen = () => {
    console.log('WebSocket接続が確立されました')
    if (onOpen) onOpen()
  }

  ws.onerror = (error) => {
    console.error('WebSocket エラー:', error)
  }

  ws.onclose = () => {
    console.log('WebSocket接続が閉じられました')
  }

  ws.onmessage = (event) => {
    if (onMessage) {
      const data = JSON.parse(event.data)
      onMessage(data)
    }
  }

  return ws
}

export const createRoom = (ws: WebSocket) => {
  ws.send(JSON.stringify({ type: 'open' }))
}

export const enterRoom = (ws: WebSocket, roomNumber: string) => {
  ws.send(JSON.stringify({ type: 'enter', room_number: roomNumber }))
}