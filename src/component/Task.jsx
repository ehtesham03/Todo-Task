import React from 'react';

const Task = ({ task, onComplete, onEdit, onDelete }) => {
    const handleComplete = () => {
        if (window.confirm(`Is the task ${task.name} completed?`)) {
            onComplete(task.id);
        }
    };

    const handleEdit = () => {
        onEdit(task.id);
    };
    const handleDel = () => {
        if (window.confirm(`Are you sure you want to delete task ${task.name}?`)) {
            onDelete(task.id);
        }
    };
    return (
        <li className="flex justify-between items-center p-2 cursor-pointer text-black gap-10">
            <span onClick={handleComplete}>
                {task.name}
            </span>
            <button 
                onClick={handleEdit} 
                className="bg-red-500 text-red- rounded px-2 py-1 ml-4 font-extrabold"
            >
                Edit
            </button>
            <button 
                onClick={handleDel} 
                className="bg-red-500 text-red- rounded px-2 py-1 ml-4 font-extrabold"
            >
                Delete
            </button>
        </li>
    );
};

export default Task;