import React from 'react';

interface ChatMessageProps {
    content: string;
    sender: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ content, sender }) => {
    return (
        <div className="chat-message">
            <strong>{sender}:</strong> {content}
        </div>
    );
};

export default ChatMessage;