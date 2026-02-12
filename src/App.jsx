import Biryani from "./components/Products/Biryani";
import Burger from "./components/Products/Burger";
import IceCream from "./components/Products/IceCream";
import Noodles from "./components/Products/Noodles";
import Pastry from "./components/Products/Pastry";
import Pizza from "./components/Products/Pizza";
import Sandwich from "./components/Products/Sandwich";
import Body from "./components/Body/Body";
import { Routes, Route } from "react-router-dom";
import About from "./components/Body/About";
import Cart from "./components/Body/Cart";
import Contact from "./components/Body/Contact";
import Error from "./components/Body/Error";
import AppLayout from "./AppLayout";
import RestaurantData from "./components/Restaurants/RestaurantData";

const App = () => {
  return (
    <>
      <div className="bg-gray-100 h-full">
        <Routes>
          <Route path="/" element={<AppLayout />} >
          <Route index element={<Body />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
          <Route path="/biryani" element={<Biryani />} />
          <Route path="/burger" element={<Burger />} />
          <Route path="/icecream" element={<IceCream />} />
          <Route path="/noodles" element={<Noodles />} />
          <Route path="/pastry" element={<Pastry />} />
          <Route path="/pizza" element={<Pizza />} />
          <Route path="/sandwich" element={<Sandwich />} />
          <Route path="/biryani/:resId" element={<RestaurantData />} />
        
         </Route>
         </Routes>
      </div>
    </>
  );
};

export default App;


// import { Routes, Route } from "react-router-dom";
// import Body from "./components/Body/Body";
// import About from "./components/Body/About";
// import Cart from "./components/Body/Cart";
// import Contact from "./components/Body/Contact";
// import Error from "./components/Body/Error";
// import AppLayout from "./AppLayout";

// const App = () => {
//   return (
//     <div className="bg-gray-100 h-full">
//       <Routes>
//         {/* Layout Route */}
//         <Route path="/" element={<AppLayout />}>
//           <Route index element={<Body />} />
//           <Route path="about" element={<About />} />
//           <Route path="cart" element={<Cart />} />
//           <Route path="contact" element={<Contact />} />
//         </Route>

//         {/* 404 */}
//         <Route path="*" element={<Error />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;
