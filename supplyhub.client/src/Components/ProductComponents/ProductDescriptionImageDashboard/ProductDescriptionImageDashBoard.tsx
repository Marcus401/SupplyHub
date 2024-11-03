import ProductImageSlider from "../ProductImageSlider/ProductImageSlider";

type Props = {};

const ProductDescriptionImageDashBoard = (props: Props) => {
  return (
    <div className="max-w-[1200px] mx-auto pl-0 pr-0 p-4 pb-0">
      <div className="flex gap-4 items-start mb-4">
        <div className="p-4 min-h-[200px] max-h-[700px] max-w-[450px] rounded-lg">
          <p className="font-bold text-2xl">Product Description</p>
          <p className="text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            pariatur officiis tenetur adipisci consequatur porro dicta
            exercitationem voluptatem nam expedita iusto aliquid, sequi
            excepturi laborum error.
          </p>
        </div>

        <div className="flex-1 pr-0">
          <ProductImageSlider />
        </div>
      </div>
    </div>
  );
};

export default ProductDescriptionImageDashBoard;
