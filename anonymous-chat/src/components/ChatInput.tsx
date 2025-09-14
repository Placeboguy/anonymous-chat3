import React, { useState } from 'react';

const ChatInput: React.FC<{ onSend: (message: string) => void }> = ({ onSend }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            onSend(input);
            setInput('');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', marginTop: '10px' }}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
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