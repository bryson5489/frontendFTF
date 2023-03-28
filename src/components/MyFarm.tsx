import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import Farm from "../models/Farm";
import MongoFarm from "../models/MongoFarm";
import { getFarmsByLocation } from "../services/googleService";
import { postNewFarm, deleteFarm } from "../services/mongoService";
import MyFarmsList from "./MyFarmList";
import "./MyFarms.css";

import Post from "./Post";

const MyFarms = () => {
  // need to pass the user here as a prop. if the user is a farmer then the post new farm
  // prop should show. if not, then the button will now show here at all
  // we also need to make it so that the favorites will show if it is a consumer
  // and only your farms will show as a farmer
  const [MyFarms, setMyFarms] = useState<Farm[]>([]);
  const [newFarm, setNewFarm] = useState<boolean>(false);
  const { profile } = useContext(AuthContext);
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
  const newFarmHandler = async (newFarm: MongoFarm): Promise<void> => {
    await postNewFarm(newFarm);
    loadAllFarms();
  };
  const deleteFarmHandler = (id: string) => {
    deleteFarm(id);
    loadAllFarms();
  };
  return (
    <div className="MyFarms">
      {profile?.isFarmer ? (
        <>
          <button
            className="newFarmButton"
            onClick={() => {
              setNewFarm(true);
            }}
          >
            Push to make a new Farm
          </button>
          {newFarm ? (
            <Post newFarmProp={newFarmHandler} newFarmState={setNewFarm} />
          ) : (
            <></>
          )}
        </>
      ) : (
        <>
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
