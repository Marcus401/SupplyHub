import React from "react";
import SellerReviewCard from "../SellerReviewCard/SellerReviewCard";

type Props = {};

const SellerReviewCardList = (props: Props) => {
  return (
    <div className="space-y-3">
      <SellerReviewCard />
      <SellerReviewCard />
      <SellerReviewCard />
      <SellerReviewCard />
      <SellerReviewCard />
    </div>
  );
};

export default SellerReviewCardList;
