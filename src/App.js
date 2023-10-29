import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Task from './components/Task';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
  
    const newTaskWithId = { ...newTask, id: Date.now() }; 
  
    setTasks([...tasks, newTaskWithId]);
  };
  
  const onEdit = (editedTask) => {
    const updatedTasks = [...tasks];
    const taskIndex = updatedTasks.findIndex((task) => task.id === editedTask.id);
    if (taskIndex !== -1) {
      updatedTasks[taskIndex] = { ...updatedTasks[taskIndex], taskname: editedTask.taskname };
      setTasks(updatedTasks);
    }
  };

  const onDelete = (taskToDelete) => {
    const updatedTasks = [...tasks];
    const taskIndex = updatedTasks.findIndex((task) => task.id === taskToDelete.id);
    if (taskIndex !== -1) {
      updatedTasks.splice(taskIndex, 1);
      setTasks(updatedTasks);
    }
  };

  return (
    <>
      <div class='flex items-center w-full justify-center h-auto'>
        <Form addTask={addTask} />
      </div>

      <div class='flex flex-wrap items-center w-full justify-center h-auto'>
        {tasks.map((task, index) => (
          <Task task={task} onEdit={onEdit} onDelete={onDelete} key={index} index={index} />
        ))}
      </div>
    </>
  );
}

export default App;
