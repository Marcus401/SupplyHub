import api, {handleApiError} from './api';
import {SellerProductListResponseDtoObj} from "../Dtos/Seller/SellerProductListResponseDtoObj.ts";
import {ProductRequestDto} from "../Dtos/Seller/ProductRequestDto.ts";

export const productsList = async (): Promise<SellerProductListResponseDtoObj[] | null> => {
    try{
        const response =  await api.get(`/seller/products-list`)

        return response.data as SellerProductListResponseDtoObj[];
    } catch (error) {
        handleApiError(error, 'Error Fetching Products List');
        return null;
    }
}

export const addProduct = async (dto: ProductRequestDto): Promise<boolean | null> => {
    try {
        const formData = new FormData();

        // Add thumbnail if exists
        if (dto.thumbnail) {
            formData.append('Thumbnail', dto.thumbnail);
        }

        // Add multiple images if exist
        if (dto.images && dto.images.length > 0) {
            dto.images.forEach(image => {
                formData.append('Images', image);
            });
        }

        // Add required text fields
        formData.append('ProductName', dto.productName);
        formData.append('ProductType', dto.productType);
        formData.append('StockAvailable', dto.stockAvailable.toString());
        formData.append('Price', dto.price.toString());

        // Add optional text fields
        if (dto.unit) {
            formData.append('Unit', dto.unit);
        }

        if (dto.timeframe) {
            formData.append('Timeframe', dto.timeframe);
        }

        if (dto.description) {
            formData.append('Description', dto.description);
        }

        // Add FAQ arrays if they exist
        if (dto.faqQuestions && dto.faqQuestions.length > 0) {
            dto.faqQuestions.forEach(question => {
                formData.append('FaqQuestions', question);
            });
        }

        if (dto.faqAnswers && dto.faqAnswers.length > 0) {
            dto.faqAnswers.forEach(answer => {
                formData.append('FaqAnswers', answer);
            });
        }

        const response = await api.post('/seller/add-product', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        if (typeof response.data === 'boolean') {
            return response.data;
        }
        console.error('Unexpected response format:', response.data);
        return false;
    } catch (error) {
        handleApiError(error, 'Error Creating Product');
        return false;
    }
};

export const editProduct = async (productId : number, dto : ProductRequestDto): Promise<boolean | null> => {
    try{
        const response =  await api.put(`/seller/edit-product/${productId}`, dto)
        if (typeof response.data === 'boolean') {
            return response.data;
        }
        console.error('Unexpected response format:', response.data);
        return false;
    } catch (error) {
        handleApiError(error, 'Error ');
        return false;
    }
}

export const activateProduct = async (productId : number, activate : boolean): Promise<boolean | null> => {
    try{
        const response =  await api.patch(`/seller/activate-product/${productId}`, activate)
        if (typeof response.data === 'boolean') {
            return response.data;
        }
        console.error('Unexpected response format:', response.data);
        return false;
    } catch (error) {
        handleApiError(error, 'Error ');
        return false;
    }
}