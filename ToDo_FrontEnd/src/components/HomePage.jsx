import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-white p-4">
      <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Welcome to ToDo-List
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-8 font-semibold">
            Start your journey by using TODO by writing your Thoughts
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
            <Link to={'/signup'} className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md">
              Sign Up
            </Link>
            <Link to={'/login'} className="w-full sm:w-auto px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-300 shadow-md">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
