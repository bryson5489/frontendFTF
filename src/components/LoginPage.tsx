import "./LoginPage.css";

import { signInWithGoogle, signOut } from "../firebaseConfig";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import ProfileForm from "./ProfileForm";

const LoginPage = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="LoginPage">
      <ProfileForm />
    </div>
  );
};

export default LoginPage;
