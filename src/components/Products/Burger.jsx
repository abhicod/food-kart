import React from 'react'
import SearchBar from '../Body/SearchBar'
import { useEffect, useState } from "react";
import ProductsResContainer from './ProductsResContainer';

const Burger = () => {
  const [topRes, setTopRes] = useState([]);
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      const data = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6275609&lng=77.2784081&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null",
      );
  
      const json = await data.json();
      setTopRes(json?.data?.cards);
    };
  return (
    <div>
      <div className=' flex justify-center items-center text-4xl pt-10 font-bold bg-linear-to-r from-red-500 to-blue-900 bg-clip-text text-transparent '><h1>BURGER</h1></div>
      
      <SearchBar placeholder="Search our top restaurants for Burger"/>
      <div className=' flex justify-center items-center text-4xl pt-3 font-bold bg-linear-to-r from-red-500 to-blue-900 bg-clip-text text-transparent '><h1>Explore Our Top Restaurants</h1></div>
       <ProductsResContainer resData={topRes} />
    </div>
  )
}

export default Burger
