import { useEffect, useState } from "react";
import Farm from "../model/Farm";
import { getFarmsByLocation } from "../services/googleService";
import { postNewFarm, deleteFarm } from "../services/mongoService";
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
  const newFarmHandler = async (newFarm: Farm): Promise<void> => {
    await postNewFarm(newFarm, "12345");
    loadAllFarms();
  };
  const deleteFarmHandler = (id: string) => {
    deleteFarm(id);
    loadAllFarms();
  };
  return (
    <div className="MyFarms">
      <Post newFarmProp={newFarmHandler} />
      {myFarms.map((farm, index) => (
        <MyFarmsList
          farmProp={farm}
          key={`${farm.place_id} + ${index}`}
          deleteFarmProp={deleteFarmHandler}
        />
      ))}
    </div>
  );
};

export default MyFarms;
