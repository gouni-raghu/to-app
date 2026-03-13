import React, { useEffect, useState } from "react";
import { getTasks, deleteTask, markTaskDone, updateTask } from "../services/taskService";

function TaskList({ reloadTasks }) {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, [reloadTasks]);

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

    // Helper to get the correct badge class
    const getBadgeClass = (category) => {
        const cat = (category || 'general').toLowerCase();
        if (cat === 'work') return 'badge-work';
        if (cat === 'personal') return 'badge-personal';
        if (cat === 'urgent') return 'badge-urgent';
        return 'badge-general';
    };

    return (
        <div className="task-container">
            {tasks.length === 0 ? (
                <div className="glass" style={{ textAlign: 'center', padding: '3rem' }}>
                    <p style={{ color: 'var(--text-muted)' }}>No tasks found. Create one to get started!</p>
                </div>
            ) : (
                <div className="task-grid">
                    {tasks.map((task) => (
                        <div key={task.id} className="glass task-card">
                            <div className="task-header">
                                <span className={`badge ${getBadgeClass(task.category)}`}>
                                    {task.category || 'General'}
                                </span>
                                <h3>{task.title}</h3>
                            </div>

                            <p>{task.description || "No description provided."}</p>

                            <div className="task-footer">
                                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                    {task.date ? `📅 ${task.date}` : "No date"}
                                </span>

                                <div className="task-actions">
                                    <button
                                        className="btn-done"
                                        onClick={() => handleDone(task.id)}
                                        title="Mark as Done"
                                    >
                                        ✓
                                    </button>
                                    <button
                                        className="btn-edit"
                                        onClick={() => handleEdit(task)}
                                        title="Edit Task"
                                    >
                                        ✎
                                    </button>
                                    <button
                                        className="btn-delete"
                                        onClick={() => handleDelete(task.id)}
                                        title="Delete Task"
                                    >
                                        🗑
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default TaskList;