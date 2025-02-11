import ToDoItem from "./ToDoItem";
import "./ToDoList.css";

export default function ToDolist({ inputValue, setInputValue }) {
  const handleDelete = (index) => {
  const newList = inputValue.filter((_, i) => i !== index); // Removeing the item at the specified index
    setInputValue(newList);
  };

  const handleEdit = (index, newValue) => {
    const newList = [...inputValue];
    newList[index] = newValue; // Updatnig the item at the specified index
    setInputValue(newList);
  };

  return (
    <div className="list-box">
      <ul>
        {inputValue.map((item, index) => (
          <ToDoItem
            key={index}
            inputValue={item}
            onDelete={() => handleDelete(index)}
            onEdit={(newValue) => handleEdit(index, newValue)}
          />
        ))}
      </ul>
    </div>
  );
}