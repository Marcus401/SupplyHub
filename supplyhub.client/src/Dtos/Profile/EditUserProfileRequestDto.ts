export default interface EditUserProfileRequestDto{
    userName: string;
    bio?: string;
    profilePicture?: Uint8Array;
    coverPicture?: Uint8Array;
    additionalInfo: object;
}