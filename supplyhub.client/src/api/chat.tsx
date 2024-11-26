import { ChatListResponseDtoObj } from "../Dtos/Chat/ChatListResponseDtoObj.ts";
import api, { handleApiError } from './api';
import { ChatHistoryResponseDto } from "../Dtos/Chat/ChatHistoryResponseDto.ts";

export const fetchChatHistory = async (chatId: number): Promise<ChatHistoryResponseDto | null> => {
    try {
        const response = await api.get(`/chat/fetch-chat-history/${chatId}`);
        return response.data as ChatHistoryResponseDto;
    } catch (error) {
        handleApiError(error, 'Error Fetching Chat History');
        return null;
    }
}

export const fetchChatList = async (): Promise<ChatListResponseDtoObj[] | null> => {
    try {
        const response = await api.get('/chat/fetch-chat-list');
        return response.data as ChatListResponseDtoObj[];
    } catch (error) {
        handleApiError(error, 'Error Fetching Chat List');
        return null;
    }
}

export const sendMessage = async (chatId: number, formData: FormData): Promise<boolean> => {
    try {
        const response = await api.post(`/chat/send-message/${chatId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        // Check the API response here
        console.log('API Response:', response.data);

        if (typeof response.data === 'boolean') {
            return response.data;
        }
        console.error('Unexpected response format:', response.data);
        return false;
    } catch (error) {
        handleApiError(error, 'Error Sending Message');
        return false;
    }
};

