import Location from "./Location";

interface Geometry {
  location: Location;
}

interface Html_attributions {
  html_attributions: string;
}

export default interface Farm {
  photos?: Html_attributions;
  place_id?: string;
  formatted_address: string;
  geometry?: Geometry;
  name: string;
  rating: number;
}
