import user_image from "../../../assets/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.webp";
import logo_image from "../../../assets/logo.png";
import { VscBell } from "react-icons/vsc";
import { VscComment } from "react-icons/vsc";

type Props = {};

const GuestNavBar: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <div className="flex justify-end items-center px-4 py-0 bg-white text-sm font-medium text-black space-x-7">
        <a href="#" className="text-black hover:text-black no-underline">
          ABOUT US
        </a>
        <a href="#" className="text-black hover:text-black no-underline">
          SETTINGS
        </a>
        <a href="#" className="text-black hover:text-black no-underline">
          SIGN-IN
        </a>
      </div>
      <nav className="flex items-center justify-between p-2 px-4 bg-white text-black">
        <div className="flex items-center space-x-2">
          <img src={logo_image} alt="Logo" className="w-14 h-14" />
          <span className="text-2xl font-semibold p-1">SupplyHub</span>
        </div>
        <div className="flex items-center space-x-2">
          <button className="text-3xl p-2">
            <VscComment />
          </button>
          <button className="text-3xl p-2">
            <VscBell />
          </button>
          <div className="w-8 h-8">
            <img
              src={user_image}
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default GuestNavBar;
