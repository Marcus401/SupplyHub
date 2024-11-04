import React from "react";

interface ReviewCardProps {
  userName: string;
  affiliatedCompany: string;
  rating: number;
  comment: string;
  profilePictureUrl: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  userName,
  affiliatedCompany,
  rating,
  comment,
  profilePictureUrl,
}) => {
  return (
    <div className="flex items-start p-4 bg-white rounded-lg shadow-sm border mb-4">
      <img
        src={profilePictureUrl}
        alt="User Profile"
        className="w-12 h-12 rounded-full mr-4"
      />
      <div className="flex-1">
        <div className="text-lg font-semibold">{userName}</div>
        <div className="text-sm text-gray-500">{affiliatedCompany}</div>
        <div className="flex mt-1 mb-2">
          {"★"
            .repeat(rating)
            .padEnd(5, "☆")
            .split("")
            .map((star, index) => (
              <span
                key={index}
                className={`text-yellow-500 ${
                  star === "☆" ? "text-gray-300" : ""
                }`}
              >
                {star}
              </span>
            ))}
        </div>
        <p className="text-sm text-gray-700">{comment}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
