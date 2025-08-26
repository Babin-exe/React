import HEADER_IMG from "../utils/links";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useState } from "react";

const Header = () => {
  const status = useOnlineStatus();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white  shadow-md relative">
      <div className="logo">
        <img src={HEADER_IMG} alt="AuhsNsk" className="h-12" />
      </div>

      <nav className="hidden md:flex">
        <ul className="flex items-center space-x-6">
          <li className="font-medium text-gray-700">
            Status : {status === true ? "✅ Online" : "🔴 Offline"}
          </li>

          <li>
            <Link className="hover:text-blue-500 transition" to="/">
              {" "}
              Home{" "}
            </Link>
          </li>

          <li>
            <Link className="hover:text-blue-500 transition" to="/about">
              About Us
            </Link>
          </li>

          <li>
            <Link className="hover:text-blue-500 transition" to="/ContactUs">
              {" "}
              Contact Us
            </Link>{" "}
          </li>

          <li>
            <Link className="hover:text-blue-500 transition" to="/Grocery">
              Grocery
            </Link>
          </li>

          <li className="text-gray-700 font-medium"> Cart </li>

          <li>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition cursor-pointer">
              Login
            </button>
          </li>
        </ul>
      </nav>

      <button
        className="md:hidden flex flex-col space-y-1"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="w-6 h-0.5 bg-gray-700"></span>
        <span className="w-6 h-0.5 bg-gray-700"></span>
        <span className="w-6 h-0.5 bg-gray-700"></span>
      </button>

      {menuOpen && (
        <nav className="absolute top-16 right-6 bg-white shadow-lg rounded-lg p-4 md:hidden">
          <ul className=" flex flex-col space-y-3">
            <li className="font-medium text-gray-700">
              {status ? "✅ Online" : "🔴 Offline"}
            </li>
            <li>
              <Link onClick={() => setMenuOpen(false)} to="/">
                Home
              </Link>
            </li>

            <li>
              <Link onClick={() => setMenuOpen(false)} to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link onClick={() => setMenuOpen(false)} to="/contactUs">
                Contact Us
              </Link>
            </li>

            <li>
              <Link onClick={() => setMenuOpen(false)} to="/Grocery">
                Grocery
              </Link>
            </li>

            <li className="font-medium text-gray-700">Cart</li>
            <li>
              <button className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600 transition">
                Login
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};
export default Header;
