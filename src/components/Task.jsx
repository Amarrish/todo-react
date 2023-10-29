import React, { useState } from "react";

const Task = ({ task, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.taskname);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
  
    onEdit({ ...task, taskname: editedTask });
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col md:mt-2 md:w-1/3 border bg-indigo-900 rounded text-yellow-400 justify-between px-6 py-10">
      {isEditing ? (
        <input
          type="text"
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
        />
      ) : (
        <h5>{task.taskname}</h5>
      )}
      <div className="flex">
        {isEditing ? (
          <button
            onClick={handleSaveClick}
            className="m-2 rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
          >
            Save
          </button>
        ) : (
          <button
            onClick={handleEditClick}
            className="m-2 rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => onDelete(task)}
          className="m-2 rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
