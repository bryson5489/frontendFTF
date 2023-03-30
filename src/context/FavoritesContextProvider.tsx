// paste from event api proj
import { ReactNode, useContext, useEffect, useState } from "react";
import Favorite from "../models/Favorite";
import {
  addFavorite,
  deleteFavorite,
  getFavorites,
} from "../services/FavoritesService";
import FavoritesContext from "./FavoritesContext";
import AuthContext from "./AuthContext";

interface Props {
  children: ReactNode;
}

const FavoritesContextProvider = ({ children }: Props) => {
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const { profile } = useContext(AuthContext);

  const loadFavorites = async () => {
    if (profile) {
      const favorites: Favorite[] = await getFavorites(profile._id!);
      setFavorites(favorites);
    } else {
      setFavorites([]);
    }
  };

  const addFavoriteHandler = async (newFavorite: Favorite): Promise<void> => {
    if (profile) {
      newFavorite.profile_id = profile._id;
      await addFavorite(newFavorite);
      loadFavorites();
    }
  };

  const deleteFavoriteHandler = async (
    formattedAddress: string
  ): Promise<void> => {
    if (profile) {
      await deleteFavorite(profile._id!, formattedAddress);
      loadFavorites();
    }
  };

  const isFav = (formattedAddress: string): boolean =>
    favorites.some(
      (favorite) => favorite.farm.formatted_address === formattedAddress
    );

  useEffect(() => {
    (async () => {
      loadFavorites();
    })();
  }, []);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavoriteHandler, deleteFavoriteHandler, isFav }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
