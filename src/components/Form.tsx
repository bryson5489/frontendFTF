import React, { FormEvent, useState } from "react";
import "./Form.css";

const Form = () => {
  const [farm, setFarms] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [rating, setRating] = useState("");
  const newFarmHandler = (e: FormEvent): void => {
    e.preventDefault();
    setName("");
    setAddress("");
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
          setName(name);
        }}
      />
      <label htmlFor="address">Address</label>
      <input
        type="text"
        name="address"
        id="address"
        value={address}
        onChange={(e) => {
          setAddress(address);
        }}
      />
      <label htmlFor="rating">Rating</label>
      <input
        type="text"
        name="rating"
        id="rating"
        value={rating}
        onChange={(e) => {
          setRating(rating);
        }}
      />
    </form>
  );
};

export default Form;
