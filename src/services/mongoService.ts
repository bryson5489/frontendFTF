import axios from "axios";
import MongoFarm from "../models/MongoFarm";

const baseURL: string = process.env.REACT_APP_API_URL || "";

export const postNewFarm = async (newFarm: MongoFarm): Promise<MongoFarm> => {
  return (
    await axios.post(`${baseURL}/users/farms/${newFarm.farmer_id}`, newFarm)
  ).data;
};
export const getMongoFarms = async (location: string): Promise<MongoFarm[]> => {
  return (await axios.get(`${baseURL}/users/farms`, { params: { location } }))
    .data;
};

export const deleteFarm = async (place_id: string): Promise<void> => {
  await axios.delete(`${baseURL}/users/:place_id/farms/${place_id}`);
};
