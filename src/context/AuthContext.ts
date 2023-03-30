import { User } from "firebase/auth";
import { createContext } from "react";
import Profile from "../models/Profile";

export interface AuthContextModel {
  user: User | null; // null when not logged in
  profile: Profile | null;
  addProfileHandler: (profile: Profile) => void;
}
const defaultValue: AuthContextModel = {
  user: null,
  profile: null,
  addProfileHandler: () => {},
};
const AuthContext = createContext(defaultValue);
export default AuthContext;
