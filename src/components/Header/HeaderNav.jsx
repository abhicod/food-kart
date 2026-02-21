import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HeaderNav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("Login");

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div>
      <div className="navItems pr-10">
        <ul className="flex space-x-13 font-semibold text-xl">
          <li className="cursor-pointer hover:text-green-600">
            <Link to="/" className="block w-full h-full">
              Home
            </Link>
          </li>
          <li className="cursor-pointer hover:text-green-600"> <Link to="/about" className="block w-full h-full">
              About
            </Link></li>
          <li className="cursor-pointer hover:text-green-600"> <Link to="/contact" className="block w-full h-full">
              Contact
            </Link></li>
          <li className="cursor-pointer hover:text-green-600">
            <Link to='/cart' className=' w-full h-full flex justify-center items-center gap-1 text-2xl'>
            <div className=" text-gray-00 hover:text-black relative">
            <ShoppingCart size={35}  />
            <p className="absolute text-sm top-0 right-0  bg-amber-400 rounded-full px-1">{cartItems.length}</p>
            </div>
            </Link>
            
          </li>
          <li
            className="bg-green-500 text-white px-4 py-1 rounded-lg cursor-pointer hover:bg-green-600 text-lg"
            onClick={() => {
              isLoggedIn === "Login"
                ? setIsLoggedIn("Logout")
                : setIsLoggedIn("Login");
            }}
          >
            {isLoggedIn}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderNav;
