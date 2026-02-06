const RestaurantCard = ({resData}) => {
  return (
    <div>
      <div className="card w-fit rounded-lg flex flex-col items-center gap-6 h-80 hover:scale-97 transition-transform duration-150">
        <img
          className="h-35 rounded-3xl w-full"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/9/12/8c16e677-9254-4ec6-91bc-bc5a2beb0b9d_7585e859-4326-4fba-af10-385540e3274a.jpg"
          alt=""
        />
        <div className="flex flex-col items-start gap-2">
          <h2 className="font-bold text-xl">{resData[0].card.card.info.name}</h2>
          <h4 className="text-gray-500">{resData[0].card.card.info.cuisines.join(', ')}</h4>
          <h4 className="font-semibold"> Rating: {resData[0].card.card.info.avgRating}</h4>
          <h4 className=" text-gray-500">{resData[0] .card.card.info.sla.deliveryTime} minutes</h4>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
