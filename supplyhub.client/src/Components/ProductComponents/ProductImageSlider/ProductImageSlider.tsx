import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

const ProductImageSlider: React.FC = () => {
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

  const slides = [1, 2, 3, 4, 5, 6];

  return (
    <div className="slider-container w-full max-w-[700px] mx-auto px-2 overflow-hidden border border-gray-300 rounded-md">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div
            key={slide}
            className="slide-item w-[300px] h-[300px] mx-0 p-1 my-2 flex items-center justify-center"
          >
            <h3
              className={`w-full h-full p-0 flex items-center justify-center text-center border border-black transition-transform duration-300
                ${
                  centerSlide === slide - 1
                    ? "scale-105 bg-gray-600 text-white"
                    : "opacity-100 bg-gray-400 text-white"
                }`}
            >
              {slide}
            </h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductImageSlider;
