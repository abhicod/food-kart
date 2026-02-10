
import { Search } from "lucide-react";
import { useState } from "react";

const SearchBar = ({ topRes, setFilteredRes, placeholder }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <div className="searchContainer flex items-center justify-center p-8">
        <div className="relative w-1/2 rounded-2xl border hover:border-green-500 hover:shadow-lg shadow-green-300/50 transition duration-200">
          <input
            type="text"
            placeholder={placeholder}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full py-3 px-7 font-medium border-0 outline-0"
          />

          <Search
            className="absolute right-3 top-3 text-gray-600 cursor-pointer hover:text-green-500 transition"
            size={20}
            strokeWidth={2.25}
            onClick={() => {
              const filteredRestaurant = topRes.filter((res) =>
                res?.card?.card?.info?.name.toLowerCase()
                  .includes(searchText.toLowerCase())
              );

              setFilteredRes(filteredRestaurant);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
