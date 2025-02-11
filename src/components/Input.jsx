import "./Input.css";
import { useState } from "react";

function Input({ inputValue, setInputValue }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    if (input.trim()) {
      setInputValue([...inputValue, input]); // Add new item to list
      setInput(""); // Clear input field
    }
  };

  return (
    <div className="input-box">
      <input
        type="text"
        placeholder="Add List Items"
        className="input"
        value={input}
        onChange={handleChange}
      />
      <button className="add-button" type="button" onClick={handleSubmit}>
        +
      </button>
    </div>
  );
}

export default Input;