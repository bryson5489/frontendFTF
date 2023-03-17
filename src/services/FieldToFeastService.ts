import axios from "axios";

const baseURL =
  "https://maps.googleapis.com/maps/api/place/textsearch/json?query=farms%20in%20Novi%20Michigan";
const key: string = process.env.REACT_APP_FARM_KEY || "";

export const getAllFarms = async (): Promise<null> => {
  return (await axios.get(baseURL, { params: { key } })).data;
};

// export const getFarmById = async (id: string): Promise<null> => {
//   return (
//     await axios.get(baseURL + "/" + encodeURIComponent(id), {
//       params: { api_key: key },
//     })
//   ).data;
// };
