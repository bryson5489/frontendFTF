import { useEffect, useState } from "react";
import Farm from "../models/Farm";
import { getFarmsByLocation } from "../services/googleService";
import { postNewFarm, deleteFarm } from "../services/mongoService";
import MyFarmsList from "./MyFarmList";
import "./MyFarms.css";

import Post from "./Post";

const MyFarms = () => {
  const [MyFarms, setMyFarms] = useState<Farm[]>([]);
  const [newFarm, setNewFarm] = useState<boolean>(false);
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
      {newFarm ? (
        <Post newFarmProp={newFarmHandler} newFarmState={setNewFarm} />
      ) : (
        <>
          <button
            className="newFarmButton"
            onClick={() => {
              setNewFarm(true);
            }}
          >
            Push to make a new Farm
          </button>
          <div className="myFarmsList">
            <h2>All My Farms</h2>
            {MyFarms.map((farm, index) => (
              <MyFarmsList
                farmProp={farm}
                key={`${farm.place_id} + ${index}`}
                deleteFarmProp={deleteFarmHandler}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MyFarms;
