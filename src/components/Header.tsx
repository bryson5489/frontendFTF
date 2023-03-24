import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="Header">
      <Link to={"/"}>
        {" "}
        <h1>Field To Feast</h1>
      </Link>

      <ul>
        <Link to="/map">
          <li>Home</li>
        </Link>
        {/* <Link to="/main">
          <li>List View</li>
        </Link> */}

        <Link to="/farms">
          <li>My Farms</li>
        </Link>

        <Link to="/login">
          <li>Login</li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
