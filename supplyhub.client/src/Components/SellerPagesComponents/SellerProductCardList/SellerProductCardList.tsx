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
                        className="lg:text-3xl md:text-xl text-base overflow-hidden text-ellipsis line-clamp-1 whitespace-nowrap truncate my-4 mx-6 font-bold">
                        My Products (### Products)
                    </h3>
                </div>
                <Link
                    to="/seller/products/add"
                    className="flex absolute right-0 bottom-2 mr-10 no-underline bg-gray-800 rounded-lg lg:w-[150px] lg:h-[40px] justify-center items-center w-[120px] h-[40px]">
                    <h6 className="lg:text-lg text-sm overflow-hidden text-ellipsis line-clamp-1 whitespace-nowrap text-white">
                        Add a Product
                    </h6>
                </Link>
            </div>
            <div className="absolute h-[calc(100vh-70px)] overflow-y-auto min-h-[190px]">
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
