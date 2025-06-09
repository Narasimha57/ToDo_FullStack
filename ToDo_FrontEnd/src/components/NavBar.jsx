import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left Side - Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <Link to="/">TODO</Link>
        </div>

        {/* Right Side - Menu */}
        <div className="space-x-4">
          <Link
            to="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
