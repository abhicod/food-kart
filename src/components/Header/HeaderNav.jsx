import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderNav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("Login");

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
            <Link to='/cart' className='block w-full h-full'>
            <ShoppingCart size={35} />
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
