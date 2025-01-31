import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post("/api/auth/logout");
      localStorage.removeItem("token");
      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          Finance Manager
        </Link>
        <div className="space-x-4">
          <Link to="/dashboard" className="text-white">
            Dashboard
          </Link>
          <button onClick={handleLogout} className="text-white">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;