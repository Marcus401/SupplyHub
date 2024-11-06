import React, { useEffect, useState } from "react";
import ProductReviewCard from "../ProductReviewCard/ProductReviewCard";
import ReviewFormPopUp from "../ReviewFormPopUp/ReviewFormPopUp";

const reviews = [
  {
    id: 1,
    userName: "User Name",
    affiliatedCompany: "Affiliated Company",
    rating: 4,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    profilePictureUrl: "https://avatar.iran.liara.run/public/boy?username=Ash",
  },
  {
    id: 2,
    userName: "User Name",
    affiliatedCompany: "Affiliated Company",
    rating: 5,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    profilePictureUrl: "https://avatar.iran.liara.run/public/boy?username=Ash",
  },
];

const ProductReviewCardList = () => {
  useEffect(() => {
    document.title = "Reviews";
  }, []);

  const [isReviewFormVisible, setIsReviewFormVisible] = useState(false);
  const handleReviewButtonClick = () => {
    setIsReviewFormVisible(true);
  };

  return (
    <div className="flex flex-col p-0 mt-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-bold">Reviews</h2>
        <button
          onClick={handleReviewButtonClick}
          className="text-black px-4 py-1 shadow-lg max-w-[140px] border border-black rounded-md hover:text-black"
        >
          Write A Review
        </button>
      </div>

      <div className="space-y-4">
        {reviews.map((review) => (
          <ProductReviewCard
            key={review.id}
            userName={review.userName}
            affiliatedCompany={review.affiliatedCompany}
            rating={review.rating}
            comment={review.comment}
            profilePictureUrl={review.profilePictureUrl}
          />
        ))}
      </div>
      {isReviewFormVisible && <ReviewFormPopUp />}
    </div>
  );
};

export default ProductReviewCardList;
