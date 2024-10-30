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
            className="fixed h-full overflow-y-auto py-4 px-6 top-0 bottom-0 w-64 bg-white left-0 flex-row flex-nowrap md:z-10 z-9999 transition-transform duration-300 ease-in-out transform md:translate-x-0 -translate-x-full">
            <div
                className=" flex-col min-h-full px-0 flex flex-wrap items-center justify-center w-full mx-auto overflow-y-auto overflow-x-hidden">
                <div
                    className="flex bg-white flex-col opacity-100 relative overflow-y-auto overflow-x-hidden h-auto z-40 items-center flex-1 rounded w-full mt-4">
                    <div className="min-w-full flex flex-col list-none items-right">
                        <button onClick={toggleProductDropdown} className="flex pl-6 no-underline pt-1 pb-2">
                            <h5 className="ml-3 hover:underline text-black mx-2">Products</h5>
                            <IoIosArrowDown
                                className={`my-1 ml-3 transition-transform duration-150 w-5 h-5 ${!productDropdownOpen ? 'rotate-90' : ''}`}/>
                        </button>
                        {productDropdownOpen && (
                            <div className="flex-col justify-center">
                                <Link to="products/list" className="flex pl-4 no-underline">
                                    <h6 className="ml-3 pt-1 pb-1 text-base hover:underline text-black pl-10">My Products</h6>
                                </Link>
                                <Link to="inventory" className="flex pl-4 no-underline">
                                    <h6 className="ml-3 pt-1 pb-1 text-base hover:underline text-black pl-10">Inventory</h6>
                                </Link>
                            </div>
                        )}
                        <Link to="Reviews" className="flex pt-1 pb-1 pl-6 no-underline">
                            <h5 className="ml-3 hover:underline text-black">Reviews</h5>
                        </Link>
                        <Link to="advertising" className="flex pt-1 pb-1 pl-6 no-underline">
                            <h5 className="ml-3 hover:underline text-black">Advertising</h5>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default SellerSideBar;
