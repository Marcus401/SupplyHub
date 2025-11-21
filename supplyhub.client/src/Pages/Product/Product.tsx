import {useEffect, useState} from "react";
import BasicProductInfo from "../../Components/ProductComponents/BasicProductInfo/BasicProductInfo";
import ProductDescriptionImageDashBoard from "../../Components/ProductComponents/ProductDescriptionImageDashboard/ProductDescriptionImageDashBoard";
import ProductFaqList from "../../Components/ProductComponents/ProductFAQList/ProductFAQList";
import {Link, useParams} from "react-router-dom";
import { VscArrowLeft } from "react-icons/vsc";
import ProductReviewCardList from "../../Components/ProductComponents/ProductReviewCardList/ProductReviewCardList";
import {fetchProduct} from "../../api/product.tsx";
import {FetchProductResponseDto} from "../../Dtos/Product/FetchProductResponseDto.ts";

const Product = () => {
    const [product, setProduct] = useState<FetchProductResponseDto>();
    const { item_id } = useParams(); // Move useParams to top level
    useEffect(() => {
        document.title = "Product #";
      }, []);
    
    useEffect(() => {
        if (!item_id) return;

        fetchProduct(parseInt(item_id, 10))
            .then((data) => {
                if (data) {
                    setProduct(data);
                    console.log(data); // Log data here, not product
                }
            })
            .catch((error) => {
                console.error("Error fetching product:", error);
            });
    }, [item_id]);


  return (
    <div className="w-full max-w-[1100px] mx-auto p-4 items-center">
      <div className="relative w-full overflow-visible items-center pb-2">
        <img
          src="https://wallpaperaccess.com/full/1560881.png"
          alt="Background"
          className="object-cover w-full h-[50px]"
        />
        <Link
          className="absolute top-2 left-2 p-2 rounded-full shadow-lg"
          to={"/"}
        >
          <VscArrowLeft className="text-white w-5 h-5" />
        </Link>
      </div>

      <div>
        <BasicProductInfo
            productName={product?.productName || ""}
            thumbnail={product?.thumbnail }
            stockAvailable={product?.stockAvailable || 0}
            price={product?.price || 0}
            unit={product?.unit || ""}
            timeFrame={product?.timeFrame || ""}
        />
      </div>
      <div>
        <ProductDescriptionImageDashBoard 
            description={product?.description || "No Description Available"}
            imagesList={product?.images || []}
        />
      </div>
      <div className="mt-0">
        <ProductFaqList />
      </div>
      <div>
        <ProductReviewCardList />
      </div>
    </div>
  );
};

export default Product;
