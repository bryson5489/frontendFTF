import { User } from "firebase/auth";
import { ReactNode, useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import Profile from "../models/Profile";
import { addProfile, getProfile } from "../services/profileService";
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
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    return auth.onAuthStateChanged(async (newUser) => {
      setUser(newUser);
      if (newUser) {
        const profile = await getProfile(newUser.uid);
        if (profile) {
          setProfile(profile);
        }
      } else {
        setProfile(null);
      }
    });
  }, []);

  console.log(user);
  return (
    <AuthContext.Provider value={{ user, profile }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
