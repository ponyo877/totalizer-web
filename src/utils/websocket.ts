// WebSocket接続を保持する変数
let globalWs: WebSocket | null = null
let globalMessageHandler: ((data: any) => void) | null = null

export const connectWebSocket = (onOpen?: () => void, onMessage?: (data: any) => void) => {
  // 既存の接続があり、onMessageが新しく設定される場合は、ハンドラーを更新
  if (globalWs && globalWs.readyState === WebSocket.OPEN && onMessage) {
    globalMessageHandler = onMessage
    return globalWs
  }

  // 新しい接続を作成
  const ws = new WebSocket('ws://localhost:8000')
  globalWs = ws
  
  ws.onopen = () => {
    console.log('WebSocket接続が確立されました')
    if (onOpen) onOpen()
  }

  ws.onerror = (error) => {
    console.error('WebSocket エラー:', error)
  }

  ws.onclose = () => {
    console.log('WebSocket接続が閉じられました')
    globalWs = null
    globalMessageHandler = null
  }

  ws.onmessage = (event) => {
    const data = JSON.parse(event.data)
    if (onMessage) {
      onMessage(data)
    }
    // グローバルメッセージハンドラーも呼び出す
    if (globalMessageHandler && globalMessageHandler !== onMessage) {
      globalMessageHandler(data)
    }
  }

  if (onMessage) {
    globalMessageHandler = onMessage
  }

  return ws
}

export const createRoom = (ws: WebSocket) => {
  ws.send(JSON.stringify({ type: 'open' }))
}

export const enterRoom = (ws: WebSocket, roomNumber: string) => {
  ws.send(JSON.stringify({ type: 'enter', room_number: roomNumber }))
}

// 現在のWebSocket接続を取得
export const getCurrentWebSocket = () => globalWs

// メッセージハンドラーを設定
export const setMessageHandler = (handler: (data: any) => void) => {
  globalMessageHandler = handler
}