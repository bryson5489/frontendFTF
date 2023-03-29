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
      await addFavorite(newFavorite, profile._id!);
      loadFavorites();
    }
  };

  const deleteFavoriteHandler = async (id: string): Promise<void> => {
    if (profile) {
      await deleteFavorite(profile._id!, id);
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
