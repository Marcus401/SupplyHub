import product_image from "../../../assets/default-placeholder.png";
type Props = {};

const ProductCard = (props: Props): JSX.Element => {
  return (
    <div className="w-[170px] h-[220px] p-4 mx-auto flex flex-col text-left shadow-lg rounded-[7px] hover:bg-gray-50 overflow-hidden border border-gray-100">
      <div className="w-[140px] h-[140px] bg-gray-200 rounded-sm">
        <img src={product_image} />
      </div>
      <div>
        <p className="font-bold text-[18px] mb-0">Product Name</p>
        <p className="text-[14px] mt-0">Php ___ per unit</p>
      </div>
    </div>
  );
};

export default ProductCard;
