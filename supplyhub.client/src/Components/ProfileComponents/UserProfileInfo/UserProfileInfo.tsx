import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { VscArrowLeft, VscEdit } from "react-icons/vsc";
import user_image from "../../../assets/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.webp";

type Props = {};

const UserProfileInfo = (props: Props) => {
  useEffect(() => {
    document.title = "UserProfile: {name}";
  }, []);

  return (
    <div className="flex flex-col mx-auto max-w-[1100px] w-full pb-20 p-4">
      <div className="relative w-full overflow-visible items-center pb-2">
        <img
          src="https://wallpaperaccess.com/full/1560881.png"
          alt="Background"
          className="object-cover w-full h-[50px]"
        />
        <Link
          className="absolute top-2 left-2 p-2 rounded-full shadow-lg"
          to="/profile/me"
          state={{ fromSellerProfile: false }}
        >
          <VscArrowLeft className="text-white w-5 h-5" />
        </Link>
        <div className="max-w-[1200px] w-full max-h-[300px] h-full">
          <img
            src="https://s-media-cache-ak0.pinimg.com/originals/e2/3c/10/e23c10c0dee11fac2bb11c5e856f3926.jpg"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="absolute -bottom-[57px] left-0 w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img
            src={user_image}
            alt="Avatar"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="flex items-center justify-between max-w-[1050px] pl-[140px] pb-2">
        <div className="text-left">
          <h2 className="mb-0 text-2xl font-bold">Name</h2>
          <p className="text-sm text-black">Affiliated Company</p>
        </div>
        <Link to={"/profile/me/edit"} className="text-black text-2xl -mt-6">
          <VscEdit />
        </Link>
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
