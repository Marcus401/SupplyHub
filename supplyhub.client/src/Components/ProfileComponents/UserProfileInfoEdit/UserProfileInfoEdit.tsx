import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { VscArrowLeft } from "react-icons/vsc";
import { BsUpload } from "react-icons/bs";

const UserProfileInfoEdit = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [bio, setBio] = useState("");
  const [profilePicture, setProfilePicture] = useState(" ");
  const [coverPicture, setCoverPicture] = useState(" ");

  useEffect(() => {
    document.title = "Edit Profile";
    setName("John Doe");
    setCompany("Awesome Company");
    setPosition("Senior Developer");
    setBio(
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, eaque odio atque culpa voluptas sequi neque sint placeat vero tempore!"
    );
  }, []);

  const handleProfilePictureChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setProfilePicture(URL.createObjectURL(file));
    }
  };

  const handleCoverPictureChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setCoverPicture(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    console.log({ name, company, position, bio, profilePicture, coverPicture });
  };

  return (
    <div className="relative flex-col mx-auto max-w-[1100px] w-full pb-20 p-4">
      <div className="relative w-full overflow-visible items-center">
        <img
          src="https://wallpaperaccess.com/full/1560881.png"
          className="object-cover w-full h-[50px]"
        />

        <Link
          className="absolute top-2 left-2 p-2 rounded-full shadow-lg"
          to="/profile/me"
          state={{ fromSellerProfile: false }}
        >
          <VscArrowLeft className="text-white w-5 h-5" />
        </Link>

        <div className="-mt-[45px] flex justify-end max-w-[500px] pl-[140px] pb-4 ml-auto">
          <button
            onClick={handleSave}
            className="px-6 py-2 text-white rounded hover:text-blue-300"
          >
            Save Changes
          </button>
        </div>
      </div>

      <div className="relative w-full h-[300px] overflow-hidden bg-gray-500 -mt-3">
        <img
          src={coverPicture || "https://wallpaperaccess.com/full/1560881.png"}
          alt="Cover"
          className="object-cover w-full h-full"
        />
        <div className="absolute top-0 right-0 h-full w-full flex items-center justify-center">
          <label
            htmlFor="cover-picture-input"
            className="flex flex-col items-center justify-center w-12 h-12 rounded-full cursor-pointer"
          >
            <BsUpload className="text-4xl text-white" />
            <input
              id="cover-picture-input"
              type="file"
              accept="image/*"
              onChange={handleCoverPictureChange}
              className="hidden"
            />
          </label>
        </div>
      </div>

      <div className="relative w-full overflow-visible items-center pb-2">
        <img
          src={profilePicture}
          className="object-cover w-full h-full"
          alt="Profile"
        />
        <div className="absolute -bottom-[57px] left-0 w-32 h-32 rounded-full overflow-hidden border-4 shadow-lg bg-gray-400">
          <label
            htmlFor="profile-picture-input"
            className="absolute bottom-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-black cursor-pointer z-50"
          >
            <BsUpload className="text-white text-2xl" />
            <input
              id="profile-picture-input"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleProfilePictureChange}
            />
          </label>
        </div>
      </div>

      <div className="flex flex-col max-w-[500px] w-full mt-2 pl-[140px] space-y-0">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Name (Required)
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Company Name (Optional)
          </label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Position (Optional)
          </label>
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Bio
          </label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows={4}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default UserProfileInfoEdit;
