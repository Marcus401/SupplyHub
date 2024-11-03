// supplyhub.client/src/Components/ChatMessageList/ChatMessageList.tsx

import React from 'react';
import ChatMessageExternal from '../ChatMessageExternal/ChatMessageExternal';
import ChatMessageSelf from '../ChatMessageSelf/ChatMessageSelf';

interface Message {
    messageID: number;
    chatUserID: number;
    text: string;
    attachment?: File | null;
}

interface ChatMessageListProps {
    messages: Message[];
}

const ChatMessageList: React.FC<ChatMessageListProps> = ({ messages }) => {
    return (
        <div className="flex-grow p-4 space-y-4 overflow-y-auto">
            {messages.map((message) =>
                message.chatUserID === 1 ? (
                    <ChatMessageSelf
                        key={message.messageID}  // Assign key separately
                        text={message.text}
                        attachment={message.attachment}
                    />
                ) : (
                    <ChatMessageExternal
                        key={message.messageID}  // Assign key separately
                        text={message.text}
                        attachment={message.attachment}
                    />
                )
            )}
        </div>
    );
};

export default ChatMessageList;
