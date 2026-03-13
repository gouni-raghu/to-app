import React, { useState } from "react";
import { createTask } from "../services/taskService";

function TaskForm({ onTaskAdded }) {
    // 1. We added state for Title, Description, Date, and now CATEGORY!
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [category, setCategory] = useState("General"); // New state!

    const handleSubmit = async () => {
        // 2. We put all the values into one 'task' object
        const task = {
            title: title,
            description: description,
            date: date,
            category: category // Added category here
        };

        await createTask(task);

        // 3. Reset the form to empty after adding
        setTitle("");
        setDescription("");
        setDate("");
        setCategory("General");

        if (onTaskAdded) {
            onTaskAdded();
        }

        alert("Task Added!");
    };

    return (
        <div className="task-form">
            <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Create New Task</h2>

            {/* Title Group */}
            <div className="form-group">
                <label className="form-label">Task Title</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="e.g., Design System Update"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>

            {/* Description Group */}
            <div className="form-group">
                <label className="form-label">Description</label>
                <textarea
                    className="form-control"
                    placeholder="What needs to be done?"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows="3"
                    style={{ resize: 'none' }}
                />
            </div>

            {/* Row for Date and Category */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                    <label className="form-label">Due Date</label>
                    <input
                        type="date"
                        className="form-control"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Category</label>
                    <select
                        className="form-control"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="General">General</option>
                        <option value="Work">Work</option>
                        <option value="Personal">Personal</option>
                        <option value="Urgent">Urgent</option>
                    </select>
                </div>
            </div>

            <button
                onClick={handleSubmit}
                style={{ width: '100%', marginTop: '1rem', padding: '1rem' }}
            >
                Add Task to List
            </button>
        </div>
    );
}

export default TaskForm;
