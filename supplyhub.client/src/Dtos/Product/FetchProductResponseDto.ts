export interface FetchProductResponseDto {
    productID: number;
    productName: string;
    productType?: string;
    thumbnail?: string;
    images?: string[];
    stockAvailable?: number;
    price: number;
    unit?: string;
    faqQuestions?: string[]; 
    faqAnswers?: string[];   
    timeFrame?: string;
    description?: string;
    isActive?: boolean;
    dateAdded?: string;
}
