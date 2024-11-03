import React, { useEffect } from "react";
import ProductSellerTabBar from "../../Components/HomePageComponents/ProductSellerTabBar/ProductSellerTabBar";

type Props = {};

const HomePage = (props: Props) => {
  useEffect(() => {
    document.title = "SupplyHub: Home";
  }, []);

  return (
    <div>
      <div>
        <ProductSellerTabBar />
      </div>
    </div>
  );
};

export default HomePage;
