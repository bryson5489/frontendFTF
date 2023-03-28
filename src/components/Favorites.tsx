import { useContext } from "react";
import FavoritesContext from "../context/FavoritesContext";

import "./Favorites.css";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);
  return (
    <div className="Favorites">
      <ul>
        {/* {favorites.map((item) => (
        //   <Card farmProp={item.farm} />
        ))} */}
      </ul>
    </div>
  );
};
export default Favorites;
