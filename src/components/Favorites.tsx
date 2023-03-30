import { useContext } from "react";
import FavoritesContext from "../context/FavoritesContext";
import FarmList from "./FarmList";

import "./Favorites.css";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);
  console.log(favorites);
  return (
    <div className="Favorites">
      <ul>
        {favorites.map((item) => (
          <FarmList key={item._id} farmsProp={item.farm} />
        ))}
      </ul>
    </div>
  );
};
export default Favorites;
