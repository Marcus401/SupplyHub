import ProductCard from "../ProductCard/ProductCard";

type Props = {};

const ProductCardList = (props: Props): JSX.Element => {
  return (
    <div className="grid grid-cols-6 gap-2.5">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductCardList;
