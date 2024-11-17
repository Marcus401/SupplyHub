import React from "react";
interface MemberCardProps {
  name: string;
  description: string;
  image: string;
}

const MemberCard: React.FC<MemberCardProps> = ({
  name,
  description,
  image,
}) => {
  return (
    <div className="border pt-6 text-center border-black rounded-lg shadow-lg w-[250px] h-[300px] mx-auto">
      <div className="mx-auto mb-4">
        <img
          src={image}
          alt={name}
          className="rounded-full h-[100px] w-[100px] object-cover mx-auto border border-black"
        />
      </div>
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};

export default MemberCard;
