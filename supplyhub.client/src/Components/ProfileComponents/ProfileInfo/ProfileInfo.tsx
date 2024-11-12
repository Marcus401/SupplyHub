import React from 'react'
import UserProfileInfo from "../UserProfileInfo/UserProfileInfo.tsx";
import SellerProfileInfo from "../SellerProfileInfo/SellerProfileInfo.tsx";

type Props = {};

const ProfileInfo = (props: Props) => {
    const TypeOfUser : string = "Seller";
    
    return (
        <div>
            {TypeOfUser === "Seller" ? <SellerProfileInfo /> : <UserProfileInfo />}
        </div>
    );
};

export default ProfileInfo;
