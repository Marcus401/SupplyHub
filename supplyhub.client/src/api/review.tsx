import api, {handleApiError} from './api';
import {ReviewRequestDto} from "../Dtos/Review/ReviewRequestDto.ts";

export const reviewSeller = async (sellerUserId : number, dto : ReviewRequestDto): Promise<boolean | null> => {
    try{
        const response =  await api.post(`/review-seller/${sellerUserId}`, dto)
        if (typeof response.data === 'boolean') {
            return response.data;
        }
        console.error('Unexpected response format:', response.data);
        return false;
    } catch (error) {
        handleApiError(error, 'Error Sending Seller Review');
        return false;
    }
}

export const reviewProduct = async (productId : number, dto : ReviewRequestDto): Promise<boolean | null> => {
    try{
        const response =  await api.post(`/review-product/${productId}`, dto)
        if (typeof response.data === 'boolean') {
            return response.data;
        }
        console.error('Unexpected response format:', response.data);
        return false;
    } catch (error) {
        handleApiError(error, 'Error Sending Product Review');
        return false;
    }
}