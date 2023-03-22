import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Farm from "../models/Farm";
import "./DetailsPage.css";

const DetailsPage = () => {
  const [farm, setFarm] = useState<Farm | null>(null);
  const id = useParams().id;

  useEffect(() => {
    (async () => {
      const farm: Farm = await getFarmById(id!);
      setFarm(farm);
    })();
  }, []);

  return <div className="DetailsPage"></div>;
};

export default DetailsPage;
