import { FormEvent, useState } from "react";
import Farm from "../models/Farm";

interface Prop {
  newFarmProp: (newFarm: Farm) => void;
}

const Post = ({ newFarmProp }: Prop) => {
  const [name, setName] = useState("");
  const [formatted_address, setFormattedAddress] = useState("");
  const [rating, setRating] = useState("");
  const newFarmHandler = (e: FormEvent): void => {
    e.preventDefault();
    newFarmProp({
      name,
      formatted_address,
      rating: parseInt(rating),
    });
    setName("");
    setFormattedAddress("");
    setRating("");
  };
  return (
    <form
      className="Form"
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
      <button>Post new Farm</button>
    </form>
  );
};

export default Post;
