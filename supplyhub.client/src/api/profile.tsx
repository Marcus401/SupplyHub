import api, {handleApiError} from './api';
import {EditUserProfileRequestDto} from "../Dtos/Profile/EditUserProfileRequestDto.ts";
import {UserProfileResponseDto} from "../Dtos/Profile/UserProfileResponseDto.ts";

export const fetchUser = async (userId : number): Promise<UserProfileResponseDto | null> => {
    try{
        const response =  await api.get(`/fetch-user/${userId}`)
        return response.data as UserProfileResponseDto;
    } catch (error) {
        handleApiError(error, 'Error ');
        return null;
    }
}

export const editProfile = async (dto : EditUserProfileRequestDto): Promise<UserProfileResponseDto | null> => {
    try{
        const response =  await api.put(`/edit-profile`, dto)
        return response.data as UserProfileResponseDto;
    } catch (error) {
        handleApiError(error, 'Error ');
        return null;
    }
}