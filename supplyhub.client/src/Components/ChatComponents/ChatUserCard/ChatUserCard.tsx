import React from 'react';

interface ChatUserCardProps {
    userName: string;
    profilePicture: Uint8Array;
    onClick: () => void;
}

const ChatUserCard: React.FC<ChatUserCardProps> = ({ userName, profilePicture, onClick }) => {
    return (
        <div
            className="flex items-center p-2 hover:bg-gray-100 cursor-pointer rounded-lg"
            onClick={onClick}
        >
            <img
                src={URL.createObjectURL(new Blob([profilePicture]))}
                alt="User Avatar"
                className="w-10 h-10 rounded-full mr-4"
            />
            <span className="text-gray-700">{userName}</span>
        </div>
    );
};

export default ChatUserCard;
