import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { HomeRestaurantList } from "../../utils/mockData.js";



const RestaurantContainer = ({ topRes, filteredRes, restaurantData }) => {

  // if(TopRes.length === 0) {
  //   return <Shimmer /> - used ternary operator instead of if else statement
  // }

  // console.log(HomeRestaurantList);
  // topRes.length === 0 ? <Shimmer /> :

  return  (
    <div className='flex justify-left items-start flex-wrap gap-10 pt-15 pl-25 w-full'>
      <></>
      {HomeRestaurantList.map((res) => (
        <RestaurantCard key={res.id} resData={{...res}}/>
      ))}

    </div>
  )
}

export default RestaurantContainer;
