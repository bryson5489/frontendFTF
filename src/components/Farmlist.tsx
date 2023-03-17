import Farm from "../model/Farm";
import "./Farmlist.css";
interface Prop {
  farmsProp: Farm;
}

const Farmlist = ({ farmsProp }: Prop) => {
  return (
    <ul className="Farmlist">
      <li>
        <p>Farm Name: {farmsProp.name}</p>
        <p>Address: {farmsProp.formatted_address}</p>
        <p>Rating: {farmsProp.rating}</p>
      </li>
    </ul>
  );
};

export default Farmlist;
