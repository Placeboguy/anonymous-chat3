import { io } from 'socket.io-client';

const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:3000');

export const sendMessage = (message: string) => {
    socket.emit('sendMessage', message);
};

export const receiveMessages = (callback: (message: string) => void) => {
    socket.on('receiveMessage', callback);
};

export const disconnectSocket = () => {
    socket.disconnect();
};

export const connectSocket = () => {
    socket.connect();
};