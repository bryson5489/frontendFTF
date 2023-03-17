import axios from "axios";
import FarmResponse from "../model/FarmResponse";

const baseURL: string =
  "http://127.0.0.1:5001/fieldtofeast-a9258/us-central1/api/farms";

export const getFarmsByLocation = async (
  location: string
): Promise<FarmResponse> => {
  return (await axios.get(baseURL, { params: { location } })).data;
};
