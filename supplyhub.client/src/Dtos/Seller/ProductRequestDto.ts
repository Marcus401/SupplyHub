export default interface ProductRequestDto{
    thumbnail?: Uint8Array;
    images?: Uint8Array[];
    productName: string;
    productType: string;
    stockAvailable: number;
    price: number;
    unit?: string;
    timeframe?: string;
    description?: string;
    faqQuestions?: string[];
    faqAnswers?: string[];
}