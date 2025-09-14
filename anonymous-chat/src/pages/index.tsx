import React from 'react';
import ChatRoom from '../components/ChatRoom';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Anonymous Chat</h1>
            <ChatRoom />
        </div>
    );
};

export default Home;