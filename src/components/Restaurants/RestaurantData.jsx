
import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../utils/redux/cartSlice.js";


const RestaurantData = () => {
  const [resData, setResData] = useState(null);
  const [expandedCategory, setExpandedCategory] = useState(0);

  const dispatch = useDispatch();


  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    const res = await fetch("/resData.json");
    const json = await res.json();
    setResData(json);
  };

  const restaurant = resData?.data?.cards[0]?.card?.card?.info;

  const itemsList =
    resData?.data?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  // ✅ Filter only categories that have itemCards
  const categories = itemsList?.filter((c) => c?.card?.card?.itemCards);

  const handleClick = (index) => {
    setExpandedCategory((prev) => (prev === index ? null : index));
  };

    

  const handleAddItem = (item) => {
    dispatch(addToCart(item));
   
  };
  

  return (
    <div className="p-6 pt-25">
      <div className="flex gap-5 flex-col justify-center items-center p-5 font-medium text-xl">
        <h1 className="text-4xl font-bold">{restaurant?.name}</h1>
        <p>
          {restaurant?.areaName}, {restaurant?.city}
        </p>
      </div>

      <div className="flex gap-7 justify-center items-center pb-5 font-medium text-lg">
        <p>
          ⭐ {restaurant?.avgRating} ({restaurant?.totalRatingsString})
        </p>
        <p>{restaurant?.costForTwoMessage}</p>
      </div>

      <h2 className="text-4xl font-bold mt-2 text-center">Menu</h2>

      {categories?.map((category, index) => (
        <div
          key={category?.card?.card?.title}
          className="flex flex-col justify-center items-center w-2/3 mx-auto"
        >
          <div
            className="text-xl w-full font-bold py-4 mt-5 mb-6 bg-gray-200 text-center flex items-center justify-between shadow-md rounded-xl px-10 cursor-pointer"
            onClick={() => handleClick(index)}
          >
            <span>
              {category?.card?.card?.title} (
              {category?.card?.card?.itemCards?.length})
            </span>
            <ArrowDown
              className={`transition-transform duration-300 ${
                expandedCategory === index ? "rotate-180" : ""
              }`}
            />
          </div>

          
            <div
              className={`w-full px-10 overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
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
                <button className="w-30 h-8 bg-black text-white rounded-md hover:bg-gray-800 
                transition-colors duration-300 cursor-pointer" onClick={() => handleAddItem(item)}>
                Add item
              </button>
                </div>
              ))}
              
            </div>
         
        </div>
      ))}
    </div>
  );
};

export default RestaurantData;
