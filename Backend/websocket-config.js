import { Server } from 'socket.io';

let io;

export const initWebSocket = (httpServer) => {
    io = new Server(httpServer, {
        cors: {
            origin: '*', // Настроить origin в зависимости от нужд безопасности
            methods: ['GET', 'POST']
        }
    });

    io.on('connection', (socket) => {
        console.log('New client connected:', socket.id);

        // Здесь можно определить обработчики событий
        socket.on('disconnect', () => {
            console.log('Client disconnected:', socket.id);
        });
    });

    return io;
};

export const getIo = () => {
    if (!io) {
        throw new Error('Socket.io not initialized!');
    }
    return io;
};
