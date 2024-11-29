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

  const handleInquire = async (sellerId: number) => {
    try {
      const chatId = await inquireUser(sellerId);
      if (chatId) {
        window.location.href = `/chat/${chatId}`;
      }
    } catch (error) {
      console.error("Error inquiring user:", error);
    }
  };

  if (!sellers || sellers.length === 0) {
    return <p>No sellers available</p>;
  }

  return (
    <div className="space-y-4">
      {sellers.map((seller) => (
        <SellerCard
          key={seller.userId}
          seller={seller}
          onInquire={handleInquire}
        />
      ))}
    </div>
  );
};

export default SellerCardList;
