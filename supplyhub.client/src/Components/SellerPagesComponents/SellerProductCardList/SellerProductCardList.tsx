import React, {useEffect} from 'react'
import SellerProductCard from "../SellerProductCard/SellerProductCard.tsx";
import {Link} from "react-router-dom";

type Props = {};

const SellerProductCardList = (props: Props) => {
    useEffect(() => {
        document.title = 'My Products';
    }, []);

    return (
        <div className="w-full">
            <div
                className="flex relative">
                <div
                    className="justify-between items-center">
                    <h3
                        className="overflow-hidden text-ellipsis line-clamp-1 whitespace-nowrap truncate my-4 mx-6 font-bold">
                        My Products (### Products)
                    </h3>
                </div>
                <Link
                    to="/seller/products/add"
                    className="flex absolute right-0 bottom-2 mr-10 no-underline bg-gray-800 rounded-lg w-[150px] h-[40px] justify-center items-center">
                    <h6 className="overflow-hidden text-ellipsis line-clamp-1 whitespace-nowrap text-white">
                        Add a Product
                    </h6>
                </Link>
            </div>
            <div>
                <SellerProductCard/>
                <SellerProductCard/>
                <SellerProductCard/>
                <SellerProductCard/>
                <SellerProductCard/>
                <SellerProductCard/>
                <SellerProductCard/>
                <SellerProductCard/>
            </div>
        </div>
    );
};

export default SellerProductCardList;
