import React from "react";
import { VscStarEmpty } from "react-icons/vsc";
import product_image from "../../../assets/default-placeholder.png";

type Props = {};

const BasicProductInfo = (props: Props) => {
  return (
    <div className="items-center mx-auto border p-4 flex max-w-[1200px] w-full rounded-md">
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
        <div className="flex flex-row space-x-1 mb-1">
          <VscStarEmpty />
          <VscStarEmpty />
          <VscStarEmpty />
          <VscStarEmpty />
          <VscStarEmpty />
        </div>
        <button className="max-h-9 mt-1 px-4 py-1 bg-black text-white rounded">
          Inquire
        </button>
      </div>
    </div>
  );
};

export default BasicProductInfo;
