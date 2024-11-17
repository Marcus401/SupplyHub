﻿import api, {handleApiError} from './api';
import {SellerProductListResponseDtoObj} from "../Dtos/Seller/SellerProductListResponseDtoObj.ts";
import {ProductRequestDto} from "../Dtos/Seller/ProductRequestDto.ts";

export const productsList = async (): Promise<SellerProductListResponseDtoObj[] | null> => {
    try{
        const response =  await api.get(`/products-list`)
        return response.data as SellerProductListResponseDtoObj[];
    } catch (error) {
        handleApiError(error, 'Error ');
        return null;
    }
}

export const addProduct = async (dto : ProductRequestDto): Promise<boolean | null> => {
    try{
        const response =  await api.post(`/add-product`, dto)
        if (typeof response.data === 'boolean') {
            return response.data;
        }
        console.error('Unexpected response format:', response.data);
        return false;
    } catch (error) {
        handleApiError(error, 'Error ');
        return false;
    }
}

export const editProduct = async (productId : number, dto : ProductRequestDto): Promise<boolean | null> => {
    try{
        const response =  await api.put(`/edit-product/${productId}`, dto)
        if (typeof response.data === 'boolean') {
            return response.data;
        }
        console.error('Unexpected response format:', response.data);
        return false;
    } catch (error) {
        handleApiError(error, 'Error ');
        return false;
    }
}

export const activateProduct = async (productId : number, activate : boolean): Promise<boolean | null> => {
    try{
        const response =  await api.patch(`/activate-product/${productId}`, activate)
        if (typeof response.data === 'boolean') {
            return response.data;
        }
        console.error('Unexpected response format:', response.data);
        return false;
    } catch (error) {
        handleApiError(error, 'Error ');
        return false;
    }
}