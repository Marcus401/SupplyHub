import React from "react";
import { Link } from "react-router-dom";
import { VscArrowLeft } from "react-icons/vsc";
import coverPic from "../../../assets/background.png";
import profilePic from "../../../assets/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.webp";
import SellerReviewsList from "../../SellerPagesComponents/SellerReviewsList/SellerReviewsList";
type Props = {};

const UserSellerProfileInfo = (props: Props) => {
  return (
    <div className="max-w-[1100px] mx-auto p-4">
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
      <div className="relative w-full h-[300px] items-center overflow-hidden mx-auto">
        <img src={coverPic} className="object-cover w-full h-full" />
      </div>

      <div className="relative bottom-[57px] left-0 overflow-visible items-center ">
        <img
          src={profilePic}
          className="object-cover rounded-full w-32 h-32 border-4 border-white shadow-lg"
          alt="Profile"
        />
      </div>

      <div className="flex items-center justify-between max-w-[1050px] pl-[140px] -mt-[120px]">
        <div className="text-left">
          <h2 className="mb-10 text-2xl font-bold">Name</h2>
        </div>
      </div>
      <div className="min-h-[100px] max-h-[500px] w-full max-w-[500px] p-4 mt-4 border border-gray-100 rounded-lg">
        <p className="text-black text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, eaque
          odio atque culpa voluptas sequi neque sint placeat vero tempore!
        </p>
      </div>

      <div className="w-[610px] ml-[510px] flex-row -mt-[150px]">
        <SellerReviewsList />
      </div>
    </div>
  );
};

export default UserSellerProfileInfo;
