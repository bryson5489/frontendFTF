import { useState } from "react";
import Farm from "../model/Farm";
import { getFarmsByLocation } from "../services/googleService";
import { postNewFarm } from "../services/mongoService";
import "./myFarms.css";
import myFarmsList from "./myFarmsList";
import Post from "./Post";

const myFarms = () => {
  const [myFarms, setMyFarms] = useState<Farm[]>([]);
  const loadAllFarms = async () => {
    const farms: Farm[] = (await getFarmsByLocation("novi michigan")).results;
    console.log(farms);
    setMyFarms(farms);
  };
  const newFarmHandler = (newFarm: Farm): void => {
    postNewFarm(newFarm);
    loadAllFarms();
  };
  return (
    <div className="myFarms">
      {myFarms.map((farms) => (
        <myFarmsList />
      ))}
      <Post newFarmProp={newFarmHandler} />
    </div>
  );
};

export default myFarms;
