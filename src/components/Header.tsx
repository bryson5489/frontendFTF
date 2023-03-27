import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import "./Header.css";

const Header = () => {
  const { user, profile } = useContext(AuthContext);

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
