import React from 'react';
import { useDispatch } from "react-redux";
import { addToCart } from "../../utils/redux/cartSlice.js";
import { useState } from "react";

const RestaurantItems = () => {

    const [expandedCategory, setExpandedCategory] = useState(null);
      const dispatch = useDispatch();

       const categories = itemsList?.filter((c) => c?.card?.card?.itemCards);
       
       const handleClick = (index) => {
    setExpandedCategory((prev) => (prev === index ? null : index));
  };

    const handleAddItem = (item) => {
        dispatch(addToCart(item));
       
      };

  return (
    <div>
      <div
              className={`w-full px-10 overflow-hidden   transition-[max-height,opacity] duration-300 ease-in-out ${
                expandedCategory === index
                  ? "max-h-250 opacity-100 pb-5"
                  : "max-h-0 opacity-0"
              }`}
            >
              {category?.card?.card?.itemCards?.map((item) => (
                <div className="flex justify-between items-center" key={item.card.info.id}>
                <p className="text-lg py-2">
                  {item.card.info.name} – ₹
                  {(item.card.info.price || item.card.info.defaultPrice) / 100}
                </p>
                <button className="w-30 h-8 bg-green-500 text-white rounded-md hover:bg-green-600 
                transition-colors duration-300 cursor-pointer" onClick={() => handleAddItem(item)}>
                Add item
              </button>
                </div>
              ))}
              
            </div>
    </div>
  )
}

export default RestaurantItems
