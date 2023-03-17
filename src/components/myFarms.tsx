import { useEffect, useState } from "react";
import Farm from "../model/Farm";
import { getFarmsByLocation } from "../services/googleService";
import { postNewFarm } from "../services/mongoService";
import "./MyFarms.css";
import MyFarmsList from "./MyFarmsList";

import Post from "./Post";

const MyFarms = () => {
  const [myFarms, setMyFarms] = useState<Farm[]>([]);
  const loadAllFarms = async () => {
    const myFarms: Farm[] = (await getFarmsByLocation("novi michigan")).results;
    console.log(myFarms);
    setMyFarms(myFarms);
  };
  useEffect(() => {
    (async () => {
      loadAllFarms();
    })();
  }, []);
  const newFarmHandler = (newFarm: Farm): void => {
    postNewFarm(newFarm);
    loadAllFarms();
  };
  return (
    <div className="myFarms">
      <Post newFarmProp={newFarmHandler} />
      {myFarms.map((farms, index) => (
        <MyFarmsList farmProp={farms} key={`${farms.place_id} + ${index}`} />
      ))}
    </div>
  );
};

export default MyFarms;
