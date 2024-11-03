import { useState } from "react";
import ProductCardList from "../../ProductComponents/ProductCardList/ProductCardList";
import SellerCardList from "../SellerCardList/SellerCardList";
interface TabProps {
  label: string;
  content: React.ReactNode;
}

const Tab: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs: TabProps[] = [
    { label: "PRODUCTS", content: <ProductCardList /> },
    { label: "SELLER", content: <SellerCardList /> },
  ];
  return (
    <>
      <div className="w-full max-w-[1100px] mx-auto p-4 items-center text-2xl">
        <div className="flex border-b-4 bg-black border-black">
          {tabs.map((tab, index) => (
            <button
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
    </>
  );
};

export default Tab;
