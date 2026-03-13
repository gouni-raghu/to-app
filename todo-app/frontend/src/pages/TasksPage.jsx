import React from 'react';
import TaskList from '../components/TaskList';

const TasksPage = ({ reloadTasks }) => {
    return (
        <div className="container">
            <div className="glass" style={{ marginTop: '2rem' }}>
                <h2 style={{ marginBottom: '1.5rem' }}>Your Tasks</h2>
                <TaskList reloadTasks={reloadTasks} />
            </div>
        </div>
    );
};

export default TasksPage;
