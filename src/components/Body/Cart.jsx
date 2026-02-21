import React from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart, removeFromCart } from '../../utils/redux/cartSlice';

const Cart = () => {

  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

   const handleClearCart = () => {
      dispatch(clearCart());
    };

    const handleRemoveItem = (itemId) => {
      dispatch(removeFromCart(itemId));  
    }
    console.log(cartItems);

  return (

   
    
      <div>
          <h1 className='text-3xl font-bold text-center mt-10 pt-20'>Your Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className='h-125 py-15 '>
          <p className='text-center mt-5 text-xl'>Your cart is empty.</p>
          <p className='text-center mt-1 text-xl'>Please Add something in your Cart.</p>
          </div>
        ) : ( <div className=' w-1/2  mx-auto m-5 p-10'> 
                <div className='flex justify-end'>
                  <button className='bg-gray-50 text-black px-4 py-2 border border-gray-400 rounded-lg mb-5 hover:bg-gray-100 transition-colors duration-200 block hover:scale-98 font-semibold cursor-pointer' onClick={handleClearCart}>Clear Cart</button>
                </div>
               {cartItems.map((item) => (
                <div className='bg-gray-100 p-5 mb-5 rounded-lg shadow-md hover:scale-98 cursor-pointer transition-transform duration-200' key={item.card.info.id}>
                  <h1 className='font-bold text-lg mb-3'>{item.card.info.name}</h1>
                  <p> ₹{item.card.info.price/100}</p>
                  <button className='bg-red-500 text-white px-2 py-1 my-2 rounded-lg cursor-pointer hover:bg-red-600 transition-colors duration-200' onClick={() => handleRemoveItem(item.card.info.id)}>Remove Item</button>
                  </div>
                ))}

        </div>
        )}  
    </div>
  )
}

export default Cart;
