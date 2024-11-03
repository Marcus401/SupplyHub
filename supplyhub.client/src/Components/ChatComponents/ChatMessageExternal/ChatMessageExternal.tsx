import React from 'react';

interface ChatMessageExternalProps {
    text: string;
    attachment?: File | null;
}

const ChatMessageExternal: React.FC<ChatMessageExternalProps> = ({ text, attachment }) => {
    return (
        <div className="flex items-start space-x-2">
            <div className="bg-gray-100 rounded-lg p-2 text-gray-700 max-w-xs">
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

export default ChatMessageExternal;
