const os = require('os');

function getLocalIP() {
  const interfaces = os.networkInterfaces();
  
  for (const name of Object.keys(interfaces)) {
    for (const interface of interfaces[name]) {
      // Skip internal and non-IPv4 addresses
      if (interface.family === 'IPv4' && !interface.internal) {
        return interface.address;
      }
    }
  }
  
  return 'No local IP found';
}

const localIP = getLocalIP();
console.log('🌐 Your computer\'s local IP address:');
console.log(`   ${localIP}`);
console.log('');
console.log('📱 To access from your phone:');
console.log(`   http://${localIP}:3000/secret-live-network.html?token=secret-token-2025`);
console.log('');
console.log('💡 Make sure your phone and computer are on the same WiFi network!');
