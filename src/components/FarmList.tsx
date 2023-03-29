import Farm from "../models/Farm";
import MongoFarm from "../models/MongoFarm";
import "./FarmList.css";
interface Prop {
  farmsProp: Farm | MongoFarm;
}

const FarmList = ({ farmsProp }: Prop) => {
  return (
    <li className="FarmList">
      <p>Farm Name: {farmsProp.name}</p>
      <p>Address: {farmsProp.formatted_address}</p>
      <p>Rating: {farmsProp.rating}</p>
    </li>
  );
};

export default FarmList;
