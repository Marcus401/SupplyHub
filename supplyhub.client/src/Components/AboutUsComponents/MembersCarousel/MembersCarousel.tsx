import React from "react";
import MemberCard from "../MembersCard/MemberCard";
import acaba from "../../../assets/MembersImages/acaba.png";
import arroyo from "../../../assets/MembersImages/arroyo.png";
import coronado from "../../../assets/MembersImages/coronado.png";
import ferrer from "../../../assets/MembersImages/ferrer.png";
import reyes from "../../../assets/MembersImages/reyes.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MembersCarousel: React.FC = () => {
  const membersList = [
    {
      name: "Acaba, Marcus J",
      description: "",
      image: acaba,
    },
    {
      name: "Arroyo, Rica Sofia B.",
      description: "",
      image: arroyo,
    },
    {
      name: "Coronado, Carlos Gabriel",
      description: "",
      image: coronado,
    },
    {
      name: "Ferrer, Dawn Geniel",
      description: "",
      image: ferrer,
    },
    {
      name: "Reyes, Myles Kenneth",
      description: "",
      image: reyes,
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <h2 className="text-center font-bold text-[20px] mb-6">OUR MEMBERS</h2>
      <Slider {...sliderSettings} className="w-[800px] mx-auto">
        {membersList.map((staff, index) => (
          <div key={index}>
            <MemberCard
              name={staff.name}
              description={staff.description}
              image={staff.image}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MembersCarousel;
