import {ChangeEvent, SyntheticEvent, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import logo_image from "../../../assets/logo.png";
import { VscBell, VscComment, VscSearch } from "react-icons/vsc";
import { Link } from "react-router-dom";
import {navbarInfo} from "../../../api/menu.tsx";

const NavBar = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [userImage, setUserImage] = useState<string | undefined>(undefined);
  const navigate = useNavigate(); 

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const onClick = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(searchText);
  };

  const logOut = () => {
    localStorage.removeItem("JwtToken"); 
    sessionStorage.removeItem("JwtToken"); // Optional
    navigate("/login"); 
  }

  useEffect(() => {
    navbarInfo()
        .then((url) => {
          if (url) {
            setUserImage(url);
          } else {
            console.error("No image URL received.");
          }
        })
        .catch((error) => {
          console.error("Error fetching navbar info:", error);
        });
  }, []);  
  
  return (
    <div>
      <div className="flex justify-end items-center px-4 py-0 bg-white text-sm font-medium text-black space-x-7">
        <div className="flex items-center justify-center gap-4">
          <Link
            to="/about-us"
            className="text-black hover:text-black no-underline"
          >
            ABOUT US
          </Link>
          <Link
            to="/settings"
            className="text-black hover:text-black no-underline"
          >
            SETTINGS
          </Link>
          <button
            onClick={logOut}
            className="text-black hover:text-black no-underline"
          >
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
            className="shadow border border-gray-300 rounded-full h-[28px] w-full space-x-3 text-gray-800"
          />
          <button onClick={onClick} className="text-2xl p-4">
            <Link to="search-results/text">
              <VscSearch className="text-black" />
            </Link>
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <Link to="chat/432">
            <button className="text-3xl p-2">
              <VscComment className="text-black" />
            </button>
          </Link>
          <button className="text-3xl p-2">
            <VscBell />
          </button>
          <div className="w-8 h-8 ml-5">
            <Link to="profile/1">
              {userImage ? (
                  <img
                      src={userImage}
                      alt="User Avatar"
                      className="w-8 h-8 rounded-full"
                  />
              ) : (
                  <div className="w-8 h-8 rounded-full bg-gray-200"></div> 
              )}
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
