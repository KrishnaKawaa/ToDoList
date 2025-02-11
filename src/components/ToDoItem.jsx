import "./ToDoItem.css";
import { useState } from "react";

export default function ToDoItem({ inputValue, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(inputValue);
  const [isChecked, setIsChecked] = useState(false);

  const handleEditClick = () => {
    if (isEditing) {
      onEdit(editedValue); // Save the edited value
    }
    setIsEditing(!isEditing); // Toggle edit mode
  };



  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="item-container">
      <div className="checkbox-container" 
        style={{
        backgroundColor: isChecked ? 'lightgreen' : 'none',
      }}>
        <input type="checkbox" checked={isChecked} onClick={handleCheckboxChange} className="checkbox" />
        {isEditing ? (
          <input
            type="text"
            value={editedValue}
            onChange={(e) => setEditedValue(e.target.value)}
            className="edit-input"
          />
        ) : (
          <p>{inputValue}</p>
        )}
      </div>

      <div className="button-container">
        <button className="delete-button" onClick={onDelete}>
          🗑️
        </button>
        <button className="edit-button" onClick={handleEditClick}>
          {isEditing ? "💾" : "✏️"} {/* Change button icon based on edit mode */}
        </button>
      </div>
    </div>
  );
}