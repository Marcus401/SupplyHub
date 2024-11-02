// supplyhub.client/src/Components/ChatUserListSidebar/ChatUserListSidebar.tsx

import React from 'react';
import ChatUserCard from '../ChatUserCard/ChatUserCard';

const ChatUserListSidebar: React.FC = () => {
    return (
        <div className="w-full sm:w-1/4 md:w-1/4 lg:w-1/5 bg-white border border-gray-200 rounded-lg overflow-y-auto">
            <div className="p-4 text-lg font-semibold border-b border-gray-200">Chat</div>
            <div className="space-y-4 p-4">
                {[...Array(8)].map((_, index) => (
                    <ChatUserCard key={index} />
                ))}
            </div>
        </div>
    );
};

export default ChatUserListSidebar;
