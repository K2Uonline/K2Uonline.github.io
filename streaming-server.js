const WebSocket = require('ws');
const http = require('http');
const server = http.createServer();
const wss = new WebSocket.Server({ server });

let broadcaster = null;
let viewers = new Set();

wss.on('connection', (ws) => {
  console.log('New connection');

  ws.on('message', (message) => {
    const data = JSON.parse(message);
    
    if (data.type === 'broadcaster') {
      broadcaster = ws;
      console.log('Broadcaster connected');
      ws.send(JSON.stringify({ type: 'broadcaster_ready' }));
    }
    
    else if (data.type === 'viewer') {
      viewers.add(ws);
      console.log('Viewer connected, total viewers:', viewers.size);
      ws.send(JSON.stringify({ type: 'viewer_ready' }));
    }
    
    else if (data.type === 'video_frame') {
      // Forward video frame to all viewers with error handling
      const frameMessage = JSON.stringify({
        type: 'video_frame',
        data: data.data
      });
      
      viewers.forEach(viewer => {
        if (viewer.readyState === WebSocket.OPEN) {
          try {
            viewer.send(frameMessage);
          } catch (error) {
            console.log('Error sending frame to viewer:', error.message);
            viewers.delete(viewer);
          }
        } else {
          // Remove disconnected viewers
          viewers.delete(viewer);
        }
      });
    }
  });

  ws.on('close', () => {
    if (ws === broadcaster) {
      broadcaster = null;
      console.log('Broadcaster disconnected');
    } else {
      viewers.delete(ws);
      console.log('Viewer disconnected, total viewers:', viewers.size);
    }
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Streaming server running on port ${PORT}`);
});
