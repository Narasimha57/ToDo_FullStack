import { useState } from "react";
import React from "react";

const History = () => {
  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Todo History Log</h1>
      
      <div className="grid grid-cols-2 gap-4">
        <button 
          className="bg-green-500 text-white py-3 px-4 rounded hover:bg-green-600 font-medium"
        >
          Add
        </button>
        
        <button 
          className="bg-yellow-500 text-white py-3 px-4 rounded hover:bg-yellow-600 font-medium"
        >
          Edit
        </button>
        
        <button 
          className="bg-red-500 text-white py-3 px-4 rounded hover:bg-red-600 font-medium"
        >
          Delete
        </button>
        
        <button 
          className="bg-gray-500 text-white py-3 px-4 rounded hover:bg-gray-600 font-medium"
        >
          Clear History
        </button>
      </div>
    </div>
  );
};

export default History;
