// supplyhub.client/src/Components/ChatUserListSidebar/ChatUserListSidebar.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import ChatUserCard from '../ChatUserCard/ChatUserCard';

const ChatUserListSidebar: React.FC = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/'); // Redirects to the homepage
    };

    return (
        <div className="w-full sm:w-1/4 md:w-1/4 lg:w-1/5 bg-white border border-gray-200 rounded-lg overflow-y-auto">
            <div className="p-4 flex items-center space-x-2 border-b border-gray-200">
                <button onClick={handleBackClick} className="text-gray-700 hover:text-gray-900">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5"
                    >
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>
                <span className="text-lg font-semibold">Chat</span>
            </div>
            <div className="space-y-4 p-4">
                {[...Array(8)].map((_, index) => (
                    <ChatUserCard key={index} />
                ))}
            </div>
        </div>
    );
};

export default ChatUserListSidebar;
