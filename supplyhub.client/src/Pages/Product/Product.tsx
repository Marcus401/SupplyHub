import React, { useEffect } from "react";
import BasicProductInfo from "../../Components/ProductComponents/BasicProductInfo/BasicProductInfo";
import ProductDescriptionImageDashBoard from "../../Components/ProductComponents/ProductDescriptionImageDashboard/ProductDescriptionImageDashBoard";
import ProductFaqList from "../../Components/ProductComponents/ProductFAQList/ProductFAQList";

type Props = {};

const Product = (props: Props) => {
  useEffect(() => {
    document.title = "Product #";
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <div>
        <BasicProductInfo />
      </div>
      <div>
        <ProductDescriptionImageDashBoard />
      </div>
      <div className="mt-0">
        <ProductFaqList />
      </div>
    </div>
  );
};

export default Product;
