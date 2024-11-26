import React from "react";
import UserProfileInfo from "../UserProfileInfo/UserProfileInfo.tsx";
import UserSellerProfileInfo from "../UserSellerProfileInfo/UserSellerProfileInfo.tsx";

type Props = {};

const ProfileInfo = (props: Props) => {
  const TypeOfUser: string = "Seller";

  return (
    <div>
      {TypeOfUser === "Seller" ? (
        <UserSellerProfileInfo />
      ) : (
        <UserProfileInfo />
      )}
    </div>
  );
};

export default ProfileInfo;
