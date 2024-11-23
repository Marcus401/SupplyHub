import logo_image from "../../../assets/logo.png";
import { VscSearch } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { ChangeEvent, SyntheticEvent, useState } from "react";

type Props = {};

const GuestNavBar: React.FC<Props> = (props: Props) => {
  const [searchText, setSearchText] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const onClick = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(searchText);
  };

  const logOut = () => {
    console.log("Logging out...");
  };

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
            to="/register"
            className="text-black hover:text-black no-underline"
          >
            SIGN-IN
          </Link>
          <Link
            to="/login"
            className="text-black hover:text-black no-underline"
          >
            LOG-IN
          </Link>
        </div>
      </div>
      <nav className="flex items-center py-2 px-4 bg-white text-black mr-2 justify-between">
        <Link to="/" className="no-underline flex items-center space-x-2">
          <img src={logo_image} alt="Logo" className="w-14 h-14" />
          <span className="text-base md:text-xl lg:text-2xl text-black font-semibold p-1">
            SupplyHub
          </span>
        </Link>
        <div className="flex items-center justify-center space-x-2 w-full max-w-[320px] md:max-w-[420px] lg:max-w-[620px] mx-auto">
          <input
            type="text"
            onChange={handleChange}
            className="shadow border border-gray-300 rounded-full h-[28px] w-full text-gray-800"
          />
          <button onClick={onClick} className="text-2xl p-4">
            <Link to="search-results/text">
              {" "}
              {/* to be replaced with actual search prompt */}
              <VscSearch className="text-black" />
            </Link>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default GuestNavBar;
