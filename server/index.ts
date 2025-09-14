import express from 'express';
import { createServer } from 'http';
import { WebSocketServer } from 'ws';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS for the allowed frontend origin
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000';
app.use(cors({
    origin: FRONTEND_URL
}));

const server = createServer(app);
const wss = new WebSocketServer({ server });

app.get('/', (req, res) => {
    res.send('Anonymous Chat Server is running');
});

wss.on('connection', (ws) => {
    console.log('Client connected');

    ws.on('message', (data) => {
        // Broadcast the message to all connected clients
        wss.clients.forEach((client) => {
            if (client !== ws && client.readyState === ws.OPEN) {
                client.send(data.toString());
            }
        });
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});