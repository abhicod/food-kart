import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { HomeRestaurantList } from "../../utils/mockData.js";

const RestaurantContainer = ({ topRes, filteredRes, restaurantData }) => {
  return HomeRestaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex justify-left items-start flex-wrap gap-10 pt-15 pl-25 w-full">
      {HomeRestaurantList.map((res) => (
        <RestaurantCard key={res.id} resData={{ ...res }} />
      ))}
    </div>
  );
};

export default RestaurantContainer;
