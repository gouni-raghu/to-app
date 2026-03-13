import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Add this!
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import AboutPage from "./pages/aboutpages";
import TasksPage from "./pages/TasksPage";
import Navbar from "./components/Navbar";

function App() {
  const [reloadTasks, setReloadTasks] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleTaskAdded = () => {
    setReloadTasks(!reloadTasks);
    setShowForm(false);
  };

  return (
    <Router>
      <div className="container" style={{ padding: "40px 20px" }}>
        <Navbar />

        <Routes>
          <Route path="/" element={
            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
              <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>Welcome to TaskMaster</h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.5rem', marginBottom: '3rem' }}>
                Manage your day with professional precision.
              </p>

              <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                {showForm ? (
                  <div className="glass">
                    <TaskForm onTaskAdded={handleTaskAdded} />
                    <button
                      onClick={() => setShowForm(false)}
                      style={{ marginTop: '1rem', background: 'transparent', border: '1px solid var(--text-muted)' }}
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button onClick={() => setShowForm(true)} style={{ fontSize: '1.2rem', padding: '1rem 2.5rem' }}>
                    Create New Task
                  </button>
                )}
              </div>
            </div>
          } />

          <Route path="/tasks" element={<TasksPage reloadTasks={reloadTasks} />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;