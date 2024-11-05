import React, { useEffect } from "react";
import ProductReviewCard from "../ProductReviewCard/ProductReviewCard";

//mock reviews; to be changed
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

const ProductReviewCardList: React.FC = () => {
  useEffect(() => {
    document.title = "Reviews";
  }, []);

  return (
    <div className="flex flex-col p-0 mt-4">
      <h2 className="text-3xl font-bold mb-4">Reviews</h2>
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
    </div>
  );
};

export default ProductReviewCardList;
