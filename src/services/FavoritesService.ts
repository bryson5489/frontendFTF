import axios from "axios";
import Favorite from "../models/Favorite";

const baseURL: string = process.env.REACT_APP_API_URL || "";

export const getFavorites = async (profile_id: string): Promise<Favorite[]> => {
  return (
    await axios.get(
      `${baseURL}/users/${encodeURIComponent(profile_id)}/favorites`
    )
  ).data;
};

export const addFavorite = async (newFavorite: Favorite): Promise<Favorite> => {
  return (
    await axios.post(
      `${baseURL}/users/${encodeURIComponent(
        newFavorite.profile_id!
      )}/favorites`,
      newFavorite
    )
  ).data;
};

export const deleteFavorite = async (
  profile_id: string,
  place_id: string
): Promise<void> => {
  await axios.delete(
    `${baseURL}/users/${encodeURIComponent(
      profile_id
    )}/favorites/${encodeURIComponent(place_id)}`
  );
};
