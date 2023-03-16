import axios from "axios";
import Farm from "../model/Farm";

const baseURL = "full url";
const key: string = process.env.REACT_APP_FARM_KEY || "";

const getAllFarms = async (): Promise<Farm[]> => {
  return (await axios.get(baseURL)).data;
};

export const getFarmById = async (id: string): Promise<Farm> => {
  return (
    await axios.get(baseURL + "/" + encodeURIComponent(id), {
      params: { api_key: key },
    })
  ).data;
};
