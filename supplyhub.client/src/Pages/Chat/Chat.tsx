// supplyhub.client/src/Components/Chat/Chat.tsx

import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import ChatUserListSidebar from '../../Components/ChatComponents/ChatUserListSidebar/ChatUserListSidebar';
import ChatMessageList from '../../Components/ChatComponents/ChatMessageList/ChatMessageList';
import ChatMessagePrompt from '../../Components/ChatComponents/ChatMessagePrompt/ChatMessagePrompt';
interface Message {
    messageID: number;
    conversationID: number;
    chatUserID: number;
    text: string;
    attachment?: File | null;
}

const Chat: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputText, setInputText] = useState<string>('');
    const [attachment, setAttachment] = useState<File | null>(null);

    useEffect(() => {
        document.title = 'Chats';
    }, []);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => setInputText(e.target.value);
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setAttachment(e.target.files[0]);
        }
    };
    const handleSendMessage = (e: FormEvent) => {
        e.preventDefault();
        if (inputText.trim() || attachment) {
            const newMessage: Message = {
                messageID: messages.length + 1,
                conversationID: 1,
                chatUserID: 1,
                text: inputText,
                attachment,
            };
            setMessages((prevMessages) => [...prevMessages, newMessage]);
            setInputText('');
            setAttachment(null);
        }
    };

    return (
        <div className="flex h-screen p-4">
            <ChatUserListSidebar />
            <div className="flex-1 bg-white flex flex-col ml-4 border border-gray-200 rounded-lg">
                <div className="p-4 text-lg font-semibold border-b border-gray-200">
                    Chat Receiver Name
                </div>
                <ChatMessageList messages={messages} />
                <ChatMessagePrompt
                    inputText={inputText}
                    onInputChange={handleInputChange}
                    onFileChange={handleFileChange}
                    onSendMessage={handleSendMessage}
                />
            </div>
        </div>
    );
};

export default Chat;
