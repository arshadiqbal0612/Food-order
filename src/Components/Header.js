import { useState } from "react";
import FoodFireLogo from "../Images/Food Fire Logo.png";
import { Link } from "react-router-dom";
import About from "./About";
import useAuth from "../utils/useAuth";

// Title component for display logo
// const loggedinuser = () => {
//   return false;
// };

const Title = () => (
  <a href="/">
    <img className={"h-20"} src={FoodFireLogo} alt="Food Fire Logo" />
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  // const [islogged, setislogged] = useState(false); 

  // const isAuth=useAuth();
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <div className="flex">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">
              <li>home</li>
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/about">
              <li>about</li>
            </Link>
            {/* <a href="/about">about</a> */}
          </li>
          <li>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          </li>
          <li>
            <Link to="/instamart">
              <li>Instamart</li>
            </Link>
          </li>
         
        </ul>
      </div>
      {/* {islogged ? (
        <button onClick={() => setislogged(false)}>logout</button>
      ) : (
        <button onClick={() => setislogged(true)}>login</button>
      )} */}
        <div>
      {isAuthenticated ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}

    </div>
    </div>
  );
};

export default Header;


