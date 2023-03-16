
import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <form className="Form">
      <label htmlFor="name">Name of Farm</label>
      <input type="text" name="name" id="name" />
    </form>
  );
};

export default Form;
