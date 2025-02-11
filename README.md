# To-Do List React App

A simple and interactive to-do list application built with React. This app allows users to add, edit, and delete tasks, helping them stay organized and manage their daily tasks efficiently.

---

## Features
1. Add Tasks: Add new tasks to the list using the input field.
2. Edit Tasks: Edit existing tasks to update their content.
3. Delete Tasks: Remove tasks from the list when they are no longer needed.
4. Checkbox: Mark tasks as completed (optional functionality can be added later).

---

## Technologies Used
- React: A JavaScript library for building user interfaces.
- JavaScript: The programming language used for logic and functionality.
- CSS: For styling the components and layout.
- HTML: For structuring the app.

---

## How to Run the Project

Follow these steps to set up and run the project on your local machine.

### Step 1: Clone the Repository
Clone the repository to your local machine using the following command:
```bash
git clone https://github.com/your-username/your-repo-name.git
```

### Step 2: Navigate to the Project Directory
Move into the project directory:
```bash
cd your-repo-name
```

### Step 3: Install Dependencies
Install the required dependencies using npm or yarn:
```bash
npm install
```
or
```bash
yarn install
```

### Step 4: Start the Development Server
Run the app in development mode:
```bash
npm start
```
or
```bash
yarn start
```

### Step 5: Open the App in Your Browser
The app will automatically open in your default browser at:
```
http://localhost:3000
```

---

## Project Structure
Here’s an overview of the project structure:
```
todo-list/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Input.jsx
│   │   ├── ToDoItem.jsx
│   │   ├── ToDoList.jsx
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
├── package.json
├── README.md
```

---

## How to Use the App
1. Add a Task:
   - Type your task in the input field.
   - Click the + button to add it to the list.

2. Edit a Task:
   - Click the ✏️ (Edit) button next to the task you want to edit.
   - Update the task in the input field that appears.
   - Click the 💾 (Save) button to save your changes.

3. Delete a Task:
   - Click the 🗑️ (Delete) button next to the task you want to remove.

4. Mark as Completed (Optional):
   - Use the checkbox next to each task to mark it as completed.

---

## Code Overview

### 1. App Component (`App.js`)
- Manages the state for the list of tasks using `useState`.
- Passes the state and state-updating functions to child components.

### 2. Input Component (`Input.jsx`)
- Handles the input field for adding new tasks.
- Updates the main task list in the `App` component when a new task is added.

### 3. ToDoList Component (`ToDoList.jsx`)
- Renders the list of tasks.
- Handles the deletion and editing of tasks.

### 4. ToDoItem Component (`ToDoItem.jsx`)
- Displays each individual task.
- Provides buttons for editing and deleting tasks.



## Contributing
If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Please ensure your code follows the project's coding standards.
