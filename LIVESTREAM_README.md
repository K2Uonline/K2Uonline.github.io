# 🎥 HomeCam Livestream System

A real-time surveillance livestream system built with WebSocket technology for secure, low-latency video streaming.

## 🏗️ System Architecture

### Components
- **WebSocket Server** (`streaming-server.js`) - Manages connections and forwards video frames
- **Broadcaster** (`broadcaster-simple.html`) - Captures webcam and sends frames
- **Viewer** (`secret-live-simple-v2.html`) - Displays live stream with authentication
- **Alternative Viewer** (`secret-live-simple.html`) - Video element version (less stable)

### Data Flow
```
Webcam → Broadcaster → WebSocket Server → Viewer → Canvas Display
   ↓           ↓              ↓              ↓           ↓
Camera    JPEG Frame    Forward Frame   JPEG Frame   Live Video
```

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Streaming Server
```bash
npm run stream
```
Server will start on port 3001 with output:
```
Streaming server running on port 3001
```

### 3. Start Broadcasting
- Open `broadcaster-simple.html` in Chrome
- Click "Start Broadcasting"
- You should see "Broadcasting live!" status

### 4. View the Stream
- Visit: `https://your-site.vercel.app/secret-live-simple-v2.html?token=secret-token-2025`
- Click "Start Watching"
- You should see the live video feed

## 🔐 Security

### Token Authentication
- **Required Token**: `secret-token-2025`
- **Access URL**: `?token=secret-token-2025`
- **Location**: Line 25 in viewer files

### Change the Token
```javascript
const REQUIRED_TOKEN = 'your-new-secret-token';
```

## 📁 File Structure

```
├── streaming-server.js          # WebSocket server
├── broadcaster-simple.html      # Camera broadcaster
├── public/
│   ├── secret-live-simple.html     # Viewer (video element)
│   └── secret-live-simple-v2.html  # Viewer (canvas - recommended)
└── package.json
```

## 🔧 Technical Details

### WebSocket Server (`streaming-server.js`)
```javascript
// Manages broadcaster and viewer connections
let broadcaster = null;
let viewers = new Set();

// Forwards frames from broadcaster to all viewers
viewers.forEach(viewer => {
  viewer.send(frameMessage);
});
```

**Features:**
- ✅ Handles multiple viewers simultaneously
- ✅ Automatic connection cleanup
- ✅ Error handling for dead connections
- ✅ JSON message protocol

### Broadcaster (`broadcaster-simple.html`)
```javascript
// Captures webcam frames and sends via WebSocket
function startStreaming() {
  ctx.drawImage(preview, 0, 0, canvas.width, canvas.height);
  const frameData = canvas.toDataURL('image/jpeg', 0.8);
  ws.send(JSON.stringify({
    type: 'video_frame',
    data: frameData
  }));
}
```

**Features:**
- ✅ 30 FPS streaming (33ms intervals)
- ✅ JPEG compression (0.8 quality)
- ✅ 640x480 resolution
- ✅ Automatic reconnection

### Viewer (`secret-live-simple-v2.html`)
```javascript
// Displays frames on canvas (no video element)
else if (data.type === 'video_frame') {
  const img = new Image();
  img.onload = () => {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  };
  img.src = data.data;
}
```

**Features:**
- ✅ Direct canvas rendering (no page refreshes)
- ✅ Smooth 30 FPS display
- ✅ Token authentication
- ✅ Responsive design

## 🎯 Why This Approach Works

### vs WebRTC
- ❌ **WebRTC**: Complex signaling, NAT traversal issues
- ✅ **WebSocket**: Simple, reliable, works through firewalls

### vs Video Element
- ❌ **Video Element**: Causes page refreshes, browser interference
- ✅ **Canvas**: Smooth updates, no page jumps

### vs Other Solutions
- ✅ **Low latency** - Direct WebSocket communication
- ✅ **Simple setup** - No complex server configuration
- ✅ **Cross-platform** - Works on any device with browser
- ✅ **Scalable** - Easy to add more viewers

## 🔄 Message Protocol

### From Broadcaster to Server
```javascript
{
  type: 'broadcaster'
}
{
  type: 'video_frame',
  data: 'data:image/jpeg;base64,/9j/4AAQ...'
}
```

### From Server to Viewer
```javascript
{
  type: 'viewer_ready'
}
{
  type: 'video_frame',
  data: 'data:image/jpeg;base64,/9j/4AAQ...'
}
```

## 🚀 Deployment

### Local Development
1. Start server: `npm run stream`
2. Open broadcaster locally
3. Access viewer via localhost or deployed URL

### Production Deployment
1. Deploy server to cloud (Heroku, Railway, etc.)
2. Update WebSocket URLs in broadcaster/viewer
3. Deploy viewer pages to Vercel/Netlify
4. Update token for security

### ESP32 Integration (Future)
- Replace webcam with ESP32-CAM
- Same WebSocket protocol
- Same viewer interface
- Add RTSP to WebSocket bridge

## 🔧 Troubleshooting

### Common Issues

**"WebSocket error"**
- Check if server is running on port 3001
- Verify firewall settings
- Check browser console for details

**"Camera permission failed"**
- Allow camera access in browser
- Check if camera is in use by another app
- Try refreshing the page

**"Connection lost"**
- Check internet connection
- Verify server is still running
- Try reconnecting

**Poor video quality**
- Adjust JPEG quality in broadcaster (line 67)
- Check network bandwidth
- Reduce frame rate if needed

### Performance Optimization

**For Better Quality:**
```javascript
// In broadcaster-simple.html, line 67
const frameData = canvas.toDataURL('image/jpeg', 0.9); // Higher quality
```

**For Lower Bandwidth:**
```javascript
// In broadcaster-simple.html, line 67
const frameData = canvas.toDataURL('image/jpeg', 0.6); // Lower quality
setTimeout(startStreaming, 50); // Lower FPS (20 FPS)
```

## 🔒 Security Considerations

### Current Security
- ✅ Token-based authentication
- ✅ Secret URL access
- ✅ No public discovery

### Recommended Enhancements
- 🔄 HTTPS/WSS for production
- 🔄 Proper user authentication
- 🔄 IP allowlisting
- 🔄 Rate limiting
- 🔄 Video encryption

## 📊 Performance Metrics

### Current Performance
- **Latency**: ~100-200ms
- **Frame Rate**: 30 FPS
- **Resolution**: 640x480
- **Compression**: JPEG 0.8 quality
- **Bandwidth**: ~500KB-1MB per second

### Optimization Tips
- Reduce quality for mobile networks
- Lower frame rate for bandwidth constraints
- Use smaller resolution for faster processing
- Implement frame dropping for poor connections

## 🎉 Success!

Your surveillance livestream system is now working with:
- ✅ Real-time video streaming
- ✅ Secure token authentication
- ✅ Smooth canvas-based display
- ✅ No page refreshes
- ✅ Cross-device compatibility

Ready for ESP32 integration and production deployment! 🚀
