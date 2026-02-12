import { useEffect, useState } from "react";

const RestaurantData = () => {
  const [resData, setResData] = useState(null);

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    const res = await fetch("/resData.json");
    const json = await res.json();
    setResData(json);
  };

  const restaurant = resData?.data?.cards[0]?.card?.card?.info;

  const items =
    resData?.data?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[0]?.card
      ?.card?.itemCards;    

  return (
    <div className="p-6">
      
      <div className="flex gap-5 flex-col justify-center items-center p-5 font-medium text-xl">
        <h1 className="text-4xl font-bold ">
        {restaurant?.name}
      </h1>
        <p>
          {restaurant?.areaName}, {restaurant?.city}
        </p>
      </div>
      <div className="flex gap-7 justify-center items-center pb-5 font-medium text-lg">
        <p>⭐ {restaurant?.avgRating} ({restaurant?.totalRatingsString}) </p>
        
        <p>{restaurant?.costForTwoMessage}</p>
      </div>

      <h2 className="text-4xl font-bold mt-2 text-center">Menu</h2>
      <div className="flex flex-col justify-center items-center w-2/3 mx-auto">
      <h3 className="text-2xl w-full font-semibold py-3 mt-5 mb-2 bg-gray-200 text-center">{resData?.data?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[0]?.card?.card.title}</h3>

      <ul className="">
        {items?.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} – ₹{item.card.info.price / 100}
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default RestaurantData;
