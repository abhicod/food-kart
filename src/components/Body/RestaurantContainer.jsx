import RestaurantCard from './RestaurantCard';


const RestaurantContainer = ({TopRes}) => {
  return (
    <div className='flex justify-left items-start flex-wrap gap-10 pt-15 pl-25 w-full'>
      {TopRes.map((res) => (
        <RestaurantCard key={res.card.card.info.id} resData={res}/>
      ))}
      
    </div>
  )
}

export default RestaurantContainer
