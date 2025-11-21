import React, { useEffect, useState } from "react";
import { MenuProductListResponseDtoObj } from "../../../Dtos/Menu/MenuProductListResponseDtoObj";
import ProductCard from "../ProductCard/ProductCard";
import { fetchProductsList } from "../../../api/menu";

const ProductCardList: React.FC = (): JSX.Element => {
  const [products, setProducts] = useState<MenuProductListResponseDtoObj[]>([]);

  useEffect(() => {
    fetchProductsList()
      .then((data) => {
        if (data) setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products list:", error);
      });
  }, []);

  return (
    <div className="grid grid-cols-6 gap-2.5">
        {products.map((product) => (
        <ProductCard
            productId={product.productId}
            thumbnail={product.thumbnail}
            productName={product.productName}
            price={product.price}
            unit={product.unit}
            />
      ))}

    </div>
  );
};

export default ProductCardList;
