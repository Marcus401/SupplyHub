export interface UserProfileResponseDto{
    userName: string;
    phoneNumber?: number;
    bio?: string;
    profilePicture?: string;
    coverPicture?: string;
    role: string;
    additionalInfo: object;
}