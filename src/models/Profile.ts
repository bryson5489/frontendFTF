export default interface Profile {
  isFarmer: boolean;
  google_id: string;
  _id?: string;
  fullName: string;
  email: string;
  address: string;
  phoneNumber?: string;
  aboutMe?: string;
  lat: number;
  lng: number;
}
