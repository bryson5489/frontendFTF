import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../context/FavoritesContext";
import Farm from "../models/Farm";
import MongoFarm from "../models/MongoFarm";
import "./FarmList.css";
interface Prop {
  farmsProp: Farm | MongoFarm;
}

const FarmList = ({ farmsProp }: Prop) => {
  const { deleteFavoriteHandler } = useContext(FavoritesContext);
  return (
    <li className="FarmList">
      <p>Farm Name: {farmsProp.name}</p>
      <p>Address: {farmsProp.formatted_address}</p>
      <p>Rating: {farmsProp.rating}</p>
    </li>
  );
};

export default FarmList;
