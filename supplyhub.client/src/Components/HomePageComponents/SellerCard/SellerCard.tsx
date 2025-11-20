import React from "react";
import { Link } from "react-router-dom";
import company_logo from "../../../assets/default-placeholder.png";
import { MenuSellerListResponseDtoObj } from "../../../Dtos/Menu/MenuSellerListResponseDtoObj";

interface SellerCardProps {
  seller: MenuSellerListResponseDtoObj;
  onInquire: (sellerId: number) => void;
}

const SellerCard = (): JSX.Element =>  {

  function base64ToImageUrl(base64: string, mimeType: string): string {
    return `data:${mimeType};base64,${base64}`;
  }
  
  const handleInquireButtonClick = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Link
      to={`/profile/}`}
      className="w-full max-w-[1200px] mx-auto p-4 no-underline flex items-center bg-white shadow-lg rounded-lg hover:bg-gray-50 border border-gray-100"
    >
      <div className="w-[100px] h-[100px] bg-black  rounded-lg overflow-hidden">
      </div>
      <div className="ml-6 flex flex-col justify-between">
        <h1 className="text-lg font-semibold mb-0">
          {"Seller Name"}
        </h1>
        <p className="text-sm text-gray-600 m-1">
          {"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
        </p>
        <Link
          to="/chat/45" /*{`/chat/${seller.userId}`}*/
          className="mt-2 bg-black text-white text-sm px-4 py-1 flex items-center no-underline rounded hover:bg-gray-800 w-max h-9"
          //onClick={handleInquireButtonClick}
        >
          Inquire
        </Link>
      </div>
    </Link>
  );
};

export default SellerCard;
