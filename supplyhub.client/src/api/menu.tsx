import api, {handleApiError} from './api';
import {MenuProductListResponseDtoObj} from "../Dtos/Menu/MenuProductListResponseDtoObj.ts";
import {MenuSellerListResponseDtoObj} from "../Dtos/Menu/MenuSellerListResponseDtoObj.ts";

export const navbarInfo = async (): Promise<string | null> => {
    try {
        const response = await api.get('/menu/navbar-info', { responseType: 'blob' });
        
        const blobData = response.data as Blob;

        if (response.status === 200) {
            return URL.createObjectURL(blobData); 
        }

        console.error('Failed to fetch navbar info. Response status:', response.status);
        return null;
    } catch (error) {
        console.error('Error fetching navbar info:', error);
        return null;
    }
};

export const inquireUser = async (userId : number): Promise<number | null> => {
    try{
        const response =  await api.post(`/menu/inquire-user/${userId}`)
        return response.data as number;
    } catch (error) {
        handleApiError(error, 'Error Inquiring User');
        return null;
    }
}

export const fetchProductsList = async (): Promise<MenuProductListResponseDtoObj[] | null> => {
    try{
        const response =  await api.get(`/menu/fetch-products-list`)
        return response.data as MenuProductListResponseDtoObj[];
    } catch (error) {
        handleApiError(error, 'Error Fetching Products List');
        return null;
    }
}

export const fetchSellersList = async (): Promise<MenuSellerListResponseDtoObj[] | null> => {
    try{
        const response =  await api.get(`/menu/fetch-sellers-list`)
        return response.data as MenuSellerListResponseDtoObj[];
    } catch (error) {
        handleApiError(error, 'Error Fetching Sellers List');
        return null;
    }
}