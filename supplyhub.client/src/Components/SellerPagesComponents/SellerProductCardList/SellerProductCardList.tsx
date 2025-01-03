import React, { useEffect, useState } from 'react';
import SellerProductCard from '../SellerProductCard/SellerProductCard';
import { Link } from 'react-router-dom';
import {SellerProductListResponseDtoObj} from "../../../Dtos/Seller/SellerProductListResponseDtoObj.ts";
import {productsList} from "../../../api/seller.tsx";

const SellerProductCardList: React.FC = () => {
    const [products, setProducts] = useState<SellerProductListResponseDtoObj[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        document.title = 'My Products';

        const fetchProducts = async () => {
            try {
                const fetchedProducts = await productsList(); // Assuming productsList() returns a Promise
                if (fetchedProducts === null) {
                    return;
                }
                if(fetchedProducts.length === 0){
                    setError('No products found.');
                    return;
                }
                setProducts(fetchedProducts);  
            } catch (err) {
                setError('Error fetching products. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="w-full relative">
            <div className="flex ">
                <div className="justify-between items-center">
                    <h3 className="lg:text-3xl md:text-xl text-base overflow-hidden text-ellipsis line-clamp-1 whitespace-nowrap truncate my-4 mx-6 font-bold">
                        My Products ({products.length} Products)
                    </h3>
                </div>
                <Link
                    to="/seller/products/add"
                    className="flex absolute right-0 bottom-2 mr-10 no-underline bg-gray-800 rounded-lg lg:w-[150px] lg:h-[40px] justify-center items-center w-[120px] h-[40px]"
                >
                    <h6 className="lg:text-lg text-sm overflow-hidden text-ellipsis line-clamp-1 whitespace-nowrap text-white">
                        Add a Product
                    </h6>
                </Link>
            </div>
            <div className="absolute h-[calc(100vh-170px)] overflow-y-auto min-h-[190px] w-full pr-8">
                {loading && <p className="text-center text-white">Loading...</p>}
                {error && <p className="text-center text-red-500">{error}</p>}
                {!loading && !error && products.length === 0 && (
                    <p className="text-center text-white">No products found.</p>
                )}
                {!loading &&
                    products.map((product, index) => (
                        <SellerProductCard key={index} product={product} />
                    ))}
            </div>
        </div>
    );
};

export default SellerProductCardList;
