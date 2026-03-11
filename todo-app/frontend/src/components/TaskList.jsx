import React, { useEffect, useState } from "react";
import { getTasks, deleteTask, markTaskDone, updateTask } from "../services/taskService";

function TaskList() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const data = await getTasks();
        setTasks(data);
    };

    const handleDelete = async (id) => {
        await deleteTask(id);
        fetchTasks();
    };

    const handleDone = async (id) => {
        await markTaskDone(id);
        fetchTasks();
    };

    const handleEdit = async (task) => {

        const newTitle = prompt("Enter new title", task.title);
        const newDescription = prompt("Enter new description", task.description);

        if (!newTitle || !newDescription) return;

        await updateTask(task.id, {
            title: newTitle,
            description: newDescription
        });

        fetchTasks();
    };

    return (
        <div>

            <h3>Task List</h3>

            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>

                        {task.title} - {task.status}

                        <button onClick={() => handleDone(task.id)}>
                            Done
                        </button>

                        <button onClick={() => handleEdit(task)}>
                            Edit
                        </button>

                        <button onClick={() => handleDelete(task.id)}>
                            Delete
                        </button>

                    </li>
                ))}
            </ul>

        </div>
    );
}

export default TaskList;