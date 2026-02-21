import React from 'react'
import SearchBar from '../Body/SearchBar'
import { useEffect, useState } from "react";
import ProductsResContainer from './ProductsResContainer';

const Sandwich = () => {
  const [topRes, setTopRes] = useState([]);
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      const data = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6275609&lng=77.2784081&collection=80461&tags=layout_CCS_Momos&sortBy=&filters=&type=rcv2&offset=0&page_type=null",
      );
  
      const json = await data.json();
      setTopRes(json?.data?.cards);
    };

  return (
    <div className='h-full'>
      <div className=' flex justify-center items-center pt-30 text-4xl font-bold '><h1>Sandwich</h1></div>
      
      <SearchBar  placeholder="Search our top restaurants for Sandwich"/>
      <div className=' flex justify-center items-center pt-3 text-4xl font-bold text-gray-700'><h1>Explore Our Top Restaurants</h1></div>
      <ProductsResContainer resData={topRes}/>
      
    </div>
  )
}

export default Sandwich
