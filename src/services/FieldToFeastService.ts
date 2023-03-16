import axios from "axios";

const baseURL = "full url";
const key: string = process.env.REACT_APP_FARM_KEY || "";

export const getAllFarms = async (): Promise<null> => {
  return (await axios.get(baseURL)).data;
};

export const getFarmById = async (id: string): Promise<null> => {
  return (
    await axios.get(baseURL + "/" + encodeURIComponent(id), {
      params: { api_key: key },
    })
  ).data;
};
