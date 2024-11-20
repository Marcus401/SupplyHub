import api, {handleApiError} from './api';
import {UserSignUpRequestDto} from "../Dtos/Account/UserSignUpRequestDto.ts";
import {SellerSignUpRequestDto} from "../Dtos/Account/SellerSignUpRequestDto.ts";
import {UserLoginRequestDto} from "../Dtos/Account/UserLoginRequestDto.ts";

export const registerUser = async (dto : UserSignUpRequestDto) : Promise<boolean> => {
    try{
        const response = await api.post('/account/register-user', dto);
        const token = (response.data as { token: { result: string } }).token.result;

        if (token) {
            localStorage.setItem('JwtToken', token);
            return true; 
        }
        
        console.error('Token not returned in response');
        return false;
    } catch (error) {
        handleApiError(error, 'Error Creating Account');
        return false;
    }
}

export const registerSeller = async (dto : SellerSignUpRequestDto) : Promise<boolean> => {
    try{
        const response =  (await api.post('/account/register-seller', dto));
        const token = (response.data as { token: { result: string } }).token.result;

        if (token) {
            localStorage.setItem('JwtToken', token);
            return true; 
        }

        console.error('Token not returned in response');
        return false;
    } catch (error) {
        handleApiError(error, 'Error Creating Account');
        return false;
    }
}

export const loginUser = async (dto : UserLoginRequestDto) : Promise<boolean> => {
    try{
        const response =  (await api.post('/account/login', dto));
        const token = (response.data as { token: { result: string } }).token.result;

        if (token) {
            localStorage.setItem('JwtToken', token);
            return true; 
        }

        console.error('Token not returned in response');
        return false;
    }  catch (error) {
        handleApiError(error, 'Error Logging In');
        return false;
    }
}