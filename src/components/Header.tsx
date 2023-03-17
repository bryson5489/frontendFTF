import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <Link to={"/"}>
        {" "}
        <h1>Field To Feast</h1>
      </Link>

      <ul>
        <Link to="/map">
          <li>Map</li>
        </Link>
        <Link to="/post">
          <li>Post</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
