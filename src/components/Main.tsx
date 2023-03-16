import { useEffect, useState } from "react";
import { getAllFarms } from "../services/FieldToFeastService";
import "./Main.css";

const Main = () => {
  const [farms, setFarms] = useState<[]>([]);
  useEffect(() => {
    (async () => {})();
  }, []);
  return <div className="Main"></div>;
};

export default Main;
