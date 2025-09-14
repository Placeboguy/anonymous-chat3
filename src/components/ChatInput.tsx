import React, { useState, ChangeEvent, FormEvent } from 'react';

interface ChatInputProps {
    onSend: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSend }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (input.trim()) {
            onSend(input);
            setInput('');
        }
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', marginTop: '10px' }}>
            <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Type your message..."
                style={{ flex: 1, padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
            <button type="submit" style={{ marginLeft: '10px', padding: '10px', borderRadius: '5px' }}>
                Send
            </button>
        </form>
    );
};

export default ChatInput;