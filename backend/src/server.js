import http from 'http';
import app from './app'; // the actual Express app
import vsSocket from '../src/vxSocket'
import Socket from 'socket.io'
const WebSocketServer = require('websocket').server;

const PORT = process.env.PORT || 9898;
const server = http.createServer(app);

export const wsServer = new WebSocketServer({
  httpServer: server
});

// export const io = new Socket(server, {
//   pingInterval: 2000,
//   pingTimeout: 5000
// })
//
vsSocket.listen(wsServer)

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});