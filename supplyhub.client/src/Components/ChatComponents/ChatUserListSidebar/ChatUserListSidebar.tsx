import React from 'react';
import ChatUserCard from '../ChatUserCard/ChatUserCard';
import { ChatListResponseDtoObj } from '../../../Dtos/Chat/ChatListResponseDtoObj';

interface ChatUserListSidebarProps {
    chatList: ChatListResponseDtoObj[];
    onSelectChat: (chatId: number) => void;
}

const ChatUserListSidebar: React.FC<ChatUserListSidebarProps> = ({ chatList, onSelectChat }) => {
    return (
        <div className="w-full sm:w-1/4 md:w-1/4 lg:w-1/5 bg-white border border-gray-200 rounded-lg overflow-y-auto">
            <div className="p-4 flex items-center space-x-2 border-b border-gray-200">
                <span className="text-lg font-semibold">Chats</span>
            </div>
            <div className="space-y-4 p-4">
                {chatList.map((chat, index) => (
                    <ChatUserCard
                        key={index}
                        userName={chat.userName}
                        profilePicture={chat.profilePicture}
                        onClick={() => onSelectChat(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ChatUserListSidebar;
