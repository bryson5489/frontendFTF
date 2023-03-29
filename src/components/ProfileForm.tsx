import { FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { getGeolocation } from "../services/googleService";
import { addProfile } from "../services/profileService";
import "./ProfileForm.css";

const ProfileForm = () => {
  const [isFarmer, setIsFarmer] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const submitHandler = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    let latLong = await getGeolocation(address + city + state);
    console.log(latLong);
    await addProfile({
      google_id: user?.uid!,
      isFarmer,
      fullName,
      email,
      aboutMe,
      phoneNumber,
      address: address + city + state,
      lat: latLong.results[0].geometry.location.lat,
      lng: latLong.results[0].geometry.location.lng,
    });
    navigate("/map");
  };

  return (
    <form className="ProfileForm" onSubmit={(e) => submitHandler(e)}>
      <label htmlFor="name">Full Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={fullName}
        onChange={(e) => {
          setFullName(e.target.value);
        }}
      />
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        id="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <label htmlFor="phoneNumber">Phone Number</label>
      <input
        type="text"
        name="phoneNumber"
        id="phoneNumber"
        value={phoneNumber}
        onChange={(e) => {
          setPhoneNumber(e.target.value);
        }}
      />

      <label htmlFor="address">Address</label>
      <input
        type="text"
        name="address"
        id="address"
        value={address}
        onChange={(e) => {
          setAddress(e.target.value);
        }}
      />
      <label htmlFor="city">City</label>
      <input
        type="text"
        name="city"
        id="city"
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
      <label htmlFor="state">State</label>
      <input
        type="text"
        name="state"
        id="state"
        value={state}
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
      <label htmlFor="isFarmer">Are you a Farmer</label>
      <input
        type="checkbox"
        name="isFarmer"
        id="isFarmer"
        checked={isFarmer}
        onChange={(e) => {
          setIsFarmer(e.target.checked);
        }}
      />
      <label htmlFor="aboutMe">About Me</label>
      <textarea
        name="aboutMe"
        id="aboutMe"
        value={aboutMe}
        onChange={(e) => {
          setAboutMe(e.target.value);
        }}
      />
      <button>Make account!</button>
    </form>
  );
};

export default ProfileForm;
