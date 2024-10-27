import React from 'react'
import SellerDashboard from "../../Components/SellerPagesComponents/SellerDashboard/SellerDashboard.tsx";
import SellerSideBar from "../../Components/SellerPagesComponents/SellerSidebar/SellerSideBar.tsx";

type Props = {};

const Seller = (props: Props) => {
    return (
        <div className="flex items-stretch">
            <div className="py-4 w-1/4"> {/* Adjust width as needed */}
                <SellerSideBar/>
            </div>
            <div className="py-8 w-3/4"> {/* Adjust width as needed */}
                <SellerDashboard/>
            </div>
        </div>
    );
};

export default Seller;
