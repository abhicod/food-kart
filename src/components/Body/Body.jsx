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
       <h1 className="text-3xl font-bold mt-10 text-center">Order our best food options</h1>
       <ProductsContainer />
        <h1 className="text-3xl font-bold text-center mt-10">Explore our restaurants</h1>
       <RestaurantContainer /> 
      </div>
    </div>
  )
}

export default Body
