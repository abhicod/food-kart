import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div>
      <div className="searchContainer flex items-center justify-center p-10 ">
           <div className="relative w-1/2  rounded-4xl border hover:border-green-500 hover:shadow-lg shadow-green-300/40 transition duration-200">
            <input type="text" placeholder='Enter everything here' className='w-full py-3 px-7 font-medium border-0 outline-0 ' />
            <Search className="absolute right-3 top-3 text-gray-400" size={20} strokeWidth={2.25} color="#0f0a0a"/>
           
           </div>
      </div>
    </div>
  )
}

export default SearchBar
