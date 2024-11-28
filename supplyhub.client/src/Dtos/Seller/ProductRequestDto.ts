export interface ProductRequestDto{
    thumbnail?: string;
    images?: string[];
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