import React from 'react';
import { useNavigate } from 'react-router-dom';
import TaskForm from '../components/TaskForm';

const AddTaskPage = ({ onTaskAdded }) => {
    const navigate = useNavigate();

    const handleSuccess = () => {
        if (onTaskAdded) onTaskAdded();
        // Professional trick: Auto-navigate to the tasks list after adding!
        navigate('/tasks');
    };

    return (
        <div className="container" style={{ maxWidth: '800px' }}>
            <div className="glass" style={{ marginTop: '2rem', padding: '3rem' }}>
                <TaskForm onTaskAdded={handleSuccess} />
            </div>
        </div>
    );
};

export default AddTaskPage;
