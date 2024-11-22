import { Link } from "react-router-dom";
import product_image from "../../../assets/default-placeholder.png";
import React from "react";
import { MenuProductListResponseDtoObj } from "../../../Dtos/Menu/MenuProductListResponseDtoObj";
interface ProductCardProps {
  product: MenuProductListResponseDtoObj;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }): JSX.Element => {
  return (
    <Link
      className="w-[170px] h-[220px] p-4 mx-auto flex flex-col text-left no-underline hover:text-black shadow-lg rounded-[7px] hover:bg-gray-50 overflow-hidden border border-gray-100"
      to={`/product/${product.productId}`}
    >
      <div className="w-[140px] h-[140px] bg-gray-200 rounded-sm cursor-pointer">
        <img src={product_image} alt="Product" />
      </div>
      <div>
        <p className="font-bold text-[18px] mb-0">{product.productName}</p>
        <p className="text-[14px] mt-0">Php {product.price} per unit</p>
      </div>
    </Link>
  );
};

export default ProductCard;
