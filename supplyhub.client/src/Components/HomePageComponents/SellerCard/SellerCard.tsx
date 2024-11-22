import React from "react";
import { Link } from "react-router-dom";
import company_logo from "../../../assets/default-placeholder.png";
import { MenuSellerListResponseDtoObj } from "../../../Dtos/Menu/MenuSellerListResponseDtoObj";

interface SellerCardProps {
  seller: MenuSellerListResponseDtoObj;
  onInquire: (sellerId: number) => void;
}

const SellerCard: React.FC<SellerCardProps> = ({ seller, onInquire }) => {
  const handleInquireButtonClick = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    onInquire(seller.userId);
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto p-4 flex items-center bg-white shadow-lg rounded-lg hover:bg-gray-50 border border-gray-100">
      <div className="w-[100px] h-[100px] bg-gray-200 rounded-lg overflow-hidden">
        <img
          src={
            seller.profilePicture instanceof Uint8Array
              ? `data:image/png;base64,${btoa(
                  String.fromCharCode(...seller.profilePicture)
                )}`
              : seller.profilePicture || company_logo
          }
          alt="Seller Logo"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="ml-6 flex flex-col justify-between">
        <h1 className="text-lg font-semibold mb-0">{seller.userName}</h1>
        <p className="text-sm text-gray-600 m-1">{seller.bio}</p>
        <Link
          to={`/chat/${seller.userId}`}
          className="mt-2 bg-black text-white text-sm px-4 py-1 items-center flex no-underline rounded hover:bg-gray-800 hover:text-white w-max h-9"
          onClick={handleInquireButtonClick}
        >
          Inquire
        </Link>
      </div>
    </div>
  );
};

export default SellerCard;
