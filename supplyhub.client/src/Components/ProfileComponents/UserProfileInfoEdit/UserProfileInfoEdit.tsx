import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { VscArrowLeft } from "react-icons/vsc";
import { BsUpload } from "react-icons/bs";
import inputCoverPic from "../../../assets/upload_image_placeholder.png";
import { editProfile, fetchUser } from "../../../api/profile";
import { EditUserProfileRequestDto } from "../../../Dtos/Profile/EditUserProfileRequestDto";
import { UserProfileResponseDto } from "../../../Dtos/Profile/UserProfileResponseDto";

const UserProfileInfoEdit: React.FC = (): JSX.Element => {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [coverPicture, setCoverPicture] = useState("");
  const [, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const userId = 1; // Replace with the actual user ID

  const fetchUserData = async () => {
    try {
      setIsLoading(true);
      const userData: UserProfileResponseDto | null = await fetchUser(userId);

      if (userData) {
        setName(userData.userName);
        setBio(userData.bio || "");
        setProfilePicture(userData.profilePicture || "");
        setCoverPicture(userData.coverPicture || "");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      alert("Failed to fetch user data.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [userId]);

  useEffect(() => {
    document.title = "Edit Profile";
  }, []);

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
        setProfilePicture(response.profilePicture || "");
        setCoverPicture(response.coverPicture || "");
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
          src={coverPicture || inputCoverPic}
          className="object-cover w-full h-[200px]"
          alt="Cover"
        />
        <Link
          className="absolute top-2 left-2 p-2 rounded-full shadow-lg"
          to="/profile/me"
        >
          <VscArrowLeft className="text-white w-5 h-5" />
        </Link>
        <div className="absolute bottom-2 right-2">
          <label htmlFor="cover-picture-input" className="cursor-pointer">
            <BsUpload className="text-white text-2xl" />
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

      <div className="mt-6 text-center">
        <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-gray-200">
          <img
            src={profilePicture || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-full h-full object-cover"
          />
          <label
            htmlFor="profile-picture-input"
            className="absolute bottom-0 w-full text-center bg-black bg-opacity-50 text-white py-1 cursor-pointer"
          >
            <BsUpload />
            <input
              id="profile-picture-input"
              type="file"
              accept="image/*"
              onChange={handleProfilePictureChange}
              className="hidden"
            />
          </label>
        </div>
      </div>

      <div className="mt-6 max-w-md mx-auto">
        <label className="block mb-1">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <label className="block mt-4 mb-1">Bio</label>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          rows={3}
          className="w-full p-2 border rounded"
        />
        <button
          onClick={handleSave}
          className={`mt-4 w-full p-2 text-white rounded ${
            isSaving ? "bg-gray-400" : "bg-blue-500"
          }`}
          disabled={isSaving}
        >
          {isSaving ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </div>
  );
};

export default UserProfileInfoEdit;
