import React, {useEffect, useState} from 'react'
import SellerDashboard from "../../Components/SellerPagesComponents/SellerDashboard/SellerDashboard.tsx";
import SellerSideBar from "../../Components/SellerPagesComponents/SellerSidebar/SellerSideBar.tsx";
import {SellerProductFormData} from "../../data.ts";

type Props = {};

const Seller = (props: Props) => {
    useEffect(() => {
        document.title = 'Seller Dashboard';
    }, []);

    const [formData, setFormData] = useState<SellerProductFormData>({
        imageFile: null,
        productName: "",
        category: "",
        stock: 0,
        stockUnit: "",
        price: 0,
        priceUnit: "string",
        description: "",
    })

    return (
        <div className="flex flex-wrap gap-x-4">
            <div className="py-4 w-0 md:w-1/5 relative lg:">
                <SellerSideBar/>
            </div>
            <div
                className="py-2 transition-all duration-300 ease-in-out absolute md:left-[17rem] left-[1.5rem] md:w-[calc(100%-18rem)] w-[calc(100%-2rem)]">
                <SellerDashboard/>
            </div>
        </div>
    );
};

export default Seller;
