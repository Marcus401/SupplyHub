export interface SellerProductListResponseDtoObj{
    productName: string;
    thumbnail?: string;
    description?: string;
    stockAvailable?: number;
    isAvailable: boolean;
    productId: number;
}