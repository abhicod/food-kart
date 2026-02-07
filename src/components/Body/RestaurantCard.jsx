import { RES_IMG } from "../../utils/constants";

const RestaurantCard = ({resData}) => {

  const {cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo} = resData?.card?.card?.info;


  return (
    <div>
      <div className="card w-60 rounded-lg flex flex-col gap-6 h-80 hover:scale-96 transition-transform duration-150 mb-8 ">
        <img
          className="h-35 rounded-3xl w-full object-cover"
          src={RES_IMG + cloudinaryImageId}
          alt=""
        />
        <div className="flex flex-col items-start gap-1">
          <h2 className="font-bold text-lg">{name}</h2>
          <h4 className="text-gray-500">{cuisines.join(', ')}</h4>
          <h4 className="font-semibold"> Rating: {avgRating}</h4>
          <h4 className=" text-gray-500">{sla.deliveryTime} minutes</h4>
          <h4 className=" text-gray-500">{costForTwo}</h4>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
