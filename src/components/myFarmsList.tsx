import Farm from "../model/Farm";
import "./MyFarmsList.css";

interface Prop {
  farmProp: Farm;
  deleteFarmProp: (id: string) => void;
}

const MyFarmsList = ({ farmProp, deleteFarmProp }: Prop) => {
  return (
    <li className="MyFarmsList">
      <p>Name: {farmProp.name}</p>
      <p>Address: {farmProp.formatted_address}</p>
      <p>Rating: {farmProp.rating}</p>
      <button onClick={() => deleteFarmProp(farmProp.place_id!)}>Delete</button>
    </li>
  );
};

export default MyFarmsList;
