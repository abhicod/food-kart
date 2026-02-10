import React from 'react'
import SearchBar from '../Body/SearchBar'
import { useEffect, useState } from "react";
import ProductsResContainer from './ProductsResContainer';

const Pastry = () => {
  const [topRes, setTopRes] = useState([]);
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      const data = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6275609&lng=77.2784081&collection=80355&tags=layout_ux4&sortBy=&filters=&type=rcv2&offset=0&page_type=null",
      );
  
      const json = await data.json();
      setTopRes(json?.data?.cards);
    };
  return (
    <div>
      <div className=' flex justify-center items-center pt-10 text-4xl font-bold bg-linear-to-r from-red-500 to-blue-900 bg-clip-text text-transparent '><h1>Pastry</h1></div>
      
      <SearchBar  placeholder="Search our top restaurants for Pastries "/>
      <div className=' flex justify-center items-center pt-3 text-4xl font-bold bg-linear-to-r from-red-500 to-blue-900 bg-clip-text text-transparent '><h1>Explore Our Top Restaurants</h1></div>
      <ProductsResContainer resData={topRes} />
    </div>
  )
}

export default Pastry
