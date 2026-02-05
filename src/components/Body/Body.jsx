import HeroContent from "./HeroContent"
import HeroImage from "./HeroImage"
import ProductsContainer from "./ProductsContainer"
import RestaurantContainer from "./RestaurantContainer"
import SearchBar from "./SearchBar"


const Body = () => {
  return (
    <div>
      <div >
        <div className="hero flex items-center justify-between p-20 gap-10  ">
          <HeroImage />
         <HeroContent />
        </div>
        <div className="border-b border-green-500 w-9/12 mx-auto rounded-4xl"></div>
       <SearchBar />
       <h1 className="text-3xl font-bold text-left pl-30 mt-10">Order our best food options</h1>
       <ProductsContainer />
      </div>
    </div>
  )
}

export default Body
