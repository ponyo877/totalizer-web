export const connectWebSocket = (onOpen?: () => void) => {
  const ws = new WebSocket('ws://localhost:8000');
  
  ws.onopen = () => {
    console.log('WebSocket接続が確立されました');
    if (onOpen) onOpen();
  };

  ws.onerror = (error) => {
    console.error('WebSocket エラー:', error);
  };

  ws.onclose = () => {
    console.log('WebSocket接続が閉じられました');
  };

  return ws;
};

export const createRoom = (ws: WebSocket) => {
  ws.send(JSON.stringify({ type: 'open' }));
};