import { useEffect, useState } from "react";
import Farm from "../model/Farm";
import { getFarmsByLocation } from "../services/googleService";
// import { postNewFarm } from "../services/mongoService";
import Farmlist from "./Farmlist";
import "./Main.css";
// import Post from "./Post";

const Main = () => {
  const [farms, setFarms] = useState<Farm[]>([]);
  const loadAllFarms = async () => {
    const farms: Farm[] = (await getFarmsByLocation("novi michigan")).results;
    console.log(farms);
    setFarms(farms);
  };

  useEffect(() => {
    (async () => {
      loadAllFarms();
    })();
  }, []);
  return (
    <div className="Main">
      {farms.map((farm) => (
        <Farmlist farmsProp={farm} key={farm.place_id} />
      ))}
    </div>
  );
};

export default Main;
