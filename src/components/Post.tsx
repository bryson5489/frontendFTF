import "./Post.css";
import { FormEvent, useContext, useState } from "react";
import Farm from "../models/Farm";
import MongoFarm from "../models/MongoFarm";
import AuthContext from "../context/AuthContext";

interface Prop {
  newFarmProp: (newFarm: MongoFarm) => void;
  newFarmState: (boolean: boolean) => void;
}

const Post = ({ newFarmProp, newFarmState }: Prop) => {
  const [website, setWebsite] = useState("");
  const [newFarm, setNewFarm] = useState(false);
  const [name, setName] = useState("");
  const [formatted_address, setFormattedAddress] = useState("");
  const [rating, setRating] = useState("");
  const { profile } = useContext(AuthContext);
  const newFarmHandler = (e: FormEvent): void => {
    e.preventDefault();
    newFarmProp({
      name,
      formatted_address,
      rating: parseInt(rating),
      farmer_id: profile!.profile_id,
    });
    newFarmState(false);
    setName("");
    setFormattedAddress("");
    setRating("");
  };
  return (
    <form
      className="Post"
      onSubmit={(e) => {
        newFarmHandler(e);
      }}
    >
      <label htmlFor="name">Name of Farm</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <label htmlFor="address">Address</label>
      <input
        type="text"
        name="address"
        id="address"
        value={formatted_address}
        onChange={(e) => {
          setFormattedAddress(e.target.value);
        }}
      />
      <label htmlFor="rating">Rating</label>
      <input
        type="number"
        name="rating"
        id="rating"
        value={rating}
        onChange={(e) => {
          setRating(e.target.value);
        }}
      />
      <label htmlFor="website">website</label>
      <input
        type="text"
        name="website"
        id="website"
        value={website}
        onChange={(e) => {
          setWebsite(e.target.value);
        }}
      />
      <button className="CreateFarm">
        <i>C</i>
        <i>r</i>
        <i>e</i>
        <i>a</i>
        <i>t</i>
        <i>e</i>
        <i>&nbsp;</i>
        <i>F</i>
        <i>a</i>
        <i>r</i>
        <i>m</i>
      </button>
    </form>
  );
};

export default Post;
