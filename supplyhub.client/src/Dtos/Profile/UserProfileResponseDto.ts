export default interface UserProfileResponseDto{
    userName: string;
    phoneNumber?: number;
    bio?: string;
    profilePicture?: Uint8Array;
    coverPicture?: Uint8Array;
    role: string;
    additionalInfo: object;
}