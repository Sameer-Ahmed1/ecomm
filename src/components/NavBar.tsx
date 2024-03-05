import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-blue-500 p-6">
      <ul className="flex items-center justify-between">
        <li>
          <Link to="/" className="text-white">
            Home
          </Link>
        </li>
        {user ? (
          <>
            {/* <li>
              <Link to="/profile" className="text-white">
                Profile
              </Link>
            </li> */}
            <li>
              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <li>
            <Link
              to="/login"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
