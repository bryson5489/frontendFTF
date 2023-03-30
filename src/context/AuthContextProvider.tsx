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

  const addProfileHandler = async (newProfile: Profile): Promise<void> => {
    await addProfile(newProfile);
    const profile = await getProfile(newProfile.google_id);
    setProfile(profile);
  };

  useEffect(() => {
    return auth.onAuthStateChanged(async (newUser) => {
      setUser(newUser);
      if (newUser) {
        const profile = await getProfile(newUser.uid);
        console.log(profile);
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
    <AuthContext.Provider value={{ user, profile, addProfileHandler }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
