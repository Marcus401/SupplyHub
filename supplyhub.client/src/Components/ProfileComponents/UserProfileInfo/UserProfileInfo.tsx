import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { VscArrowLeft, VscEdit } from "react-icons/vsc";

import { UserProfileResponseDto } from "../../../Dtos/Profile/UserProfileResponseDto";
interface UserProfileProps {
  profile: UserProfileResponseDto;
}

const UserProfileInfo: React.FC<UserProfileProps> = ({
  profile,
}): JSX.Element => {
  useEffect(() => {
    document.title = "UserProfile: {name}";
  }, []);

  return (
    <div className="flex-col mx-auto max-w-[1100px] w-full p-4">
      <div className="relative flex h-[50px] overflow-hidden items-center bg-black">
        <Link
          className="absolute top-2 left-2 p-2 rounded-full shadow-lg"
          to="/"
        >
          <VscArrowLeft className="text-white w-5 h-5" />
        </Link>
      </div>
      <div className="relative w-full h-[300px] items-center overflow-hidden mx-auto">
        <img
          src={profile.coverPicture}
          alt="Cover Picture"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="relative bottom-[57px] left-0 overflow-visible items-center ">
        <img
          src={profile.profilePicture}
          className="object-cover rounded-full w-32 h-32 border-4 border-white shadow-lg"
          alt="Profile"
        />
      </div>

      <div className="flex items-center justify-between max-w-[1050px] pl-[140px] -mt-[120px]">
        <div className="text-left">
          <h2 className="mb-10 text-4xl font-bold">{profile.userName}</h2>
        </div>
        <Link
          to={"/profile/edit"}
          className="relative text-black text-2xl -mt-6"
        >
          <VscEdit />
        </Link>
      </div>
      <div className="min-h-[100px] max-h-[500px] w-full max-w-[500px] p-4 mt-4 border border-gray-100 rounded-lg">
        <p className="text-black text-base">{profile.bio}</p>
      </div>
    </div>
  );
};

export default UserProfileInfo;
