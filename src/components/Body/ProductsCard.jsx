
import logo from '../../assets/logo.png'
const ProductsCard = () => {
  return (
    <div>
       <div className="products-container">
         <div className="product-card">
         <img className="h-30 rounded-full hover:shadow-2xl" src={logo} alt="" />
            <h2 className="text-xl font-bold mt-2">Product Name</h2>
      </div>
    </div>
    </div>
  )
}

export default ProductsCard
