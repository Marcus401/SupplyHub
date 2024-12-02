import React, {useEffect} from "react";
import UserProfileInfo from "../UserProfileInfo/UserProfileInfo.tsx";
import UserSellerProfileInfo from "../UserSellerProfileInfo/UserSellerProfileInfo.tsx";
import {fetchUser} from "../../../api/profile.tsx";

type Props = {};

const ProfileInfo = (props: Props) => {
  const TypeOfUser: string = "Seller";


  const information = fetchUser(1);


  return (
    <div>
      {TypeOfUser === "Seller" ? (
        <UserSellerProfileInfo />
      ) : (
        <UserProfileInfo profile={information}/>
      )}
    </div>
  );
};

export default ProfileInfo;
