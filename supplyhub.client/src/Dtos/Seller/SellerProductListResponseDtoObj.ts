export default interface SellerProductListResponseDtoObj{
    productName: string;
    thumbnail?: Uint8Array;
    description?: string;
    stockAvailable?: number;
    isAvailable: boolean;
}