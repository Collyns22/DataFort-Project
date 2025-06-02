import React, { useState } from "react";
import Registration from "./Registration";

const TopBar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const [showUserMenu, setShowUserMenu] = useState(false); // Track avatar menu
  const [form, setForm] = useState({
    username: "",
    password: "",
    role: "user",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., authentication)
    setShowLogin(false);
    setIsLoggedIn(true); // Set user as logged in
  };

  // Function to open registration and close login
  const handleShowRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  // Function to close registration
  const handleCloseRegister = () => {
    setShowRegister(false);
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowUserMenu(false);
    // Optionally clear user data here
  };

  // Function to toggle user menu
  const handleAvatarClick = () => {
    setShowUserMenu((prev) => !prev);
  };

  // Optional: Close menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest("#user-avatar-btn") &&
        !event.target.closest("#user-menu-dropdown")
      ) {
        setShowUserMenu(false);
      }
    };
    if (showUserMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showUserMenu]);

  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-xl font-bold">Inventory Management</h1>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-md p-2"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Notifications
        </button>
        {!isLoggedIn && (
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md"
            onClick={() => setShowLogin(true)}
          >
            Login
          </button>
        )}
        {/* Login Modal */}
        {showLogin && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80">
              <h2 className="text-lg font-bold mb-4">Login</h2>
              <form onSubmit={handleLogin} className="space-y-4">
                <input
                  type="text"
                  name="username"
                  placeholder="Username or Email"
                  value={form.username}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2"
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2"
                  required
                />
                <select
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2"
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                  <option value="manager">Manager</option>
                </select>
                <div className="flex justify-between">
                  <button
                    type="button"
                    className="text-gray-500"
                    onClick={() => setShowLogin(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md"
                  >
                    Login
                  </button>
                </div>
                <div className="text-center mt-2">
                  <button
                    type="button"
                    className="text-blue-600 underline"
                    onClick={handleShowRegister}
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        {/* Registration Modal */}
        {showRegister && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
              <button
                className="absolute top-4 right-4 text-gray-500"
                onClick={handleCloseRegister}
              >
                &times;
              </button>
              <Registration />
            </div>
          </div>
        )}
        {isLoggedIn && (
          <div className="relative">
            <button
              id="user-avatar-btn"
              className="flex items-center"
              onClick={handleAvatarClick}
            >
              <img
                src="https://th.bing.com/th/id/OIP.idmKJ66Q5IXLXKxPXFy0twHaFj?cb=iwp2&rs=1&pid=ImgDetMain"
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
              />
            </button>
            {showUserMenu && (
              <div
                id="user-menu-dropdown"
                className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50"
              >
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Profile
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Settings
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={handleLogout}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBar;
