import { RES_IMG } from "../../utils/constants";


const RestaurantCard = ({resData}) => {

  const { name, cuisines, avgRating,cloudinaryImageId, costForTwo, deliveryTime} = resData;

  return (

    <div>
      <div className="card w-60 rounded-lg flex flex-col gap-6 h-80 hover:scale-96 transition-transform duration-150 mb-8 cursor-pointer">
        <img
          className="h-35 rounded-3xl w-full object-cover"
          src={RES_IMG + cloudinaryImageId}
          alt=""
        />
        <div className="flex flex-col items-start gap-1">
          <h2 className="font-bold text-lg">{name}</h2>
          <h4 className="text-gray-500">{cuisines.join(", ")}</h4>
          <h4 className="font-semibold"> Rating: {avgRating}</h4>
          <h4 className=" text-gray-500">Delivery in: {deliveryTime} minutes</h4>
          <h4 className=" text-gray-500">{costForTwo}</h4>
        </div>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) =>{
return (props) =>{
  return (
    <div className="group relative ">
      <label className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-bold z-5 group-hover:scale-96 transition-transform duration-150 ">Promoted</label>
      <RestaurantCard {...props} />
    </div>
  );
}
}


export default RestaurantCard;
