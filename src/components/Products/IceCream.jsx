
import SearchBar from '../Body/SearchBar'

import ProductsResContainer from './ProductsResContainer';
import useFetchApiData from '../../utils/useFetchApiData';

const IceCream = () => {
  
  const {topRes} = useFetchApiData("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6275609&lng=77.2784081&collection=83640&tags=layout_CCS_IceCreams&sortBy=&filters=&type=rcv2&offset=0&page_type=null");

  return (
    <div>
     <div className=' flex justify-center items-center pt-10 text-4xl font-bold bg-linear-to-r from-red-500 to-blue-900 bg-clip-text text-transparent '><h1>Ice-Cream</h1></div>
      
      <SearchBar placeholder="Search our top restaurants for Ice-cream"/>
      <div className=' flex justify-center items-center pt-3 text-4xl font-bold bg-linear-to-r from-red-500 to-blue-900 bg-clip-text text-transparent '><h1>Explore Our Top Restaurants</h1></div>
      <ProductsResContainer resData={topRes}/>
    </div>
  )
}

export default IceCream
