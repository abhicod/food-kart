import SearchBar from "../Body/SearchBar";
import ProductsResContainer from "./ProductsResContainer";
import { useParams } from "react-router-dom";
import useFetchApiData from "../../utils/useFetchApiData";


const Biryani = () => {
  

      // const {resId} = useParams();
      // console.log(resId);
      const {topRes, setTopRes} = useFetchApiData("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6275609&lng=77.2784081&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");

  return (
    <div>
      <div className=" flex justify-center items-center pt-30 pb-2 text-4xl font-bold bg-linear-to-r from-red-500 to-blue-900 bg-clip-text text-transparent ">
        <h1>Biryani</h1>
      </div>
      <SearchBar placeholder="Search our top restaurants for Biryani" />
      <div className=" flex justify-center items-center pt-3 text-4xl font-bold bg-linear-to-r from-red-500 to-blue-900 bg-clip-text text-transparent mb-5">
        <h1>Explore Our Top Restaurants</h1>
      </div>
      <button
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg absolute right-18 block  cursor-pointer"
          onClick={() => {
            setTopRes(
              topRes.filter((res) => res.card.card.info.avgRating > 4.2),
            );
          }}
        >
          Top rated restaurants
        </button>
          
      <ProductsResContainer resData={topRes} />
    </div>
  );
};

export default Biryani;
