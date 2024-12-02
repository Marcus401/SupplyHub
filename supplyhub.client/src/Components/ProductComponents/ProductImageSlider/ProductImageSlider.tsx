import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import { FetchProductResponseDto } from "../../../Dtos/Product/FetchProductResponseDto";

interface ImageSliderProps {
  product: FetchProductResponseDto;
}

const ProductImageSlider: React.FC<ImageSliderProps> = ({ product }) => {
  const [centerSlide, setCenterSlide] = useState<number | null>(null);

  const settings: Settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    dots: true,
    afterChange: (current) => setCenterSlide(current),
  };

  function base64ToImageUrl(base64: string, mimeType: string): string {
    const binaryString = atob(base64);

    const byteArray = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      byteArray[i] = binaryString.charCodeAt(i);
    }

    const blob = new Blob([byteArray], { type: mimeType });

    return URL.createObjectURL(blob); 
  }

  
  product.images = product.images || [];
  return (
    <div className="slider-container w-full max-w-[700px] mx-auto px-2 overflow-hidden border border-gray-200 rounded-md">
      {product.images.length > 0 ? (
        <Slider {...settings}>
          {product.images.map((image, index) => (
            <div
              key={index}
              className="slide-item md:w-[250px] md:h-[250px] mx-0 p-1 my-2 flex items-center justify-center"
            >
              <img
                src={base64ToImageUrl(image, "image/png")}
                alt={`Slide ${index + 1}`}
                className={`w-full h-full object-cover transition-transform duration-300 ${
                  centerSlide === index
                    ? "scale-105 bg-gray-600"
                    : "opacity-100 bg-gray-400"
                }`}
              />
            </div>
          ))}
        </Slider>
      ) : (
        <p className="text-center text-gray-500">No images available</p>
      )}
    </div>
  );
};

export default ProductImageSlider;
