import React from 'react'
import SearchBar from '../Body/SearchBar'

const Sandwich = () => {
  return (
    <div className='h-full'>
      <div className=' flex justify-center items-center pt-10 text-4xl font-bold '><h1>Sandwich</h1></div>
      
      <SearchBar  placeholder="Search our top restaurants for Sandwich"/>
      <div className=' flex justify-center items-center pt-3 text-4xl font-bold text-gray-700'><h1>Explore Our Top Restaurants</h1></div>
      
    </div>
  )
}

export default Sandwich
