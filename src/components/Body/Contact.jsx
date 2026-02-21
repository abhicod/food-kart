import React from 'react'

const Contact = () => {
  return (
    <div className='pt-30 flex flex-col items-center gap-5'>
      <h1>hello, this is contact page.</h1>
      <button className='bg-green-500 text-white px-4 py-2 rounded'>Contact Us</button>
      <input type="text" placeholder='Enter your name' className='border border-gray-300 rounded px-4 py-2 mt-4' />
    </div>
  )
}

export default Contact
