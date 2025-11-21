import React, { useEffect, useState } from "react";
import SellerCard from "../SellerCard/SellerCard";
import { inquireUser, fetchSellersList } from "../../../api/menu";
import { MenuSellerListResponseDtoObj } from "../../../Dtos/Menu/MenuSellerListResponseDtoObj";

const SellerCardList: React.FC = () => {
  const [sellers, setSellers] = useState<MenuSellerListResponseDtoObj[]>([]);

  useEffect(() => {
    fetchSellersList()
      .then((data) => {
        if (data) setSellers(data);
      })
      .catch((error) => {
        console.error("Error fetching sellers list:", error);
      });
  }, []);

  return (
    <div className="space-y-4">
      {sellers.map((sellerUser) => (
          <SellerCard
            seller={sellerUser}
          />
      ))}

    </div>
  );
};

export default SellerCardList;
