import axios from "axios";
import Farm from "../models/Farm";
import FarmResponse from "../models/FarmResponse";
import SingleFarm from "../models/SingleFarm";

const baseURL: string =
  "http://127.0.0.1:5001/fieldtofeast-a9258/us-central1/api/farms";
const key: string = process.env.REACT_APP_FARM_KEY || "";

export const getFarmsByLocation = async (
  location: string
): Promise<FarmResponse> => {
  return (await axios.get(baseURL, { params: { location } })).data;
};

export const getFarmById = async (place_id: string): Promise<SingleFarm> => {
  return (
    await axios.get(baseURL + "/details", {
      params: { key, place_id },
    })
  ).data;
};
// TODO: create service call for text search, params need to be query and radius, note it is a get request

// finish out map form component and you will need a search term text input and a number input for radius and pass those two values to maps.tsx as params (query params or path params, james recommends query) and navigate to maps.tsx
//const navigate = useNavigate();
// navigate("/maps?encodeURLSearchParams(searchterm, radius)")
// the next job will be to use that function in Maps.tsx
