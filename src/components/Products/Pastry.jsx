import React from 'react'
import SearchBar from '../Body/SearchBar'

const Pastry = () => {
  return (
    <div>
      <div className=' flex justify-center items-center pt-10 text-4xl font-bold bg-linear-to-r from-red-500 to-blue-900 bg-clip-text text-transparent '><h1>Pastry</h1></div>
      
      <SearchBar  placeholder="Search our top restaurants for Pastries "/>
      <div className=' flex justify-center items-center pt-3 text-4xl font-bold bg-linear-to-r from-red-500 to-blue-900 bg-clip-text text-transparent '><h1>Explore Our Top Restaurants</h1></div>
    </div>
  )
}

export default Pastry
