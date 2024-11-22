// UserProfileInfo.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { VscArrowLeft, VscEdit } from "react-icons/vsc";
import profilePic from "../../../assets/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.webp";

const UserProfileInfo = () => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    console.log("Navigating to /profile/me/edit");
    navigate("/profile/me/edit");
  };

  useEffect(() => {
    document.title = "UserProfile: {name}";
  }, []);

  return (
    <div className="relative flex-col mx-auto max-w-[1100px] w-full p-4">
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

      <div className="relative w-full h-[300px] overflow-hidden bg-gray-500">
        <img src="" className="object-cover w-full h-full" />
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
          <h2 className="mb-0 text-2xl font-bold">Name</h2>
          <p className="text-sm text-black">Affiliated Company</p>
        </div>
        <button
          onClick={handleEditClick}
          className="relative text-black text-2xl -mt-6"
        >
          <VscEdit />
        </button>
      </div>

      <div className="min-h-[100px] max-h-[500px] w-full max-w-[500px] p-4 mt-4 border border-gray-100 rounded-lg">
        <p className="text-black text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, eaque
          odio atque culpa voluptas sequi neque sint placeat vero tempore!
        </p>
      </div>
    </div>
  );
};

export default UserProfileInfo;
