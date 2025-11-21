import { Link } from "react-router-dom";


type props = {
  thumbnail?: string;
  productId: number;
  price: number;
  productName: string;
  unit?: string;
}

function ProductCard(
    {
      thumbnail,
      productId,
      price,
      productName,
      unit
    } : props)  {

  
  return (
    <Link
      className="w-[170px] h-[220px] p-4 mx-auto flex flex-col text-left no-underline hover:text-black shadow-lg rounded-[7px] hover:bg-gray-50 overflow-hidden border border-gray-100"
      to={`/product/${productId}`}
    >
      <div className="w-[140px] h-[140px] bg-black rounded-sm cursor-pointer">
        <img
            src={thumbnail ? `https://localhost:7155/images/products/thumbnails/${thumbnail}` : "/box-transparent.png"}
            alt="Product" 
            />
      </div>
      <div>
        <p className="font-bold text-[18px] mb-0">
          { productName }
        </p>
        <p className="text-[14px] mt-0">
            {"₱"}{ price }{ unit ? ` / ${unit}` : "" }
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
