import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { VscArrowLeft } from "react-icons/vsc";
import { BsUpload } from "react-icons/bs";
import inputCoverPic from "../../../assets/upload_image_placeholder.png";
import { editProfile, fetchUser } from "../../../api/profile";
import { EditUserProfileRequestDto } from "../../../Dtos/Profile/EditUserProfileRequestDto";
import { UserProfileResponseDto } from "../../../Dtos/Profile/UserProfileResponseDto";

const UserProfileInfoEdit = () => {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [coverPicture, setCoverPicture] = useState("");
  const [, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const userId = 1; // Replace with the actual user ID

  useEffect(() => {
    document.title = "Edit Profile";

    const fetchUserData = async () => {
      try {
        setIsLoading(true);
        const userData: UserProfileResponseDto | null = await fetchUser(userId);
        console.log(userData);

        if (userData) {
          setName(userData.userName);
          setBio(userData.bio || "");
          setProfilePicture(
            userData.profilePicture instanceof Uint8Array
              ? `data:image/png;base64,${btoa(
                  String.fromCharCode(...userData.profilePicture)
                )}`
              : userData.profilePicture || ""
          );
          setCoverPicture(
            userData.coverPicture instanceof Uint8Array
              ? `data:image/png;base64,${btoa(
                  String.fromCharCode(...userData.coverPicture)
                )}`
              : userData.coverPicture || ""
          );
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        alert("Failed to fetch user data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  const handleProfilePictureChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.result) {
          setProfilePicture(reader.result as string);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const handleCoverPictureChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.result) {
          setCoverPicture(reader.result as string);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);

    const dto: EditUserProfileRequestDto = {
      userName: name,
      bio,
      profilePicture,
      coverPicture,
    };

    try {
      const response: UserProfileResponseDto | null = await editProfile(dto);

      if (response) {
        alert("Profile updated successfully!");
      } else {
        alert("Failed to update profile.");
      }
    } catch (error) {
      console.error("Error saving profile:", error);
      alert("An error occurred while saving the profile.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="relative flex-col mx-auto max-w-[1100px] w-full pb-20 p-4">
      <div className="relative w-full overflow-visible items-center">
        <img
          src="https://wallpaperaccess.com/full/1560881.png"
          className="object-cover w-full h-[50px]"
          alt="Cover"
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
            className={`px-6 py-2 mr-2 text-white rounded-full hover:text-blue-300 ${
              isSaving ? "bg-gray-400 cursor-not-allowed" : "bg-black"
            }`}
            disabled={isSaving}
          >
            {isSaving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>

      <div className="relative w-full h-[300px] overflow-hidden bg-gray-500 -mt-3">
        <img
          src={coverPicture || inputCoverPic}
          alt="Input Cover Photo"
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
        <div className="absolute -bottom-[57px] left-0 w-32 h-32 rounded-full overflow-hidden border-4 shadow-lg bg-gray-400">
          <img
            src={profilePicture || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-full h-full object-cover"
          />
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

      <div className="flex flex-col max-w-[500px] w-full mt-2 pl-[140px] space-y-2">
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
