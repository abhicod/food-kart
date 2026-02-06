
import ProductsCard from './ProductsCard';
import biryani from '../../assets/biryani.webp';
import burger from '../../assets/burger.webp';
import pizza from '../../assets/pizza.webp';
import noodles from '../../assets/noodles.webp';
import iceCream from '../../assets/ice-cream.webp';
import pastry from '../../assets/pastry.webp';
import sandWich from '../../assets/sandwich.webp';

const ProductsContainer = () => {
  return (
    <div className='flex justify-left flex-wrap gap-20 py-10 pl-25 w-full'>
        <ProductsCard image={biryani} name="Biryani"/>
        <ProductsCard image={burger} name="Burger"/>
        <ProductsCard image={pizza} name="Pizza"/>
        <ProductsCard image={noodles} name="Noodles"/>
        <ProductsCard image={iceCream} name="Ice Cream"/>
        <ProductsCard image={pastry} name="Pastry"/>
        <ProductsCard image={sandWich} name="Sandwich"/>
        
    </div>
    
  )
}

export default ProductsContainer
