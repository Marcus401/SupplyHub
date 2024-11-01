import { useEffect } from "react";
import { VscStarEmpty, VscArrowLeft } from "react-icons/vsc";
import user_image from "../../../assets/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.webp";

type Props = {};

const SellerProfileInfo = (props: Props) => {
  useEffect(() => {
    document.title = "Seller Profile";
  }, []);

  return (
    <div className="flex flex-col mx-auto max-w-[1200px] w-full pb-20">
      <div className="relative w-full overflow-visible items-center pb-2">
        <img
          src="https://wallpaperaccess.com/full/1560881.png"
          alt="Background"
          className="object-cover w-full h-[50px]"
        />
        <button className="absolute top-2 left-2 p-2 rounded-full shadow-lg">
          <VscArrowLeft className="text-white w-5 h-5" />
        </button>

        <img
          src="https://s-media-cache-ak0.pinimg.com/originals/e2/3c/10/e23c10c0dee11fac2bb11c5e856f3926.jpg"
          className="max-w-[1200px] w-full max-h-[300px] h-full"
        />

        <div className="absolute -bottom-[57px] left-0 w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img
            src={user_image}
            alt="Avatar"
            className="object-cover w-full h-full"
          />
        </div>
        <button className="absolute -bottom-10 p-3 right-0 text-black px-4 py-0 shadow-lg max-w-[140px] w-full max-h-[40px] h-full border border-black rounded-md">
          Write A Review
        </button>
      </div>

      <div className="px-[140px] pb-2 text-left">
        <h2 className="mb-0 text-xl font-bold">Company Name</h2>
        <p className="mb-1 text-sm text-black font-semibold">Business Type</p>
        <div className="flex flex-row space-x-1">
          <VscStarEmpty />
          <VscStarEmpty />
          <VscStarEmpty />
          <VscStarEmpty />
          <VscStarEmpty />
        </div>
        <p className="text-sm text-black">Business Location</p>
      </div>
      <div className="min-h-[100px] max-h-[500px] w-full max-w-[500px] p-4 border border-gray-100 rounded-lg">
        <p className="text-black text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, eaque
          odio atque culpa voluptas sequi neque sint placeat vero tempore!
        </p>
      </div>
    </div>
  );
};

export default SellerProfileInfo;
