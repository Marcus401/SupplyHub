import ProductImageSlider from "../ProductImageSlider/ProductImageSlider";

type Props = {};

const ProductDescriptionImageDashBoard = (props: Props) => {
  return (
    <div>
      <div className="min-h-[200px] max-h-[700px] w-full max-w-[230px] border border-gray-400 rounded-lg">
        <p>Product Description</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          pariatur officiis tenetur adipisci consequatur porro dicta
          exercitationem voluptatem nam expedita iusto aliquid, sequi excepturi
          laborum error.
        </p>
      </div>
      <div>
        <ProductImageSlider />
      </div>
    </div>
  );
};

export default ProductDescriptionImageDashBoard;
