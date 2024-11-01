import React, { useEffect, useState } from 'react';
import product_image from "../../../assets/default-placeholder.png";

interface Products {
    productID: number;
    productName: string;
    productType: string;
    stockAvailable: number;
    unit: string;
    timeframe: string;
    description: string;
    FAQ: string;
    image: string;
    dateAdded: string;
    isActive: boolean;
}

const createSampleProducts = (count: number): Products[] => {
    const sampleProducts: Products[] = [];
    const constantStock = 50;

    for (let i = 1; i <= count; i++) {
        sampleProducts.push({
            productID: i,
            productName: `Product ${i}`,
            productType: 'YourProductType',
            stockAvailable: constantStock,
            unit: 'YourUnit',
            timeframe: 'YourTimeframe',
            description: 'YourDescription',
            FAQ: 'YourFAQ',
            image: `/path/to/image${i}.jpg`,
            dateAdded: new Date().toLocaleDateString(),
            isActive: false
        });
    }
    return sampleProducts;
};

const SellerInventoryTable = () => {
    useEffect(() => {
        document.title = 'Inventory';
    }, []);

    const [products, setProducts] = useState<Products[]>(createSampleProducts(10));
    const [selectedProducts, setSelectedProducts] = useState<number[]>([]);

    const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const allProductIds = products.map(product => product.productID);
            setSelectedProducts(allProductIds);
        } else {
            setSelectedProducts([]);
        }
    };

    const handleProductSelect = (productId: number) => {
        setSelectedProducts(prevSelected =>
            prevSelected.includes(productId)
                ? prevSelected.filter(id => id !== productId)
                : [...prevSelected, productId]
        );
    };

    const toggleActiveState = (productId: number) => {
        setProducts(prevProducts =>
            prevProducts.map(product =>
                product.productID === productId
                    ? { ...product, isActive: !product.isActive }
                    : product
            )
        );
    };

    return (
        <div className="p-4 w-full lg:w-10/12 mx-auto">
            <h2 className="text-2xl font-bold mb-4">Inventory</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg text-sm lg:text-base">
                    <thead>
                        <tr className="border-b">
                            <th className="p-4 text-center">
                                <input 
                                    type="checkbox" 
                                    onChange={handleSelectAll} 
                                    checked={selectedProducts.length === products.length}
                                    className="w-5 h-5 accent-[#528AAE]"
                                />
                            </th>
                            <th className="p-4 text-center">Product Info</th>
                            <th className="p-4 text-center">Product Image</th>
                            <th className="p-4 text-center">Date Added</th>
                            <th className="p-4 text-center">Stock</th>
                            <th className="p-4 text-center">Active</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.productID} className="border-b hover:bg-gray-50">
                                <td className="p-4 text-center">
                                    <input 
                                        type="checkbox" 
                                        checked={selectedProducts.includes(product.productID)} 
                                        onChange={() => handleProductSelect(product.productID)}
                                        className="w-5 h-5 accent-[#528AAE]" 
                                    />
                                </td>
                                <td className="p-4 text-center">{product.productName}</td>
                                <td className="p-4 flex justify-center">
                                    <img
                                        src={product_image}
                                        alt="product image"
                                        className="w-16 h-16 object-cover rounded"
                                    />
                                </td>
                                <td className="p-4 text-center">{product.dateAdded}</td>
                                <td className="p-4 text-center">{product.stockAvailable}</td>
                                <td className="p-4 text-center">
                                    <label className="flex items-center justify-center">
                                        <input
                                            type="checkbox"
                                            className="hidden"
                                            checked={product.isActive}
                                            onChange={() => toggleActiveState(product.productID)}
                                        />
                                        <span className={`relative inline-block w-10 h-5 rounded-full transition-all duration-300 ease-in-out ${product.isActive ? 'bg-[#528AAE]' : 'bg-gray-300'}`}>
                                            <span className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform duration-300 ease-in-out ${product.isActive ? 'transform translate-x-5' : ''}`}></span>
                                        </span>
                                    </label>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SellerInventoryTable;
