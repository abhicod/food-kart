import HeroContent from "./HeroContent"
import HeroImage from "./HeroImage"
import ProductsContainer from "./ProductsContainer"
import RestaurantContainer from "./RestaurantContainer"
import SearchBar from "./SearchBar"
import {ResList} from '../../utils/mockData.js';
import { useEffect, useState } from "react";



const Body = () => {

  const [TopRes, setTopRes ] = useState([]);

  useEffect(() =>{
    fetchData();
  }, []);

  const fetchData = async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6275609&lng=77.2784081&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");

    const json = await data.json();
    setTopRes(json?.data?.cards);
  }

  


  return (
    <div>
      <div >
        <div className="hero flex items-center justify-between p-20 gap-10  ">
          <HeroImage />
         <HeroContent />
        </div>
        <div className="border-b border-green-500 w-9/12 mx-auto rounded-4xl"></div>
       <SearchBar />
       <h1 className="text-3xl font-bold mt-10 text-center">Order our best food options</h1>
       <ProductsContainer />
        <h1 className="text-3xl font-bold text-center mt-10">Explore our top restaurants</h1>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg mx-auto block my-5 cursor-pointer"
         onClick={() =>{
            setTopRes(ResList.filter(res => res.card.card.info.avgRating > 4.1)); 
        }}>Top rated restaurants</button>
       <RestaurantContainer TopRes={TopRes}/> 
      </div>
    </div>
  )
}

export default Body
