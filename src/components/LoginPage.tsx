import "./LoginPage.css";

import { signInWithGoogle, signOut } from "../firebaseConfig";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const LoginPage = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="LoginPage">
      loginpage works
      {user ? (
        <button onClick={signOut}>Sign out</button>
      ) : (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      )}
    </div>
  );
};

export default LoginPage;
