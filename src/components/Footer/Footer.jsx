import {
  FacebookIcon,
  LinkedinIcon,
  Twitter,
  Github,
  Instagram,
} from "lucide-react";
import HeaderLogo from "../Header/HeaderLogo";

const Footer = () => {
  return (
    <div>
      <div className="bg-gray-200 flex h-80  items-start justify-center gap-100 p-10 mt-10">
        <div className="">
        <HeaderLogo />
        <h1 className="pt-5 font-medium text-lg text-gray-700">
          © 2026 Abhishek Sharma
        </h1>
        </div>
        <div>
        <h1 className="text-gray-700 font-bold text-2xl">Address:</h1>
        <h1 className="text-lg mb-2">
          {" "}
          123 Food Street, Foodville, FC (12345)
        </h1>
        <h1 className="text-gray-700 font-bold text-2xl">Contact:</h1>
        <h1 className="text-lg "> Email: Foodkart123@gmail.com</h1>
        <h1 className="text-lg"> Phone: +1 (123) 456-7890</h1>
        <h1 className="text-gray-700 font-bold text-2xl mt-2">Follow Us:</h1>
        <div className="flex mt-1">
          <LinkedinIcon className="ml-1 cursor-pointer hover:text-gray-600" />
          <FacebookIcon className="ml-5 cursor-pointer hover:text-gray-600" />
          <Twitter className="ml-5 cursor-pointer hover:text-gray-600" />
          <Github className="ml-5 cursor-pointer hover:text-gray-600" />
          <Instagram className="ml-5 cursor-pointer hover:text-gray-600" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
