import React, { useEffect, useState } from 'react';

// Define the Products interface directly in the component
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

// Function to create sample products with constant stock
const createSampleProducts = (count: number): Products[] => {
    const sampleProducts: Products[] = [];
    const constantStock = 50; // Set a constant stock value

    for (let i = 1; i <= count; i++) {
        sampleProducts.push({
            productID: i,
            productName: `Product ${i}`,
            productType: 'YourProductType',
            stockAvailable: constantStock, // Use the constant stock value
            unit: 'YourUnit',
            timeframe: 'YourTimeframe',
            description: 'YourDescription',
            FAQ: 'YourFAQ',
            image: `/path/to/image${i}.jpg`,
            dateAdded: new Date().toLocaleDateString(),
            isActive: false // Set default toggle state to off
        });
    }
    return sampleProducts;
};

const SellerInventoryTable = () => {
    useEffect(() => {
        document.title = 'Inventory';
    }, []);

    // Generate products dynamically
    const [products, setProducts] = useState<Products[]>(createSampleProducts(10)); // Change the count as needed
    const [selectedProducts, setSelectedProducts] = useState<number[]>([]); // Track selected product IDs

    // Function to handle the "Select All" checkbox change
    const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const allProductIds = products.map(product => product.productID);
            setSelectedProducts(allProductIds);
        } else {
            setSelectedProducts([]);
        }
    };

    // Function to handle individual product checkbox change
    const handleProductSelect = (productId: number) => {
        setSelectedProducts(prevSelected =>
            prevSelected.includes(productId)
                ? prevSelected.filter(id => id !== productId)
                : [...prevSelected, productId]
        );
    };

    // Function to toggle active state
    const toggleActiveState = (productId: number) => {
        setProducts(prevProducts =>
            prevProducts.map(product =>
                product.productID === productId
                    ? { ...product, isActive: !product.isActive } // Toggle isActive
                    : product
            )
        );
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Inventory</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead>
                        <tr className="border-b">
                            <th className="p-4 text-left">
                                <input
                                    type="checkbox"
                                    onChange={handleSelectAll}
                                    checked={selectedProducts.length === products.length}
                                    className="form-checkbox h-4 w-4 text-[#528AAE] focus:ring-[#528AAE]"
                                />
                            </th>
                            <th className="p-4 text-left">Product Info</th>
                            <th className="p-4 text-left">Product Image</th>
                            <th className="p-4 text-left">Date Added</th>
                            <th className="p-4 text-left">Stock</th>
                            <th className="p-4 text-left">Active</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.productID} className="border-b hover:bg-gray-50">
                                <td className="p-4">
                                    <input
                                        type="checkbox"
                                        checked={selectedProducts.includes(product.productID)}
                                        onChange={() => handleProductSelect(product.productID)}
                                        className="form-checkbox h-4 w-4 text-[#528AAE] focus:ring-[#528AAE]"
                                    />
                                </td>
                                <td className="p-4">{product.productName}</td>
                                <td className="p-4">
                                    <img
                                        src={product.image}
                                        alt={product.productName}
                                        className="w-12 h-12 object-cover rounded"
                                    />
                                </td>
                                <td className="p-4">{product.dateAdded}</td>
                                <td className="p-4">{product.stockAvailable}</td>
                                <td className="p-4">
                                    <label className="flex items-center">
                                        <input
                                            type="checkbox"
                                            className="hidden" // Hide the default checkbox
                                            checked={product.isActive}
                                            onChange={() => toggleActiveState(product.productID)}
                                        />
                                        <span
                                            className={`w-10 h-5 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition duration-300 ${
                                                product.isActive ? 'bg-[#528AAE]' : ''
                                            }`}
                                            onClick={() => toggleActiveState(product.productID)}
                                        >
                                            <span
                                                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                                                    product.isActive ? 'translate-x-5' : 'translate-x-0'
                                                }`}
                                            ></span>
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
