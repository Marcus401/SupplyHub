import React from "react";
import { useNavigate } from "react-router-dom";
import product_image from "../../../assets/default-placeholder.png";
type Props = {};

const ProductCard = (props: Props): JSX.Element => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/product");
  };

  return (
    <div
      className="w-[170px] h-[220px] p-4 mx-auto flex flex-col text-left shadow-lg rounded-[7px] hover:bg-gray-50 overflow-hidden border border-gray-100"
      onClick={handleClick}
    >
      <div className="w-[140px] h-[140px] bg-gray-200 rounded-sm cursor-pointer">
        <img src={product_image} alt="Product" />
      </div>
      <div>
        <p className="font-bold text-[18px] mb-0">Product Name</p>
        <p className="text-[14px] mt-0">Php ___ per unit</p>
      </div>
    </div>
  );
};

export default ProductCard;
