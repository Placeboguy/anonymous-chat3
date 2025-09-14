import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import io from './socket';

const app = express();
const PORT = process.env.PORT || 8080;

// Enable CORS for the allowed frontend origin
const CORS_ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:3000';
app.use(cors({
    origin: CORS_ORIGIN
}));

const server = http.createServer(app);

// Attach socket.io to the server
io.attach(server);

app.get('/', (req, res) => {
    res.send('Anonymous Chat Server is running');
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});