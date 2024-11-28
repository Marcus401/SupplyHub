import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import product_image from "../../../assets/default-placeholder.png";
import {SellerProductListResponseDtoObj} from "../../../Dtos/Seller/SellerProductListResponseDtoObj.ts";
import {activateProduct, productsList} from "../../../api/seller.tsx";

const SellerInventoryTable = () => {
  const MAX_PRODUCTS = 20; // Maximum allowed products in the inventory
  const [products, setProducts] = useState<SellerProductListResponseDtoObj[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  
  function base64ToImageUrl(base64: string, mimeType: string): string {
    return `data:${mimeType};base64,${base64}`;
  }
  
  useEffect(() => {
    document.title = "Inventory";

    const fetchProducts = async () => {
      try {
        const fetchedProducts = await productsList(); // Assuming fetchProduct() returns a Promise
        if (fetchedProducts === null) {
          return;
        }
        if (fetchedProducts.length === 0) {
          return;
        }
        setProducts(fetchedProducts);
      } catch (err) {
        console.error("Error fetching products. Please try again.");
      }
    };

    fetchProducts();
  }, []);

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const allProductIds = products.map((product) => product.productId);
      setSelectedProducts(allProductIds);
    } else {
      setSelectedProducts([]);
    }
  };

  const handleProductSelect = (productId: number) => {
    setSelectedProducts((prevSelected) =>
        prevSelected.includes(productId)
            ? prevSelected.filter((id) => id !== productId)
            : [...prevSelected, productId]
    );
  };

  const handleTrashSelected = () => {
    setProducts((prevProducts) =>
        prevProducts.filter(
            (product) => !selectedProducts.includes(product.productId)
        )
    );
    setSelectedProducts([]);
  };

  const toggleActiveState = (productId: number) => {
    setProducts((prevProducts) =>
        prevProducts.map((product) => {
          if (product.productId === productId) {
            const success = activateProduct(product.productId, !product.isAvailable);
            if (!success) {
              return product;
            }
            return {...product, isAvailable: !product.isAvailable,};
          }
          return product;
        })
    );
  };

  const productCount = products.length; // Current number of listed products
  const availableSlots = Math.max(0, MAX_PRODUCTS - productCount); // Ensure availableSlots is never negative

  return (
      <div className="p-4 w-full lg:w-10/12 mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            Inventory
            <span className="text-gray-500">({productCount}/{MAX_PRODUCTS})</span>
            {selectedProducts.length > 0 && (
                <button
                    className="bg-white text-red-500 p-2 hover:text-red-600"
                    onClick={handleTrashSelected}
                    title="Trash Selected"
                >
                  <FaTrash className="w-5 h-5" />
                </button>
            )}
          </h2>
          <p className="text-sm text-gray-600">Available Slots: {availableSlots}</p>
        </div>

        {productCount > MAX_PRODUCTS && (
            <div className="mb-4 p-4 bg-red-100 border border-red-300 text-red-700 rounded">
              <strong>Notice:</strong> You have exceeded the maximum number of
              allowed products ({MAX_PRODUCTS}). Please remove some items to add new
              ones.
            </div>
        )}

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg text-sm lg:text-base">
            <thead>
            <tr className="border-b">
              <th className="p-4 text-center">
                <input
                    type="checkbox"
                    onChange={handleSelectAll}
                    checked={
                        selectedProducts.length === products.length &&
                        products.length > 0
                    }
                    className="w-5 h-5 accent-[#528AAE]"
                />
              </th>
              <th className="p-4 text-center">Product Info</th>
              <th className="p-4 text-center">Product Image</th>

              <th className="p-4 text-center">Stock</th>
              <th className="p-4 text-center">Active</th>
            </tr>
            </thead>
            <tbody>
            {products.map((product) => (
                <tr
                    key={product.productId}
                    className="border-b hover:bg-gray-50"
                >
                  <td className="p-4 text-center">
                    <input
                        type="checkbox"
                        checked={selectedProducts.includes(product.productId)}
                        onChange={() => handleProductSelect(product.productId)}
                        className="w-5 h-5 accent-[#528AAE]"
                    />
                  </td>
                  <td className="p-4 text-center">{product.productName}</td>
                  <td className="p-4 flex justify-center">
                    <img
                        src={product.thumbnail ? base64ToImageUrl(product.thumbnail, "image/png") : product_image}
                        alt="product"
                        className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="p-4 text-center">{product.stockAvailable ?? "N/A"}</td>
                  <td className="p-4 text-center">
                    <label className="flex items-center justify-center">
                      <input
                          type="checkbox"
                          className="hidden"
                          checked={product.isAvailable || false}
                          onChange={() => toggleActiveState(product.productId)}
                      />
                      <span
                          className={`relative inline-block w-10 h-5 rounded-full transition-all duration-300 ease-in-out ${
                              product.isAvailable ? "bg-[#528AAE]" : "bg-gray-300"
                          }`}
                      >
                      <span
                          className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform duration-300 ease-in-out ${
                              product.isAvailable ? "transform translate-x-5" : ""
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