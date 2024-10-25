export interface Message {
    messageID: number;
    conversationID: number;
    chatUserID: number;
    text: string;
}

export interface UserChatID {
    chatUserID: number;
    profileID: number;
    isSeller: boolean;
}

export interface Advertisements {
    advertisementID: number;
    companyID: number;
    productID: number;
    advertisementFile: any;
}

export interface Products {
    productID: number;
    productName: string;
    productType: string;
    stockAvailable: number;
    unit: string;
    timeframe: string;
    description: string;
    FAQ: string;
}

export interface ChatProfile {
    conversationID: number;
    chatUserID: number;
}

export interface Chat {
    conversationID: number;
    chatUserID: number;
    text: number;
}

export interface UserProfile {
    userID: number;
    name: string;
    email: string;
    password: string;
    contactNumber: number;
    position: string;
    affiliatedCompany: string;
    bio: string;
    picture: any;
    chatUserID: number;
}

export interface SellerProfile {
    sellerID: number;
    companyName: string;
    email: string;
    password: string;
    contactNumber: number;
    rating: number;
    products: any[];
    socials: any[];
    bio: string;
    businessType: string;
    picture: any;
    chatUserID: number;
}