import React, { useState } from 'react';
import Task from './component/Task';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingTask, setEditingTask] = useState(null);

  const addTask = () => {
    if (newTask.trim() === '') return;

    const task = {
      id: tasks.length + 1,
      name: newTask,
      completed: false,
    };

    setTasks([...tasks, task]);
    setNewTask('');
  };

  const completeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const editTask = (taskId) => {
    const task = tasks.find(task => task.id === taskId);
    setEditingTask(task);
    setNewTask(task.name);
  };
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id!== taskId));
  };
  
  const updateTask = () => {
    setTasks(tasks.map(task =>
      task.id === editingTask.id ? { ...task, name: newTask } : task
    ));
    setEditingTask(null);
    setNewTask('');
  };


  return (
    <>
      <div className="flex flex-col items-center bg-slate-600 p-5 font-extrabold">
        <h1 className="text-4xl font-extrabold mb-4">Todo-List</h1>

        <div className="mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter a new task"
            className="border rounded px-3 py-2"
          />
          <button
            onClick={editingTask ? updateTask : addTask}
            className="ml-2 bg-red-500 text-black rounded px-4 py-2"
          >
            {editingTask ? 'Update Task' : 'Add Task'}
          </button>
        </div>

        <ul className="list-none">
          {tasks.map(task => (
            <Task
              key={task.id}
              task={task}
              onComplete={completeTask}
              onEdit={editTask}
              onDelete={deleteTask}
            />
          ))}
        </ul>
      </div>
    </>
  );
}


export default App;