import React from "react";
import { Link } from "react-router-dom";
import { VscArrowLeft } from "react-icons/vsc";
import coverPic from "../../../assets/background.png";
import profilePic from "../../../assets/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.webp";
import ProductReviewCardList from "../../ProductComponents/ProductReviewCardList/ProductReviewCardList";

const UserSellerProfileInfo = () => {
  return (
    <div className="max-w-[1100px] items-center mx-auto p-4">
      {/* Cover photo and back button */}
      <div className="relative flex h-[50px] overflow-hidden items-center">
        <img
          src="https://wallpaperaccess.com/full/1560881.png"
          className="object-cover w-full"
        />
        <Link
          className="absolute top-2 left-2 p-2 rounded-full shadow-lg"
          to="/"
        >
          <VscArrowLeft className="text-white w-5 h-5" />
        </Link>
      </div>

      {/* Profile section */}
      <div className="relative w-full h-[300px] items-center overflow-hidden mx-auto">
        <img src={coverPic} className="object-cover w-full h-full" />
      </div>
      <div className="relative bottom-[57px] left-0 overflow-visible items-center">
        <img
          src={profilePic}
          className="object-cover rounded-full w-32 h-32 border-4 border-white shadow-lg"
          alt="Profile"
        />
      </div>

      <div className="flex items-center justify-between max-w-[500px] pl-[140px] -mt-[120px]">
        <div className="text-left">
          <h2 className="mb-10 text-4xl font-bold">Name</h2>
        </div>
      </div>

      {/* User description */}
      <div className="min-h-[100px] max-h-[500px] w-full max-w-[500px] p-4 mt-4 mb-4 border border-gray-200 rounded-lg">
        <p className="text-black text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, eaque
          odio atque culpa voluptas sequi neque sint placeat vero tempore!
        </p>
      </div>

      <div className="w-full mt-8">
        <ProductReviewCardList />
      </div>
    </div>
  );
};

export default UserSellerProfileInfo;
