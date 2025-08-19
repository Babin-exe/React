import HEADER_IMG from "../utils/links";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={HEADER_IMG} alt="AuhsNsk" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>

          <li>
            <Link to="/about">About Us</Link>
          </li>

          <li>
            {" "}
            <Link to="/ContactUs"> Contact Us</Link>{" "}
          </li>

          <li> Cart </li>

          <li>
            <button>Login</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
