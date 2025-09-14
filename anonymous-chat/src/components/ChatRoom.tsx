import React, { useEffect, useState } from 'react';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
import { Message } from '../types';

const ChatRoom: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        // Logic to connect to WebSocket and listen for messages
        const socket = new WebSocket('ws://your-websocket-url');

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
            content: messageContent,
            sender: 'User', // Replace with actual user info
            timestamp: new Date().toISOString(),
        };

        // Logic to send message to the server
        // socket.send(JSON.stringify(message));
        setMessages((prevMessages) => [...prevMessages, message]);
    };

    return (
        <div>
            <div>
                {messages.map((msg, index) => (
                    <ChatMessage key={index} message={msg} />
                ))}
            </div>
            <ChatInput onSendMessage={handleSendMessage} />
        </div>
    );
};

export default ChatRoom;