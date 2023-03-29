import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import "./Header.css";
import logo from "../assets/Field-to-Feast-Green.png";

const Header = () => {
  const { user, profile } = useContext(AuthContext);

  return (
    <header className="Header">
      <Link to={"/"}>
        {" "}
        <img src={logo} alt="Field To Feast" />
      </Link>

      <ul>
        <Link to="/map">
          <li>Home</li>
        </Link>

        {user && !profile && (
          <Link to="/login">
            <li>Make Profile</li>
          </Link>
        )}

        {user && profile && (
          <div>
            {" "}
            <Link to="/farms">
              <li>My Farms</li>
            </Link>
          </div>
        )}
        {user ? (
          <button onClick={signOut}>Sign out</button>
        ) : (
          <button onClick={signInWithGoogle}>Sign in with Google</button>
        )}
      </ul>
    </header>
  );
};

export default Header;
