import React from 'react';
import { Message } from '../types';

interface ChatMessageProps {
    message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
    return (
        <div className="chat-message">
            <strong>{message.sender.username}:</strong> {message.content}
            <span className="timestamp">{message.timestamp.toLocaleString()}</span>
        </div>
    );
};

export default ChatMessage;