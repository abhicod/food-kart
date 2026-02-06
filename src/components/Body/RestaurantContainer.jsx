import RestaurantCard from './RestaurantCard';
import {resList} from '../../utils/mockData.js';

const RestaurantContainer = () => {
  return (
    <div className='flex justify-left items-start flex-wrap gap-16 pt-15 pl-25 w-full'>
      <RestaurantCard resData={resList}/>
      
      
    </div>
  )
}

export default RestaurantContainer
