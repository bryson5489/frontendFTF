import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MapForm.css";

const MapForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    // http://localhost:3000/?search-term=lentils
    navigate(`/map?${new URLSearchParams({ "search-term": searchTerm })}`);
    setSearchTerm("");
  };

  return (
    <form className="MapForm" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="searchTerm">What is your city, state?</label>
      <input
        type="text"
        name="searchTerm"
        id="searchTerm"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};

export default MapForm;
