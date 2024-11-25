import React from "react";
import SellerProfileInfo from "../../Components/ProfileComponents/UserSellerProfileInfo/UserSellerProfileInfo";
import ReviewCardList from "../../Components/SellerPagesComponents/SellerReviewsList/SellerReviewsList";

type Props = {};

const Sellers = (props: Props) => {
  return (
    <div>
      <div>
        <SellerProfileInfo />
      </div>

      <div className="relative w-[695px] -top-56 ml-[700px]">
        <ReviewCardList />
      </div>
    </div>
  );
};

export default Sellers;
