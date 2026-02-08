import React from 'react'

const ShimmerCard = () => {
  return (
    <div>
      <div className="card w-60 rounded-lg flex flex-col gap-6 h-80 hover:scale-96 transition-transform duration-150 mb-8">
            <div className='h-35 rounded-3xl w-full bg-gray-300'></div>
            <div className='h-4 bg-gray-300 w-4/5 rounded-lg'></div>
            <div className='h-4 bg-gray-200 w-4/5 rounded-lg'></div>
            <div className='h-4 bg-gray-300 w-2/5  rounded-lg'></div>
            <div className='h-4 bg-gray-200 w-3/5 rounded-lg'></div>
        </div>
    </div>
  )
}

export default ShimmerCard
