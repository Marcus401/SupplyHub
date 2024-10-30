import React, {useEffect} from 'react'
import product_image from "../../../assets/upload_image_placeholder.png";

type Props = {};

const SellerAddProductForm = (props: Props) => {
    useEffect(() => {
        document.title = 'Add Product';
    }, []);

    return (
        <div className="grid w-full md:grid-rows-[50px_auto] md:grid-cols-[240px_auto] gap-x-2 mx-2 ">
            <div
                className=" row-start-1 justify-between items-center md:col-span-4">
                <h3
                    className="text-3xl overflow-hidden text-ellipsis line-clamp-1 whtespace-nowrap truncate my-4 ml-5 font-bold">
                    Add a Product
                </h3>
            </div>
            <div
                className="flex justify-center md:justify-start md:flex-col row-start-2 md:row-span-3 row-span-1 md:col-start-1 mx-2 my-2">
                <input type="file" accept=".png, .jpg, .jpeg, .jfif" className="hidden" id="imageUpload"/>
                <label htmlFor="imageUpload">
                    <img
                        src={product_image} alt="product image"
                        className="w-[200px] h-[200px] rounded-2xl row-span-3 row-start-1 col-start-1 mx-4 mt-2 cursor-pointer"/>
                </label>
            </div>
            <div
                className="row-start-3 col-start-1 md:col-start-2 lg:row-start-2 lg:col-span-2 lg:col-start-2">
                <label
                    htmlFor="product-name"
                    className="text-sm font-semibold">
                    Product Name
                </label>
                <input

                    type="text"
                    id="product-name"
                    className="w-full p-2 border border-gray-300 rounded-lg mb-2"/>
            </div>
            <div
                className="row-start-4 col-start-1 md:col-start-2 lg:row-start-3 lg:col-start-2">
                <label htmlFor="comboBox" className="block text-sm font-medium text-gray-700">Category</label>
                <select id="comboBox"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                </select>
            </div>
            <div
                className="row-start-5 col-start-1 md:col-start-2 lg:row-start-3 lg:col-start-3">
                <label
                    htmlFor="product-name"
                    className="text-sm font-semibold">
                    Stock
                </label>
                <input

                    type="text"
                    id="product-name"
                    className="w-full p-2 border border-gray-300 rounded-lg mb-2"/>
            </div>
            <div
                className="row-start-6 col-start-1 md:col-span-2 lg:row-start-3 lg:col-start-4 lg:col-span-3">
                <label htmlFor="comboBox" className="block text-sm font-medium text-gray-700">Per ???</label>
                <select id="comboBox"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                </select>
            </div>
            <div
                className="row-start-7 col-start-1 md:col-span-2 lg:row-start-4 lg:col-start-2 lg:col-span-1">
                <label
                    htmlFor="product-name"
                    className="text-sm font-semibold">
                    Price
                </label>
                <div className="flex items-center space-x-2">
                    <p className=" text-lg">₱</p>
                    <input
                        min="0"
                        step="100"
                        type="number"
                        id="product-name"
                        className="w-full p-2 border border-gray-300 rounded-lg mb-2"/>
                </div>
            </div>
            <div
                className="row-start-8 col-start-1 md:col-span-2 lg:row-start-4 lg:col-start-3 lg:col-span-1">
                <label htmlFor="comboBox" className="block text-sm font-medium text-gray-700">Per ???</label>
                <select id="comboBox"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                </select>
            </div>
            <div
                className="row-start-9 col-start-1 md:col-span-2 lg:row-start-5 lg:col-span-5 relative h-[calc(12rem+60px)] lg:ml-8">
                <div className="flex-col">
                    <div
                        className="">
                        <label
                            htmlFor="product-name"
                            className="text-sm font-semibold">
                            Description
                        </label>
                        <textarea
                            id="product-name"
                            className="w-full p-2 border border-gray-300 rounded-lg mb-2  h-[10rem]"/>
                    </div>
                    <button
                        className="flex absolute right-0 bottom-2 mr-10 no-underline bg-gray-800 rounded-lg lg:w-[150px] lg:h-[40px] justify-center items-center w-[120px] h-[40px]">
                        <h6 className="lg:text-lg text-sm overflow-hidden text-ellipsis line-clamp-1 whitespace-nowrap text-white">
                            Publish
                        </h6>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SellerAddProductForm;
