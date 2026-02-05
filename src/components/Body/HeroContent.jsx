import React from 'react'

const HeroContent = () => {
  return (
    <div>
       <div className="herocontent">
            <h1 className='text-5xl font-bold text-gray-800 mb-4'>Delicious Food Delivered To You</h1>
            <p className='text-lg text-gray-600 mb-6'>Experience the best food from your favorite restaurants, delivered straight to your door.</p>
            <button className='bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300'>Order Now</button>
        </div>
    </div>
  )
}

export default HeroContent
