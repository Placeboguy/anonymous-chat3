import { Server, Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

interface Message {
    text: string;
    timestamp: number;
}

const io = new Server({
    cors: {
        origin: process.env.CORS_ORIGIN || "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket: Socket<DefaultEventsMap>) => {
    console.log("A user connected");

    socket.on("sendMessage", (message: Message) => {
        io.emit("receiveMessage", message);
    });

    socket.on("disconnect", () => {
        console.log("A user disconnected");
    });
});

export default io;