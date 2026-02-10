import {Link} from "react-router-dom";

const ProductsCard = ({image,name,route}) => {
  return (
    <div>
      <Link to= {route} >
       <div className="products-container cursor-pointer hover:shadow-2xl hover: shadow-purple-700/70 hover:scale-97 tansition duration-100 p-5 rounded-4xl">
         <div className="product-card">
         <img className="h-30 rounded-full  w-30 object-cover" src={image} alt="" />
            <h2 className="text-xl font-bold mt-2 flex justify-center">{name}</h2>
      </div>
    </div>
    </Link>
    </div>
  )
}

export default ProductsCard
