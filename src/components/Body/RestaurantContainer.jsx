import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';


const RestaurantContainer = ({TopRes}) => {

  if(TopRes.length === 0) {
    return <Shimmer />
  }

  return (
    <div className='flex justify-left items-start flex-wrap gap-10 pt-15 pl-25 w-full'>
      {TopRes.slice(3).map((res) => (
        <RestaurantCard key={res?.card?.card?.info?.id} resData={res}/>
      ))}
      
    </div>
  )
}

export default RestaurantContainer
