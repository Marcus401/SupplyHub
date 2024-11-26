import React from 'react';
import { Link } from 'react-router-dom';
import {SellerProductListResponseDtoObj} from "../../../Dtos/Seller/SellerProductListResponseDtoObj.ts";
import defaultPlaceholder from "../../../assets/default-placeholder.png";

type Props = {
    product: SellerProductListResponseDtoObj; 
};

const SellerProductCard: React.FC<Props> = ({ product }) => {
    const { thumbnail, productName, description , productId} = product;

    return (
        <div className="flex mx-4 rounded-3xl h-[190px] pt-2">
            <img
                src={thumbnail ? URL.createObjectURL(new Blob([thumbnail])) : defaultPlaceholder}
                alt="product image"
                className="w-[150px] h-[150px] row-span-3 row-start-1 - col-start-1 mx-4 mt-2"
            />
            <div className="flex-row w-full relative">
                <h3 className="line-clamp-1 whitespace-nowrap truncate">{productName || 'No Name'}</h3>
                <p className="mx-5 h-20 overflow-hidden text-ellipsis line-clamp-3">
                    {description || 'No description available.'}
                </p>
                <Link
                    to={`/seller/edit/${productId}`} // Replace with actual product ID when available
                    className="absolute bottom-2 flex justify-center no-underline items-center text-gray-800 hover:text-gray-800 right-10 bg-white border-black border-2 rounded-xl w-24 h-10 text-lg"
                >
                    Edit
                </Link>
            </div>
        </div>
    );
};

export default SellerProductCard;
