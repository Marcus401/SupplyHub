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
    <div className="slider-container w-full max-w-[700px] mx-auto px-2 overflow-hidden border border-gray-200 rounded-md">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="slide-item md:w-[250px] md:h-[250px] mx-0 p-1 my-2 flex items-center justify-center"
          >
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className={`w-full h-full object-cover transition-transform duration-300
                ${
                  centerSlide === index
                    ? "scale-105 bg-gray-600"
                    : "opacity-100 bg-gray-400"
                }`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductImageSlider;
