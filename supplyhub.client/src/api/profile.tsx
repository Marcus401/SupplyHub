import api, {handleApiError} from './api';
import {EditUserProfileRequestDto} from "../Dtos/Profile/EditUserProfileRequestDto.ts";
import {UserProfileResponseDto} from "../Dtos/Profile/UserProfileResponseDto.ts";

export const fetchUser = async (userId : number): Promise<UserProfileResponseDto | null> => {
    try{
        const response =  await api.get(`/profile/fetch-user/${userId}`)
        return response.data as UserProfileResponseDto;
    } catch (error) {
        handleApiError(error, 'Error Fetching User Information');
        return null;
    }
}

export const editProfile = async (dto : EditUserProfileRequestDto): Promise<UserProfileResponseDto | null> => {
    try{
        const response =  await api.put(`/profile/edit-profile`, dto)
        return response.data as UserProfileResponseDto;
    } catch (error) {
        handleApiError(error, 'Error Editing Profile');
        return null;
    }
}