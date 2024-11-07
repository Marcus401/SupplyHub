import { ChangeEvent, SyntheticEvent, useState } from "react";
import user_image from "../../../assets/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.webp";
import logo_image from "../../../assets/logo.png";
import { VscBell, VscComment, VscSearch } from "react-icons/vsc";
import { Link } from "react-router-dom";

type Props = {};

const NavBar = (props: Props) => {
  const [searchText, setSearchText] = useState<string>("");
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const onClick = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(searchText);
  };

  const toggleNotifications = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  const logOut = () => {
    console.log("Logging out...");
  };

  const dummyNotifications = [
    "New message from John Doe",
    "Your profile has been updated",
    "Reminder: Complete your profile setup",
    "New connection request received",
    "System maintenance scheduled at midnight"
  ];

  return (
    <div>
      <div className="flex justify-end items-center px-4 py-0 bg-white text-sm font-medium text-black space-x-7">
        <div className="flex items-center justify-center gap-4">
          <Link to="/about-us" className="text-black hover:text-black no-underline">
            ABOUT US
          </Link>
          <Link to="/settings" className="text-black hover:text-black no-underline">
            SETTINGS
          </Link>
          <button onClick={logOut} className="text-black hover:text-black no-underline">
            LOG OUT
          </button>
        </div>
      </div>
      <nav className="flex items-center justify-between py-2 px-4 bg-white text-black mr-2">
        <Link to="/" className="no-underline">
          <div className="flex items-center space-x-2">
            <img src={logo_image} alt="Logo" className="w-14 h-14" />
            <span className="text-base md:text-xl lg:text-2xl text-black font-semibold p-1">
              SupplyHub
            </span>
          </div>
        </Link>
        <div className="flex items-end justify-center space-x-2 w-full max-w-[320px] md:max-w-[420px] lg:max-w-[620px]">
          <input
            type="text"
            onChange={handleChange}
            className="shadow border border-gray-300 rounded-full h-[28px] w-full text-gray-800"
          />
          <button onClick={onClick} className="text-2xl p-4">
            <Link to="search-results/text">
              <VscSearch className="text-black" />
            </Link>
          </button>
        </div>

        <div className="flex items-center space-x-2 relative">
          <Link to="chat/432">
            <button className="text-3xl p-2">
              <VscComment className="text-black" />
            </button>
          </Link>
          <button onClick={toggleNotifications} className="text-3xl p-2 relative">
            <VscBell />
          </button>
          {isNotificationOpen && (
            <div className="absolute right-0 top-10 w-60 p-4 bg-white border border-gray-300 rounded shadow-lg">
              {dummyNotifications.map((notification, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-2 rounded mb-2 shadow-sm border border-gray-200 text-gray-800"
                >
                  {notification}
                </div>
              ))}
            </div>
          )}
          <div className="w-8 h-8 ml-5">
            <Link to="profile/user/54">
              <img src={user_image} alt="User Avatar" className="w-8 h-8 rounded-full" />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
