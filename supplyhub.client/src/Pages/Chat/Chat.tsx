import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';

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

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    };

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
        <div className="flex h-screen p-4 ">
            {/* Sidebar for Chat List */}
            <div className="w-full sm:w-1/4 md:w-1/4 lg:w-1/5 bg-white border border-gray-200 rounded-lg overflow-y-auto">
                <div className="p-4 text-lg font-semibold border-b border-gray-200">Chat</div>
                <div className="space-y-4 p-4">
                    {[...Array(8)].map((_, index) => (
                        <div key={index} className="flex items-center p-2 hover:bg-gray-100 cursor-pointer rounded-lg">
                            <img
                                src="https://via.placeholder.com/40"
                                alt="User Avatar"
                                className="w-10 h-10 rounded-full mr-4"
                            />
                            <span className="text-gray-700">Name</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Chat Window */}
            <div className="flex-1 bg-white flex flex-col ml-4 border border-gray-200 rounded-lg">
                <div className="p-4 text-lg font-semibold border-b border-gray-200">
                    Chat Receiver Name
                </div>

                {/* Chat Messages */}
                <div className="flex-grow p-4 space-y-4 overflow-y-auto">
                    {messages.map((message) => (
                        <div key={message.messageID} className="flex items-start space-x-2">
                            <div className="bg-gray-100 rounded-lg p-2 text-gray-700 max-w-xs">
                                <p>{message.text}</p>
                                {message.attachment && (
                                    <div className="mt-2 text-sm text-blue-500 underline cursor-pointer">
                                        {message.attachment.name}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Message Input */}
                <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 flex items-center space-x-2">
                    <label className="w-10 h-10 flex justify-center items-center bg-gray-100 rounded-full cursor-pointer">
                        <input type="file" onChange={handleFileChange} className="hidden" />
                        <img src="https://via.placeholder.com/20" alt="Attachment Icon" />
                    </label>
                    <div className="relative flex-grow">
                        <input
                            type="text"
                            value={inputText}
                            onChange={handleInputChange}
                            placeholder="Type a message..."
                            className="w-full bg-gray-100 p-2 pr-12 rounded-lg outline-none text-gray-700"
                        />
                        <button
                            type="submit"
                            className="absolute right-2 top-1/2 transform -translate-y-[80%] text-black"
                        >
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
                                <path d="M22 2L11 13" />
                                <path d="M22 2L15 22L11 13L2 9L22 2z" />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Chat;
