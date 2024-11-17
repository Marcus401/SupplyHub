//import React, { useEffect, useState } from "react";
import { VscStarEmpty, VscStarFull } from "react-icons/vsc";
import product_image from "../../../assets/default-placeholder.png";
import { Link } from "react-router-dom";

const BasicProductInfo = () => {
  //const [isUserAuthenticated, setIsUserAuthenticated] = useState(true);
  //const [isInquireFormVisible, setIsInquireFormVisible] = useState(false);

  /*useEffect(() => {
    const userIsAuthenticated = false;
    setIsUserAuthenticated(userIsAuthenticated);
  }, []);

  const handleInquireButtonClick = (event: { preventDefault: () => void }) => {
    if (!isUserAuthenticated) {
      event.preventDefault();
      alert("Please log in or sign-up to inquire");
    } else {
      setIsInquireFormVisible(true);
    }
  }; */

  return (
    <div className="items-center mx-auto border p-4 flex max-w-[1100px] w-full rounded-md">
      <div className="flex-shrink-0">
        <img
          src={product_image}
          alt="Main Product Image"
          className="h-full max-h-[200px] w-full max-w-[200px] object-cover rounded-lg"
        />
      </div>
      <div className="ml-4 mb-0">
        <p className="text-4xl font-bold mb-0">PRODUCT NAME</p>
        <p className="text-lg mb-0">Company Name</p>
        <p className="mb-0">Stock number</p>
        <p className="text-sm text-gray-600 mb-1">Php __ per unit</p>
        <div className="flex flex-row space-x-1 mb-2 text-yellow-500">
          <VscStarFull />
          <VscStarFull />
          <VscStarFull />
          <VscStarEmpty />
          <VscStarEmpty />
        </div>
        <Link
          className="max-h-9 mt-1 px-4 py-1 bg-black no-underline hover:text-white items-center text-white rounded"
          //onClick={handleInquireButtonClick}
          to="/chat/31"
        >
          Inquire
        </Link>
      </div>
    </div>
  );
};

export default BasicProductInfo;
