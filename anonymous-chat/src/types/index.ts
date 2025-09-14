// src/types/index.ts

export interface Message {
    id: string;
    content: string;
    sender: User;
    timestamp: Date;
}

export interface User {
    id: string;
    username: string;
}