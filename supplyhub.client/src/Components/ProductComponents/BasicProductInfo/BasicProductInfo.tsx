//import React, { useEffect, useState } from "react";
import { VscStarEmpty, VscStarFull } from "react-icons/vsc";
import product_image from "../../../assets/default-placeholder.png";
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {FetchProductResponseDto} from "../../../Dtos/Product/FetchProductResponseDto.ts";
import {fetchProduct} from "../../../api/product.tsx";

const BasicProductInfo = () => {
  const [product, setProduct] = useState<FetchProductResponseDto>();
  const initiate = () => {
      useEffect(() => {
          const {id} = useParams();
          if(!id) return;
        fetchProduct(parseInt(id, 10))
            .then((data) => {
              if (data) setProduct(data);
            })
            .catch((error) => {
              console.error("Error fetching product:", error);
            });
      }, []);
  initiate();
  }

    function base64ToFile(base64: string, fileName: string, mimeType: string): File {
        // Decode Base64 string to binary string
        const binaryString = atob(base64);

        // Convert binary string to Uint8Array
        const byteArray = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
            byteArray[i] = binaryString.charCodeAt(i);
        }

        // Create and return the File object
        return new File([byteArray], fileName, { type: mimeType });
    }

  return (
    <div className="items-center mx-auto border p-4 flex max-w-[1100px] w-full rounded-md">
      <div className="flex-shrink-0">
        <img
          src={product.thumbnail ? base64ToFile(product.thumbnail.toString(), "product_image", "image/png") : product_image}
          alt="Main Product Image"
          className="h-full max-h-[200px] w-full max-w-[200px] object-cover rounded-lg"
        />
      </div>
      <div className="ml-4 mb-0">
        <p className="text-4xl font-bold mb-0">PRODUCT NAME</p>
        <p className="text-lg mb-0">Company Name</p>
        <p className="mb-0">Stock number</p>
        <p className="text-sm text-gray-600 mb-1">Php __ per unit</p>
        <div className="flex flex-row space-x-1 mb-2 text-yellow-500">
          <VscStarFull />
          <VscStarFull />
          <VscStarFull />
          <VscStarEmpty />
          <VscStarEmpty />
        </div>
        <Link
          className="max-h-9 mt-1 px-4 py-1 bg-black no-underline hover:text-white items-center text-white rounded"
          //onClick={handleInquireButtonClick}
          to="/chat/31"
        >
          Inquire
        </Link>
      </div>
    </div>
  );
};

export default BasicProductInfo;
