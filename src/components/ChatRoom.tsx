import React, { useEffect, useState } from 'react';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
import { Message, User } from '../types';

const ChatRoom: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);

    // Mock user for demonstration
    const currentUser: User = {
        id: '1',
        username: 'Anonymous User'
    };

    useEffect(() => {
        // Get WebSocket URL from environment variable
        const wsUrl = process.env.NEXT_PUBLIC_WS_URL || 'ws://localhost:3001';
        const socket = new WebSocket(wsUrl);

        socket.onmessage = (event) => {
            const newMessage: Message = JSON.parse(event.data);
            setMessages((prevMessages) => [...prevMessages, newMessage]);
        };

        return () => {
            socket.close();
        };
    }, []);

    const handleSendMessage = (messageContent: string) => {
        const message: Message = {
            id: Math.random().toString(36).substr(2, 9),
            content: messageContent,
            sender: currentUser,
            timestamp: new Date(),
        };

        // Logic to send message to the server
        // socket.send(JSON.stringify(message));
        setMessages((prevMessages) => [...prevMessages, message]);
    };

    return (
        <div>
            <div>
                {messages.map((msg, index) => (
                    <ChatMessage key={msg.id} message={msg} />
                ))}
            </div>
            <ChatInput onSend={handleSendMessage} />
        </div>
    );
};

export default ChatRoom;