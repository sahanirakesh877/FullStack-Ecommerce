import React from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import { AiOutlineLogin } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge } from "@material-tailwind/react";
// import { useNavigate } from "react-router-dom";

const Navbar = () => {
  // const isUserSignedIn = !!localStorage.getItem("token");
  // const navigate = useNavigate();

  // const handleSignOut = () => {
  //   localStorage.removeItem("token");

  //   navigate("/");
  // };
  const items = useSelector((state) => state.cart);
  return (
    <>
      <header className="text-gray-900 body-font shadow  ">
        <div className="container mx-auto   flex    flex-wrap py-5 flex-col md:flex-row items-center  ">
          <div>
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <img
                src="https://pngfre.com/wp-content/uploads/nike-logo-6-1024x1024.png"
                alt=""
                className="w-[50px] h-[50px] object-contain object-center  rounded-full"
              />

              <span className="ml-1 text-2xl font-semibold text-red-500">
                ShopNow
              </span>
            </a>
          </div>
        
              <nav className="md:ml-auto md:mr-auto  flex flex-wrap items-center text-base justify-center ">
                <Link
                  to="/
                "
                  className="mr-5 hover:border-b-2 border-red-700  "
                >
                  Home
                </Link>
                <Link
                  to="/products"
                  className="mr-5 hover:border-b-2 border-red-700  "
                >
                  Products
                </Link>
                <Link
                  to="/blogs"
                  className="mr-5 hover:border-b-2 border-red-700 "
                >
                  Blogs
                </Link>
                <Link
                  to="/pages"
                  className="mr-5 hover:border-b-2 border-red-700 "
                >
                  Pages
                </Link>
                <Link
                  to="/contact"
                  className="mr-5 hover:border-b-2 border-red-700 "
                >
                  Contact
                </Link>
              </nav>
              

              {/* <Link to="/signout" className="mr-5 hover:text-gray-900">
                <button onClick={handleSignOut}>SignOut</button>
              </Link> */}
             
    
        
         
              <nav className=" md:ml-auto flex flex-wrap items-center text-base ">
              <Link
                to="/cart"
                className="px-2 hover:border-b-2 border-red-700  flex items-center    "
              >
                <Badge content={items.length}>
                  <BsFillCartCheckFill className="text-xl" />
                </Badge>{" "}
                 Cart
              </Link>
                <Link
                  to="/register"
                  className="px-3 hover:border-b-2 border-red-700  flex  items-center "
                >
                  {" "}
                  <FiLogOut className="text-xl" />
                  Register
                </Link>
                <Link
                  to="/login"
                  className=" hover:border-b-2 border-red-700  flex  items-center "
                >
                  {" "}
                  <AiOutlineLogin className="text-xl" />
                   Login
                </Link>
              </nav>
        
        </div>
      </header>
    </>
  );
};

export default Navbar;
