import React from 'react'
import {Link} from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

type Props = {};

const SellerSideBar = (props: Props) => {
    const [productDropdownOpen, setProductDropdownOpen] = React.useState(true);

    const toggleProductDropdown = () => {
        setProductDropdownOpen(!productDropdownOpen);
    };

    return (
        <nav
            className="block py-4 px-6 top-0 bottom-0 w-64 bg-white shadow-xl left-0 absolute flex-row flex-nowrap md:z-10 z-9999 transition-all duration-300 ease-in-out transform md:translate-x-0 -translate-x-full">
            <div
                className="flex-col min-h-full px-0 flex flex-wrap items-center justify-center w-full mx-auto overflow-y-auto overflow-x-hidden">
                <div
                    className="flex bg-white flex-col opacity-100 relative mt-4 overflow-y-auto overflow-x-hidden h-auto z-40 items-center flex-1 rounded w-full">
                    <div className="md:flex-col md:min-w-full flex flex-col list-none items-right">
                        <button onClick={toggleProductDropdown} className="flex md:min-w-full pt-1 pb-4 pl-6 md:pl-3 no-underline">
                            <h5 className="ml-3 hover:underline text-black mx-2">Products</h5>
                            <IoIosArrowDown
                                className={`my-1 ml-3 transition-transform duration-150 w-5 h-5 ${!productDropdownOpen ? 'rotate-90' : ''}`}/>
                        </button>
                        {productDropdownOpen && (
                            <div className="flex-col justify-center">
                                <Link to="products/list" className="flex md:min-w-full pt-1 pb-2 pl-4 md:pl-3 no-underline">
                                    <h6 className="ml-3 text-base hover:underline text-black pl-18 md:pl-5">Product List</h6>
                                </Link>
                                <Link to="products/add" className="flex md:min-w-full pt-1 pb-2 pl-4 md:pl-3 no-underline">
                                    <h6 className="ml-3 text-base hover:underline text-black pl-18 md:pl-5">Add Product</h6>
                                </Link>
                                <Link to="inventory" className="flex md:min-w-full pt-1 pb-2 pl-4 md:pl-3 no-underline">
                                    <h6 className="ml-3 text-base hover:underline text-black pl-18 md:pl-5">Inventory</h6>
                                </Link>
                            </div>
                        )}
                        <Link to="advertising" className="flex md:min-w-full pt-1 pb-4 pl-6 md:pl-3 no-underline">
                            <h5 className="ml-3 hover:underline text-black">Advertising</h5>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>

    );
};

export default SellerSideBar;
