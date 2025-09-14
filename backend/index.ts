import express, { Request, Response } from 'express';
import http from 'http';
import cors from 'cors';
import { Server } from 'socket.io';

const app = express();
const PORT = process.env.PORT || 8080;

// Enable CORS for the allowed frontend origin
const CORS_ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:3000';
app.use(cors({
    origin: CORS_ORIGIN
}));

const server = http.createServer(app);

// Create and configure Socket.IO server
const io = new Server(server, {
    cors: {
        origin: CORS_ORIGIN,
        methods: ['GET', 'POST']
    }
});

// Socket.IO connection handling
io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('sendMessage', (message: { text: string; timestamp: number }) => {
        io.emit('receiveMessage', message);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

app.get('/', (req: Request, res: Response) => {
    res.send('Anonymous Chat Server is running');
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});