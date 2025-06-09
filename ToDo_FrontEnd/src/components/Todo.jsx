import React, { useState } from "react";

const Todo = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;

    if (editIndex !== null) {
      // Update existing todo
      const updatedTodos = todos.map((todo, index) =>
        index === editIndex ? task : todo
      );
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      // Add new todo
      setTodos([...todos, task]);
    }

    setTask("");
  };

  const deleteHandler = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    // Cancel edit mode if the item being edited is deleted
    if (index === editIndex) {
      setEditIndex(null);
      setTask("");
    }
  };

  const editHandler = (index) => {
    setTask(todos[index]);
    setEditIndex(index);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
          WELCOME
        </h3>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="text"
            value={task}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your task"
          />
          <button
            type="submit" 
            disabled={task.trim() === ""}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md disabled:bg-blue-300 w-full"
          >
            {editIndex !== null ? "Update Todo" : "Add Todo"}
          </button>
        </form>
        <div className="mt-6">
          {todos.length === 0 ? (
            <p className="text-gray-500 text-center">No tasks added yet!</p>
          ) : (
            todos.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gray-100 p-3 my-2 rounded-md"
              >
                <span className="text-gray-700">{item}</span>
                <div className="space-x-2">
                  <button
                    onClick={() => editHandler(index)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded-md text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteHandler(index)}
                    className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-md text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
