import ProductsCard from "./ProductsCard";
import biryani from "../../assets/biryani.webp";
import burger from "../../assets/burger.webp";
import pizza from "../../assets/pizza.webp";
import noodles from "../../assets/noodles.webp";
import iceCream from "../../assets/ice-cream.webp";
import pastry from "../../assets/pastry.webp";
import sandWich from "../../assets/sandwich.webp";

const ProductsContainer = () => {
  return (
    <div className="flex justify-left flex-wrap gap-10 py-10 px-20 w-full">
      <ProductsCard image={biryani} name="Biryani" route="/biryani" />
      <ProductsCard image={burger} name="Burger" route="/burger" />
      <ProductsCard image={pizza} name="Pizza" route="/pizza" />
      <ProductsCard image={noodles} name="Noodles" route="/noodles" />
      <ProductsCard image={iceCream} name="Ice Cream" route="/icecream" />
      <ProductsCard image={pastry} name="Pastry" route="/pastry" />
      <ProductsCard image={sandWich} name="Sandwich" route="/sandwich" />
    </div>
  );
};

export default ProductsContainer;
