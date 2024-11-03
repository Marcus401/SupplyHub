// supplyhub.client/src/Components/ChatMessageSelf/ChatMessageSelf.tsx

import React from 'react';

interface ChatMessageSelfProps {
    text: string;
    attachment?: File | null;
}

const ChatMessageSelf: React.FC<ChatMessageSelfProps> = ({ text, attachment }) => {
    return (
        <div className="flex justify-end items-start space-x-2">
            <div className="bg-blue-100 rounded-lg p-2 text-gray-700 max-w-xs">
                <p>{text}</p>
                {attachment && (
                    <div className="mt-2 text-sm text-blue-500 underline cursor-pointer">
                        {attachment.name}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChatMessageSelf;
