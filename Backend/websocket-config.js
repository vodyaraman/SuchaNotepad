import { Server } from 'socket.io';

let io;

export const initWebSocket = (httpServer) => {
    io = new Server(httpServer, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST']
        }
    });
    io.on('connection', (socket) => {
        console.log('New client connected:', socket.id);
      
        socket.on('disconnect', () => {
            console.log('Client disconnected:', socket.id);
        });
      });
      
    console.log('websocket in use')

    return io;
};

export const getIo = () => {
    if (!io) {
        throw new Error('Socket.io not initialized!');
    }
    return io;
};
