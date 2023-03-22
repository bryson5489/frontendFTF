import { Link } from "react-router-dom";
import Farm from "../models/Farm";
import "./FarmList.css";
interface Prop {
  farmsProp: Farm;
}

const FarmList = ({ farmsProp }: Prop) => {
  return (
    <ul className="FarmList">
      <Link to="/detailsPage">
        <li>
          <p>Farm Name: {farmsProp.name}</p>
          <p>Address: {farmsProp.formatted_address}</p>
          <p>Rating: {farmsProp.rating}</p>
        </li>
      </Link>
    </ul>
  );
};

export default FarmList;
