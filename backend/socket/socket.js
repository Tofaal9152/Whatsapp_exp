import { Server } from 'socket.io';

const userSocketMap = {}
let io;

const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId]
}
const initializeSocket = (server) => {
    io = new Server(server, {
        cors: {
            origin: ['http://localhost:3000'],
            methods: ['GET', 'POST'],
            credentials: true,
        },
    });

    io.on('connection', (socket) => {
        console.log('Socket.io connected id:', socket.id);

        const userId = socket.handshake.query.userId
        if (userId !== undefined) {
            userSocketMap[userId] = socket.id
        }

        io.emit('getOnlineUser', Object.keys(userSocketMap))

        // Handle other socket events here, e.g., messages
        socket.on('disconnect', () => {
            console.log('Socket.io disconnected id:', socket.id);
            delete userSocketMap[userId]
            io.emit('getOnlineUser', Object.keys(userSocketMap))
        });
    });
};

export { initializeSocket, getReceiverSocketId, io };
