import Location from "./Location";

interface Geometry {
  location: Location;
}

interface Photo {
  photo_reference: string;
}

interface Review {
  author_name: string;
  relative_time_description: string;
  text: string;
  rating: number;
  profile_photo_url?: string;
}

export default interface Farm {
  photos?: Photo[];
  place_id?: string;
  formatted_address: string;
  geometry?: Geometry;
  name: string;
  rating: number;
  reviews?: Review[];
}
