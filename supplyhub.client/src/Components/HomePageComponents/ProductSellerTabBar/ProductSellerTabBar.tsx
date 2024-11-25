import { useLocation } from "react-router-dom";
import ProductCardList from "../../ProductComponents/ProductCardList/ProductCardList";
import SellerCardList from "../SellerCardList/SellerCardList";
import { /*useEffect*/ useState } from "react";
//import { fetchProductsList, fetchSellersList } from "../../../api/menu";
//import { MenuProductListResponseDtoObj } from "../../../Dtos/Menu/MenuProductListResponseDtoObj";
//import { MenuSellerListResponseDtoObj } from "../../../Dtos/Menu/MenuSellerListResponseDtoObj";

interface TabProps {
  label: string;
  content: React.ReactNode;
}

const Tab: React.FC = () => {
  const location = useLocation();

  const initialTab = location.state?.fromSellerProfile ? 1 : 0;
  const [activeTab, setActiveTab] = useState(initialTab);

  {
    /*const [productsList, setProductsList] = useState<
    MenuProductListResponseDtoObj[] | null
  >(null);
  const [sellersList, setSellersList] = useState<
    MenuSellerListResponseDtoObj[] | null
  >(null);

  useEffect(() => {
    fetchProductsList()
      .then((data) => {
        if (data) setProductsList(data);
      })
      .catch((error) => {
        console.error("Error fetching product list:", error);
      });

    fetchSellersList()
      .then((data) => {
        if (data) setSellersList(data);
      })
      .catch((error) => {
        console.error("Error fetching sellers list:", error);
      });
  }, []); */
  }

  const tabs: TabProps[] = [
    {
      label: "PRODUCTS",
      content: <ProductCardList /*products={null} products={productsList}*/ />,
    },
    {
      label: "SELLER",
      content: <SellerCardList sellers={null} /*sellers={sellersList}*/ />,
    },
  ];

  return (
    <div className="w-full max-w-[1100px] mx-auto p-4 items-center text-2xl">
      <div className="flex border-b-4 bg-black border-black">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`w-1/2 h-20 py-2 font-normal ${
              activeTab === index ? "text-white underline" : "text-white"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">{tabs[activeTab].content}</div>
    </div>
  );
};
export default Tab;
