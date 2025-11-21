
import React from "react";
import ProductImageSlider from "../ProductImageSlider/ProductImageSlider.tsx";

interface ImageSliderProps {
  description: string;
  imagesList: string[]
}

const ProductDescriptionImageDashBoard : React.FC<ImageSliderProps> = ({ description, imagesList } : ImageSliderProps) => {
  return (
    <div className="max-w-[1200px] mx-auto pl-0 pr-0 p-4 pb-0">
      <div className="flex gap-4 items-start mb-4">
        <div className="p-4 min-h-[200px] max-h-[700px] max-w-[450px] rounded-lg">
          <p className="font-bold text-2xl">Product Description</p>
          <p className="text-base">
            {description}
          </p>
        </div>

        <div className="flex-1 pr-0">
          <ProductImageSlider
            images ={imagesList}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDescriptionImageDashBoard;
