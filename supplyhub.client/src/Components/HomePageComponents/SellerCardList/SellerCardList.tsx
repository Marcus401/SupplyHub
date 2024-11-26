import React, { useEffect, useState } from "react";
import SellerCard from "../SellerCard/SellerCard";
import profilePic from "../../../assets/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.webp";
import { inquireUser, fetchSellersList } from "../../../api/menu";
import { MenuSellerListResponseDtoObj } from "../../../Dtos/Menu/MenuSellerListResponseDtoObj";

const SellerCardList: React.FC = () => {
  const [sellers, setSellers] = useState<MenuSellerListResponseDtoObj[]>([]);

  // Fetch sellers list on component mount
  useEffect(() => {
    fetchSellersList()
      .then((data) => {
        if (data) setSellers(data);
      })
      .catch((error) => {
        console.error("Error fetching sellers list:", error);
      });
  }, []);

  // Handle inquire button click
  const handleInquire = async (sellerId: number) => {
    try {
      const chatId = await inquireUser(sellerId);
      if (chatId) {
        window.location.href = `/chat/${chatId}`; // Navigate to the chat page
      }
    } catch (error) {
      console.error("Error inquiring user:", error);
    }
  };

  return (
    <div className="space-y-4">
      {sellers.map((seller) => (
        <SellerCard
          key={seller.userId}
          seller={seller}
          onInquire={handleInquire}
        />
      ))}

      <SellerCard
        seller={{
          userId: 1,
          userName: "Seller 1",
          bio: "This is a mock bio for Seller 1.",
          profilePicture: profilePic,
        }}
        onInquire={(sellerId) =>
          console.log(`Inquired about seller ${sellerId}`)
        }
      />
      <SellerCard
        seller={{
          userId: 2,
          userName: "Seller 2",
          bio: "This is another mock bio for Seller 2.",
          profilePicture: profilePic,
        }}
        onInquire={(sellerId) =>
          console.log(`Inquired about seller ${sellerId}`)
        }
      />
    </div>
  );
};

export default SellerCardList;
