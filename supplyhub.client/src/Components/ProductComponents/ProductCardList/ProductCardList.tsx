import React, { useEffect, useState } from "react";
import productPic from "../../../assets/default-placeholder.png";
import { MenuProductListResponseDtoObj } from "../../../Dtos/Menu/MenuProductListResponseDtoObj";
import ProductCard from "../ProductCard/ProductCard";
import { fetchProductsList } from "../../../api/menu";

const ProductCardList: React.FC = (): JSX.Element => {
  const [products, setProducts] = useState<MenuProductListResponseDtoObj[]>([]);

  // Fetch products list on component mount
  useEffect(() => {
    fetchProductsList()
      .then((data) => {
        if (data) setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products list:", error);
      });
  }, []);

  /* Handle the case when no products are available
  if (!products || products.length === 0) {
    return <p>No products available</p>;
  } */

  return (
    <div className="grid grid-cols-6 gap-2.5">
      {/* Render dynamic products */}
      {products.map((product) => (
        <ProductCard key={product.productId} product={product} />
      ))}

      <ProductCard
        product={{
          productId: 1,
          productName: "Mock Product 1",
        }}
      />
      <ProductCard
        product={{
          productId: 2,
          productName: "Mock Product 2",
        }}
      />
      <ProductCard
        product={{
          productId: 3,
          productName: "Mock Product 3",
        }}
      />
      <ProductCard
        product={{
          productId: 4,
          productName: "Mock Product 4",
        }}
      />
      <ProductCard
        product={{
          productId: 5,
          productName: "Mock Product 5",
        }}
      />
      <ProductCard
        product={{
          productId: 6,
          productName: "Mock Product 6",
        }}
      />
    </div>
  );
};

export default ProductCardList;
