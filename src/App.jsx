import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import ToDolist from "./components/ToDoList";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState([]);

  return (
    <>
      <Header />
      <Input inputValue={inputValue} setInputValue={setInputValue} />
      <ToDolist inputValue={inputValue} setInputValue={setInputValue} />
    </>
  );
}

export default App;