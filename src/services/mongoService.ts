import axios from "axios";
import Farm from "../models/Farm";

const baseURL: string = process.env.REACT_APP_API_URL || "";

export const postNewFarm = async (
  newFarm: Farm,
  place_id: string
): Promise<Farm> => {
  return (await axios.post(`${baseURL}/users/${place_id}/farms`, newFarm)).data;
};
export const deleteFarm = async (place_id: string): Promise<void> => {
  await axios.delete(`${baseURL}/users/:place_id/farms/${place_id}`);
};
