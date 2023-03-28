import Location from "./Location";

interface Geometry {
  location: Location;
}

export default interface MongoFarm {
  farmer_id: string;
  formatted_address: string;
  geometry?: Geometry;
  name: string;
  rating: number;
  website?: string;
}
