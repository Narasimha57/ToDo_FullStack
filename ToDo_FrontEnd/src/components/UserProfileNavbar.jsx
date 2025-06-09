import React, {useState, useReducer, useRef, useEffect} from "react";
import { Home, Clock, LogOut, User } from "lucide-react";
import { Link } from "react-router-dom";

const UserProfileNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-blue-600 text-xl font-bold">TODO</span>
            </div>
          </div>

          {/* Profile Icon with Dropdown */}
          <div className="flex items-center">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-blue-300"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors">
                  <User className="h-6 w-6" />
                </div>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Link
                      to={'/'}
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <Home className="mr-2 h-5 w-5" />
                      <span>Home</span>
                    </Link>
                    <Link
                      to={'/history'}
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <Clock className="mr-2 h-5 w-5" />
                      <span>History</span>
                    </Link>
                    <div className="border-t border-gray-200"></div>
                    <Link
                      to={'/signup'}
                      className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      <LogOut className="mr-2 h-5 w-5" />
                      <span>Logout</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default UserProfileNavbar;