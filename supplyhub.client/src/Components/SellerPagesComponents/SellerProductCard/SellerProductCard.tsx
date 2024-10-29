import React from 'react'
import product_image from "../../../assets/default-placeholder.png";

type Props = {};

const SellerProductCard = (props: Props) => {
    return (
        <div
            className="flex mx-4 rounded-3xl h-[190px] pt-2">
            <img
                src={product_image} alt="product image"
                className="w-[150px] h-[150px] row-span-3 row-start-1 - col-start-1 mx-4 mt-2"/>
            <div className="flex-row w-full relative">
                <h3 className="line-clamp-1 whitespace-nowrap truncate">Product Name</h3>
                <p className="mx-5 h-20 overflow-hidden text-ellipsis line-clamp-3">Lorem ipsum dolor sit amet. Sed voluptatem dolor 33 velit accusamus eum tempore officia qui eligendi quidem non galisum dolorum. Eum facilis quibusdam eos enim fugiat et rerum tenetur sit dignissimos explicabo cum aliquid beatae. Qui consequatur velit vel quod voluptatibus 33 deserunt vitae et itaque dolores 33 quae explicabo.</p>
                <button
                    className="absolute bottom-2 right-10 bg-white border-black border-2 rounded-xl w-24 h-10 text-lg">
                    Edit
                </button>
            </div>
        </div>
    );
};

export default SellerProductCard;
