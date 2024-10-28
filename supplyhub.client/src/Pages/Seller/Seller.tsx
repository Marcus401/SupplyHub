import React, {useEffect} from 'react'
import SellerDashboard from "../../Components/SellerPagesComponents/SellerDashboard/SellerDashboard.tsx";
import SellerSideBar from "../../Components/SellerPagesComponents/SellerSidebar/SellerSideBar.tsx";

type Props = {};

const Seller = (props: Props) => {
    useEffect(() => {
        document.title = 'Seller Dashboard';
    }, []);

    return (
        <div className="grid items-stretch gap-x-4">
            <div className="py-4 w-0 md:w-1/5">
                <SellerSideBar/>
            </div>
            <div
                className="py-8 transition-all duration-300 ease-in-out block absolute md:left-[17rem] left-[1.5rem] w-full">
                <SellerDashboard/>
            </div>
        </div>
    );
};

export default Seller;
