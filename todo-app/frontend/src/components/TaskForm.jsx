import React, { useState } from "react";
import { createTask } from "../services/taskService";

function TaskForm({ onTaskAdded }) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = async () => {

        const task = {
            title: title,
            description: description,
            date: date
        };

        await createTask(task);

        setTitle("");
        setDescription("");
        setDate("");

        if (onTaskAdded) {
            onTaskAdded();
        }

        alert("Task Added!");
    };

    return (
        <div>
            <h3>Add Task</h3>

            <input
                type="text"
                placeholder="Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <br /><br />

            <input
                type="text"
                placeholder="Task Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <br /><br />

            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />

            <br /><br />

            <button onClick={handleSubmit}>Add Task</button>

        </div>
    );
}

export default TaskForm;