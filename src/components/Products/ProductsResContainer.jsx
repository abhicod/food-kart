import Shimmer from "../Body/Shimmer";
import ProductsResCard from "./ProductsResCard";

const ProductsResContainer = ({ resData }) => {
  return resData.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex justify-left items-start flex-wrap gap-10 pt-18 pl-25 w-full">
        {resData.slice(3).map((res) => {
          return (
            <ProductsResCard key={res?.card?.card?.info?.id} resData={res} />
          );
        })}
      </div>
    </div>
  );
};

export default ProductsResContainer;
