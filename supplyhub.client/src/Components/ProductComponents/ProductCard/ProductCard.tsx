import { Link } from "react-router-dom";

const ProductCard = (): JSX.Element => {

  
  return (
    <Link
      className="w-[170px] h-[220px] p-4 mx-auto flex flex-col text-left no-underline hover:text-black shadow-lg rounded-[7px] hover:bg-gray-50 overflow-hidden border border-gray-100"
      to={`/product/`}
    >
      <div className="w-[140px] h-[140px] bg-black rounded-sm cursor-pointer">
        <img src="https://th.bing.com/th/id/R.abb6be78cf45db92604e76eac71c0237?rik=2OWA2fDTZHaLbA&riu=http%3a%2f%2fclipart-library.com%2fnewhp%2fCardboard_Box_PNG_Clip_Art_Image-2761.png&ehk=Yw4SewZVg5VSpiUmRCp3MomYpXLMJL2L2H0dt1hrbJE%3d&risl=&pid=ImgRaw&r=0" alt="Product" />
      </div>
      <div>
        <p className="font-bold text-[18px] mb-0">
          { "Product Name"}
        </p>
        <p className="text-[14px] mt-0">
          Php { "1000"} per unit
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
