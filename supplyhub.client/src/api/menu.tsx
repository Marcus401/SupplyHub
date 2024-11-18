import api, {handleApiError} from './api';
import {MenuProductListResponseDtoObj} from "../Dtos/Menu/MenuProductListResponseDtoObj.ts";
import {MenuSellerListResponseDtoObj} from "../Dtos/Menu/MenuSellerListResponseDtoObj.ts";

export const navbarInfo = async (): Promise<Uint8Array | null> => {
    try{
        const response =  await api.get(`/menu/navbar-info`)
        return response.data as Uint8Array;
    } catch (error) {
        handleApiError(error, 'Error Fetching Navbar Info');
        return null;
    }
}

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