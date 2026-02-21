import RestaurantCard , { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { HomeRestaurantList } from "../../utils/mockData.js";
import { Link } from "react-router-dom";

const RestaurantContainer = ({ topRes, filteredRes, restaurantData }) => {


   const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

  return HomeRestaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    
    <div className="flex justify-left items-start flex-wrap gap-10 pt-15 pl-25 w-full">
      {HomeRestaurantList.map((res) => (
        <Link key={res.id} to={`/restaurant/${res.id}`}>
          {
          res.promoted ? <PromotedRestaurantCard resData={res}/> : <RestaurantCard resData={res} />
          }
        </Link>
      ))}
    </div>
  );
};


export default RestaurantContainer;
