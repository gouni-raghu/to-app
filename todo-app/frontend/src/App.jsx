import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [reloadTasks, setReloadTasks] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showTaskList, setShowTaskList] = useState(false);

  const handleTaskAdded = () => {
    setReloadTasks(!reloadTasks);
    setShowForm(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Todo App</h1>

      <button
        onClick={() => setShowForm(!showForm)}
        style={{
          marginBottom: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: showForm ? "#f44336" : "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        {showForm ? "Cancel" : "Add Task"}
      </button>

      {showForm && <TaskForm onTaskAdded={handleTaskAdded} />}

      <br />

      <button
        onClick={() => setShowTaskList(!showTaskList)}
        style={{
          marginBottom: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: showTaskList ? "#f44336" : "#2196F3",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        {showTaskList ? "Hide Task List" : "Show Task List"}
      </button>

      {showTaskList && <TaskList reloadTasks={reloadTasks} />}

    </div>
  );
}

export default App;