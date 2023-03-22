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
      <div className="input-container">
        <input
          placeholder="Enter Text"
          className="input-field"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <label htmlFor="input-field" className="input-label">
          Enter city, state
        </label>
        <span className="input-highlight"></span>
      </div>

      <button>Submit</button>
    </form>
  );
};

export default MapForm;
