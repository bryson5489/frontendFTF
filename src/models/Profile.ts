export default interface Profile {
  isFarmer: boolean;
  profile_id: string;
  _id?: string;
  fullName: string;
  email: string;
  address: string;
  phoneNumber?: string;
  aboutMe?: string;
  lat: number;
  lng: number;
}
