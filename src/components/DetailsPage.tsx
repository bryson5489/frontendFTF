import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Farm from "../models/Farm";
import SingleFarm from "../models/SingleFarm";
import { getFarmById } from "../services/googleService";
import "./DetailsPage.css";

const DetailsPage = () => {
  const [farm, setFarm] = useState<Farm | null>(null);
  const id = useParams().place_id;

  useEffect(() => {
    if (id) {
      (async () => {
        const farmFromParams: Farm = (await getFarmById(id)).result;
        setFarm(farmFromParams);
        console.log((await getFarmById(id)).result);
      })();
    }
  }, []);

  return (
    <div className="DetailsPage">
      <h2>Name: {farm?.name}</h2>
      <h3>Address: {farm?.formatted_address}</h3>
      <h4>Rating: {farm?.rating}</h4>
    </div>
  );
};

export default DetailsPage;
