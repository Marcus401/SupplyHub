
import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import ChatUserListSidebar from '../../Components/ChatComponents/ChatUserListSidebar/ChatUserListSidebar';
import ChatMessageList from '../../Components/ChatComponents/ChatMessageList/ChatMessageList';
import ChatMessagePrompt from '../../Components/ChatComponents/ChatMessagePrompt/ChatMessagePrompt';
import { ChatHistoryResponseDto } from '../../Dtos/Chat/ChatHistoryResponseDto';
import { ChatListResponseDtoObj } from '../../Dtos/Chat/ChatListResponseDtoObj';
import { fetchChatHistory, fetchChatList, sendMessage } from '../../api/chat'; 

const Chat: React.FC = () => {
    const [messages, setMessages] = useState<ChatHistoryResponseDto | null>(null); // Chat history
    const [inputText, setInputText] = useState<string>(''); // Text input for messages
    const [attachment, setAttachment] = useState<File | null>(null); // Attachment state
    const [chatList, setChatList] = useState<ChatListResponseDtoObj[]>([]); // Chat list
    const [selectedChatId, setSelectedChatId] = useState<number | null>(null); // Selected chat
    const [userId, setUserId] = useState<number>(1); // Assuming user ID is 1 for now

    // Fetch chat list and chat history on component mount
    useEffect(() => {
        const loadChatList = async () => {
            const chatListData = await fetchChatList();
            if (chatListData) {
                setChatList(chatListData);
            }
        };

        loadChatList(); // Fetch chat list
        document.title = 'Chats';
    }, []);

    // Fetch chat history when a chat is selected
    useEffect(() => {
        const loadChatHistory = async () => {
            if (selectedChatId !== null) {
                const chatHistory = await fetchChatHistory(selectedChatId);
                if (chatHistory) {
                    setMessages(chatHistory);
                }
            }
        };

        loadChatHistory(); // Fetch chat history if a chat is selected
    }, [selectedChatId]);

    // Handle input text change
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => setInputText(e.target.value);

    // Handle file change for attachment
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setAttachment(e.target.files[0]);
        }
    };

    // Handle sending message
    const handleSendMessage = async (e: FormEvent) => {
        e.preventDefault();
        if (inputText.trim() || attachment) {
            const formData = new FormData();
            formData.append('message', inputText.trim());
            if (attachment) {
                formData.append('attachment', attachment);
            }

            if (selectedChatId !== null) {
                const success = await sendMessage(selectedChatId, formData);
                if (success) {
                    // If message is successfully sent, refresh chat history
                    const updatedMessages = await fetchChatHistory(selectedChatId);
                    if (updatedMessages) {
                        setMessages(updatedMessages);
                    }
                }
            }

            setInputText(''); // Clear input text
            setAttachment(null); // Clear attachment
        }
    };

    // Handle chat selection
    const handleSelectChat = (chatId: number) => {
        setSelectedChatId(chatId); // Set selected chat ID
    };

    // Render the username of the selected chat
    const getChatUserName = (chatId: number): string | undefined => {
        const chat = chatList.find((chat) => chat.userName === `User ${chatId}`);
        return chat ? chat.userName : undefined;
    };

    return (
        <div className="flex h-[89vh] p-4">
            <ChatUserListSidebar chatList={chatList} onSelectChat={handleSelectChat} />
            <div className="flex-1 bg-white flex flex-col ml-4 border border-gray-200 rounded-lg">
                <div className="p-4 text-lg font-semibold border-b border-gray-200">
                    {selectedChatId ? `Chat with ${getChatUserName(selectedChatId)}` : 'Select a chat'}
                </div>
                {/* Render chat messages */}
                <ChatMessageList
                    messages={messages?.messages || []} // Use messages from DTO
                    userId={userId} // Pass userId for determining which messages belong to the current user
                />
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
