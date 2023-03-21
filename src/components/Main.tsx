import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Farm from "../models/Farm";
import { getFarmsByLocation } from "../services/googleService";
import FarmList from "./FarmList";

// import { postNewFarm } from "../services/mongoService";

import "./Main.css";
// import Post from "./Post";

const Main = () => {
  const [farms, setFarms] = useState<Farm[]>([]);
  let [searchParams, setSearchParams] = useSearchParams();
  let searchTerm = searchParams.get("search-term");
  if (!searchTerm) {
    searchTerm = "novi michigan";
  }
  const loadAllFarms = async () => {
    const farms: Farm[] = (await getFarmsByLocation(searchTerm!)).results;
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
        <FarmList farmsProp={farm} key={farm.place_id} />
      ))}
    </div>
  );
};

export default Main;
