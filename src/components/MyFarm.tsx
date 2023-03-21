import { useEffect, useState } from "react";
import Farm from "../models/Farm";
import { getFarmsByLocation } from "../services/googleService";
import { postNewFarm, deleteFarm } from "../services/mongoService";
import MyFarmsList from "./MyFarmList";
import "./MyFarms.css";

import Post from "./Post";

const MyFarms = () => {
  const [MyFarms, setMyFarms] = useState<Farm[]>([]);
  const loadAllFarms = async () => {
    const MyFarms: Farm[] = (await getFarmsByLocation("novi michigan")).results;
    console.log(MyFarms);
    setMyFarms(MyFarms);
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
      {MyFarms.map((farm, index) => (
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
