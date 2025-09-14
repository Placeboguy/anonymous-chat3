import io from 'socket.io-client';

interface Message {
    text: string;
    timestamp: number;
}

const SOCKET_URL = process.env.NEXT_PUBLIC_WS_URL || 'ws://localhost:8080';
const socket = io(SOCKET_URL);

export const sendMessage = (text: string) => {
    const message: Message = {
        text,
        timestamp: Date.now()
    };
    socket.emit('sendMessage', message);
};

export const receiveMessages = (callback: (message: Message) => void) => {
    socket.on('receiveMessage', callback);
};

export const disconnectSocket = () => {
    socket.disconnect();
};

export const connectSocket = () => {
    socket.connect();
};