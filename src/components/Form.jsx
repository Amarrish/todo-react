import React, { useState } from 'react';

const Form = ({ addTask }) => {
  const [inputValue, setInputValue] = useState({taskname:''});


  const handlechange = (e) =>{
    const  {name, value} = e.target
    setInputValue({...inputValue, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(inputValue);
    setInputValue({ taskname: "" });
  };

  return (
    <div className="sm:rounded-lg w-full md:w-auto border border-gray-900/25">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row gap-5 col-span-full mt-2 justify-center px-6 py-10">
          <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900 sm:w-1/4">
            Add Task:
          </label>
          <input
            onChange={handlechange}
            value={inputValue.taskname}
            type="text"
            name='taskname'
            
            className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full sm:w-3/4"
            placeholder="Task Name"
          />

          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
