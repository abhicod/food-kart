import Shimmer from "../Body/Shimmer";
import ProductsResCard from "./ProductsResCard";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductsResContainer = ({ resData }) => {

  const {resId} = useParams();
  // console.log(resId);

  return resData.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
       <div className="flex justify-left items-start flex-wrap gap-10 pt-18 pl-25 w-full">
       {resData.slice(3).map((res) => {
          return (
            <Link  key={res?.card?.card?.info?.id} to={"/restaurant/"+ res?.card?.card?.info?.id}><ProductsResCard  resData={res} /></Link>  
          );
        })}
      </div>
    </div>
  );
};

export default ProductsResContainer;
