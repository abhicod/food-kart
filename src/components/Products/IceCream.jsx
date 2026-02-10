import React from 'react'
import SearchBar from '../Body/SearchBar'

const IceCream = () => {
  return (
    <div>
     <div className=' flex justify-center items-center pt-10 text-4xl font-bold bg-linear-to-r from-red-500 to-blue-900 bg-clip-text text-transparent '><h1>Ice-Cream</h1></div>
      
      <SearchBar placeholder="Search our top restaurants for Ice-cream"/>
      <div className=' flex justify-center items-center pt-3 text-4xl font-bold bg-linear-to-r from-red-500 to-blue-900 bg-clip-text text-transparent '><h1>Explore Our Top Restaurants</h1></div>
    </div>
  )
}

export default IceCream
