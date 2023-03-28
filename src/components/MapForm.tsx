import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MapForm.css";

const MapForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [food, setFood] = useState("");
  const [preference, setPreference] = useState("");
  const navigate = useNavigate();

  const handleFilterChange1 = (e: any) => {
    setFood(e.target.value);
  };
  const handleFilterChange2 = (e: any) => {
    setPreference(e.target.value);
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    // http://localhost:3000/?search-term=lentils
    navigate(
      `/map?${new URLSearchParams({
        "search-term": `${searchTerm}+${food}+${preference}`,
      })}`
    );

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
        <select name="filter" id="filter" onChange={handleFilterChange1}>
          <option value="">Select a fruit or vegetable</option>
          <option value="">Any</option>
          <optgroup label="Vegetables">
            <option value="corn">Corn</option>
            <option value="tomatoes">Tomatoes</option>
            <option value="lettuce">Lettuce</option>
            <option value="carrots">Carrots</option>
            <option value="broccoli">Broccoli</option>
            <option value="cabbage">Cabbage</option>
            <option value="cauliflower">Cauliflower</option>
            <option value="peppers">Peppers (bell, jalapeño, etc.)</option>
            <option value="onions">Onions</option>
            <option value="potatoes">Potatoes</option>
            <option value="zucchini">Zucchini</option>
            <option value="summer-squash">Squash (summer varieties)</option>
            <option value="winter-squash">Squash (winter varieties)</option>
            <option value="green-beans">Green beans</option>
            <option value="peas">Peas</option>
            <option value="eggplant">Eggplant</option>
            <option value="radishes">Radishes</option>
            <option value="spinach">Spinach</option>
            <option value="kale">Kale</option>
            <option value="swiss-chard">Swiss chard</option>
            <option value="beets">Beets</option>
          </optgroup>
          <optgroup label="Fruits">
            <option value="apples">Apples</option>
            <option value="oranges">Oranges</option>
            <option value="strawberries">Strawberries</option>
            <option value="blueberries">Blueberries</option>
            <option value="raspberries">Raspberries</option>
            <option value="blackberries">Blackberries</option>
            <option value="grapes">Grapes</option>
            <option value="peaches">Peaches</option>
            <option value="plums">Plums</option>
            <option value="pears">Pears</option>
            <option value="cherries">Cherries</option>
            <option value="watermelon">Watermelon</option>
            <option value="cantaloupe">Cantaloupe</option>
            <option value="honeydew">Honeydew melon</option>
            <option value="pineapple">Pineapple</option>
            <option value="mango">Mango</option>
            <option value="kiwi">Kiwi</option>
            <option value="bananas">Bananas</option>
            <option value="grapefruit">Grapefruit</option>
            <option value="lemons-limes">Lemons and limes</option>
          </optgroup>
        </select>
        <select
          name="preference"
          id="preference"
          onChange={handleFilterChange2}
        >
          <option value="organic">Organic</option>
          <option value="non-gmo">Non-gmo</option>
        </select>
      </div>

      <button>Submit</button>
    </form>
  );
};

export default MapForm;
