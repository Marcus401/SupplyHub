export interface ProductRequestDto{
    thumbnail?: File;
    images?: File[];
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