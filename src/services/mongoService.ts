import axios from "axios";
import Farm from "../model/Farm";

const baseURL: string = process.env.REACT_APP_API_URL || "";

export const postNewFarm = async (
  newFarm: Farm,
  place_id: string
): Promise<Farm> => {
  return (await axios.post(`${baseURL}/users/:place_id/farms`, newFarm)).data;
};
