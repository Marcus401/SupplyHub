// supplyhub.client/src/Components/ChatMessagePrompt/ChatMessagePrompt.tsx

import React, { ChangeEvent, FormEvent } from 'react';

interface ChatMessagePromptProps {
    inputText: string;
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onSendMessage: (e: FormEvent) => void;
}

const ChatMessagePrompt: React.FC<ChatMessagePromptProps> = ({
    inputText,
    onInputChange,
    onFileChange,
    onSendMessage,
}) => {
    return (
        <form onSubmit={onSendMessage} className="p-4 border-t border-gray-200 flex items-center space-x-2">
            <label className="w-7 h-7 flex justify-center items-center bg-gray-100 rounded-full cursor-pointer -mt-4">
                <input type="file" onChange={onFileChange} className="hidden" />
                <img src="https://cdn-icons-png.flaticon.com/512/1092/1092216.png" alt="Attachment Icon" />
            </label>
            <div className="relative flex-grow">
                <input
                    type="text"
                    value={inputText}
                    onChange={onInputChange}
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
    );
};

export default ChatMessagePrompt;
