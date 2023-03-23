import { User } from "firebase/auth";
import { ReactNode, useEffect, useState } from "react";
import { auth } from "../firebaseconfig";
import AuthContext from "./AuthContext";

//TODO:
//create backend routes to connect to mongo for users
//then create service call to hit those endpoints
//then create function in context provider that calls the service we made
//then do the same for getting a user

interface Props {
  children: ReactNode;
}

const AuthContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    return auth.onAuthStateChanged((newUser) => {
      setUser(newUser);
    });
  }, []);
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
export default AuthContextProvider;
