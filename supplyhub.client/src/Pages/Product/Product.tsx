import React, { useEffect } from "react";
import BasicProductInfo from "../../Components/ProductComponents/BasicProductInfo/BasicProductInfo";
import ProductDescriptionImageDashBoard from "../../Components/ProductComponents/ProductDescriptionImageDashboard/ProductDescriptionImageDashBoard";
import ProductFaqList from "../../Components/ProductComponents/ProductFAQList/ProductFAQList";
import { Link } from "react-router-dom";
import { VscArrowLeft } from "react-icons/vsc";
import ProductReviewCardList from "../../Components/ProductComponents/ProductReviewCardList/ProductReviewCardList";

type Props = {};

const Product = (props: Props) => {
  useEffect(() => {
    document.title = "Product #";
  }, []);

  return (
    <div className="max-w-[1100px] mx-auto px-4">
      <div className="relative w-full overflow-visible items-center pb-2">
        <img
          src="https://wallpaperaccess.com/full/1560881.png"
          alt="Background"
          className="object-cover w-full h-[50px]"
        />
        <Link
          className="absolute top-2 left-2 p-2 rounded-full shadow-lg"
          to={"/"}
        >
          <VscArrowLeft className="text-white w-5 h-5" />
        </Link>
      </div>

      <div>
        <BasicProductInfo />
      </div>
      <div>
        <ProductDescriptionImageDashBoard />
      </div>
      <div className="mt-0">
        <ProductFaqList />
      </div>
      <div>
        <ProductReviewCardList />
      </div>
    </div>
  );
};

export default Product;
