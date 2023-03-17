import axios from "axios";
import Farm from "../model/Farm";

const baseURL: string = process.env.REACT_APP_API_URL + "/farm" || "";

export const postNewFarm = async (newFarm: Farm): Promise<Farm> => {
  return (await axios.post(baseURL, newFarm)).data;
};
