import Farm from "../model/Farm";
import "./MyFarmsList.css";

interface Prop {
  farmProp: Farm;
}

const MyFarmsList = ({ farmProp }: Prop) => {
  return (
    <li className="myFarmsList">
      <p>Name: {farmProp.name}</p>
      <p>Address: {farmProp.formatted_address}</p>
      <p>Rating: {farmProp.rating}</p>
    </li>
  );
};

export default MyFarmsList;
