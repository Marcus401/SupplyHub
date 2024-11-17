import React, { useEffect } from "react";
import logo from "../../assets/logo-with-border.png";
import MembersCarousel from "../../Components/AboutUsComponents/MembersCarousel/MembersCarousel";

type Props = {};

const AboutUs = (props: Props) => {
  useEffect(() => {
    document.title = "About Us";
  }, []);

  return (
    <div className="mx-auto items-center text-center max-w-[1100px] p-4">
      <div>
        <img
          src={logo}
          alt="SupplyHub"
          className="h-[300px] w-[300px] mx-auto"
        />
        <div>
          <p className="text-[40px] font-bold my-0">SupplyHub</p>
          <p className="text-[20px] font-bold pb-2">Meeting Supply Needs</p>
          <p className="pb-4">___________________</p>
        </div>
      </div>
      <div className="pb-7">
        <p className="text-[20px] font-bold">ABOUT US</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quas
          autem magnam ullam similique recusandae, quaerat ipsum distinctio,
          quisquam, deleniti asperiores ratione ipsa? Quia cum repellendus
          voluptas voluptatum aperiam sint.
        </p>
      </div>
      <div>
        <MembersCarousel />
      </div>
    </div>
  );
};

export default AboutUs;
