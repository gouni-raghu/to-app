import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [reloadTasks, setReloadTasks] = useState(false);

  const handleTaskAdded = () => {
    setReloadTasks(!reloadTasks);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Todo App</h1>

      <TaskForm onTaskAdded={handleTaskAdded} />

      <TaskList reloadTasks={reloadTasks} />

    </div>
  );
}

export default App;