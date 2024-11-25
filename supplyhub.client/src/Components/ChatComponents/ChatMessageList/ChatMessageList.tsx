// ChatMessageList.tsx

import React from 'react';
import ChatMessageExternal from '../ChatMessageExternal/ChatMessageExternal';
import ChatMessageSelf from '../ChatMessageSelf/ChatMessageSelf';
import { ChatHistoryResponseObj } from '../../../Dtos/Chat/ChatHistoryResponseObj';

interface ChatMessageListProps {
    messages: ChatHistoryResponseObj[]; 
    userId: number; // Define userId prop here
}

const ChatMessageList: React.FC<ChatMessageListProps> = ({ messages, userId }) => {
    return (
        <div className="flex-grow p-4 space-y-4 overflow-y-auto">
            {messages.map((message, index) =>
                message.userId === userId ? (
                    <ChatMessageSelf key={index} text={message.text} />
                ) : (
                    <ChatMessageExternal key={index} text={message.text} />
                )
            )}
        </div>
    );
};

export default ChatMessageList;
