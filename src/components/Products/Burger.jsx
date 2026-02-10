import React from 'react'
import SearchBar from '../Body/SearchBar'

const Burger = () => {
  return (
    <div>
      <div className=' flex justify-center items-center text-4xl pt-10 font-bold bg-linear-to-r from-red-500 to-blue-900 bg-clip-text text-transparent '><h1>BURGER</h1></div>
      
      <SearchBar placeholder="Search our top restaurants for Burger"/>
      <div className=' flex justify-center items-center text-4xl pt-3 font-bold bg-linear-to-r from-red-500 to-blue-900 bg-clip-text text-transparent '><h1>Explore Our Top Restaurants</h1></div>
    </div>
  )
}

export default Burger
