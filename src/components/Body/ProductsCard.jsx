

const ProductsCard = ({image,name}) => {
  return (
    <div>
       <div className="products-container">
         <div className="product-card">
         <img className="h-30 rounded-full hover:shadow-2xl w-30 object-cover" src={image} alt="" />
            <h2 className="text-xl font-bold mt-2 flex justify-center">{name}</h2>
      </div>
    </div>
    </div>
  )
}

export default ProductsCard
