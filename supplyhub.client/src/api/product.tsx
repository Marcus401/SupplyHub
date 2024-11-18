import api, {handleApiError} from './api';
import {FetchProductResponseDto} from "../Dtos/Product/FetchProductResponseDto.ts";

export const fetchProduct = async (productId : number): Promise<FetchProductResponseDto | null> => {
    try{
        const response =  await api.get(`/fetch-product/${productId}`)
        return response.data as FetchProductResponseDto;
    } catch (error) {
        handleApiError(error, 'Error Fetching Product Information');
        return null;
    }
}