// supplyhub.client/src/Components/ChatUserCard/ChatUserCard.tsx

import React from 'react';

const ChatUserCard: React.FC = () => {
    return (
        <div className="flex items-center p-2 hover:bg-gray-100 cursor-pointer rounded-lg">
            <img
                src="https://avatar.iran.liara.run/public/boy?username=Ash" // Placeholder image
                alt="User Avatar"
                className="w-10 h-10 rounded-full mr-4"
            />
            <span className="text-gray-700">Name</span>
        </div>
    );
};

export default ChatUserCard;
