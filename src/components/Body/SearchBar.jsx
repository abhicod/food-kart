// import { Search } from 'lucide-react';
// import {useState} from 'react';
// import {ResList} from '../utils.mockData'

// const SearchBar = ({TopRes, setTopRes}) => {

//   const [searchText, setSearchText] = useState("");

//   return (
//     <div>
//       <div className="searchContainer flex items-center justify-center p-10 ">
//            <div className="relative w-1/2  rounded-4xl border hover:border-gray-500 hover:shadow-lg shadow-gray-300/50 transition duration-200">
//             <input type="text" placeholder='What are you looking for today?' value = {searchText} onChange={(e) =>{
//               setSearchText(e.target.value);
//             }} className='w-full py-3 px-7 font-medium border-0 outline-0 ' />
//             <Search className="absolute right-3 top-3 text-gray-400 cursor-pointer text-gray hover:text-green-500 hover:scale-103" size={20} strokeWidth={2.25} onClick={() => {
//                 const filteredRestaurant = TopRes.filter((res) => res?.card?.card?.info?.name.includes(searchText);
//                 setTopRes(filteredRestaurant));
//             }} />
           
//            </div>
//       </div>
//     </div>
//   )
// }

// export default SearchBar;


import { Search } from "lucide-react";
import { useState } from "react";

const SearchBar = ({ topRes, setFilteredRes, placeholder }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <div className="searchContainer flex items-center justify-center p-10">
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
