import axios from "axios";
import Profile from "../models/Profile";
const baseURL: string = process.env.REACT_APP_API_URL || "";
//for getting
export const getProfile = async (profile_id: string): Promise<Profile> => {
  return (
    await axios.get(`${baseURL}/profiles/${encodeURIComponent(profile_id)}`)
  ).data;
};
//for adding
export const addProfile = async (newProfile: Profile): Promise<Profile> => {
  return (await axios.post(`${baseURL}/profiles`, newProfile)).data;
};
//put is for update
export const updateProfile = async (
  newProfile: Profile,
  profile_id: string
): Promise<Profile> => {
  return (
    await axios.put(
      `${baseURL}/profiles/${encodeURIComponent(profile_id)}`,
      newProfile
    )
  ).data;
};
// deleting
export const deleteProfile = async (profile_id: string): Promise<void> => {
  await axios.delete(`${baseURL}/profiles/${encodeURIComponent(profile_id)}`);
};
