export default interface FetchProductResponseDto{
    productName: string;
    productType?: string;
    thumbnail?: Uint8Array;
    images?: Uint8Array[];
    stockAvailable?: number;
    price: number;
    unit?: string;
    timeFrame?: string;
    description?: string;
    faqQuestions?: string[];
    faqAnswers?: string[];
}