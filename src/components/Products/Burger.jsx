
import SearchBar from '../Body/SearchBar'

import ProductsResContainer from './ProductsResContainer';
import useFetchApiData from '../../utils/useFetchApiData';

const Burger = () => {
  
  const {topRes} = useFetchApiData("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6275609&lng=77.2784081&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
  
  return (
    <div>
      <div className=' flex justify-center items-center text-4xl pt-30 font-bold bg-linear-to-r from-red-500 to-blue-900 bg-clip-text text-transparent '><h1>BURGER</h1></div>
      
      <SearchBar placeholder="Search our top restaurants for Burger"/>
      <div className=' flex justify-center items-center text-4xl pt-3 font-bold bg-linear-to-r from-red-500 to-blue-900 bg-clip-text text-transparent '><h1>Explore Our Top Restaurants</h1></div>
       <ProductsResContainer resData={topRes} />
    </div>
  )
}

export default Burger
