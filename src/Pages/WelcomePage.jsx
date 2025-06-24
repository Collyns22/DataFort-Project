import React from "react";
import Registration from "../Component/Registration.jsx";

const WelcomePage = ({
  showLogin,
  setShowLogin,
  showRegister,
  form,
  handleChange,
  handleLogin,
  handleShowRegister,
  handleCloseRegister,
}) => (
  <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    <h1 className="text-4xl font-bold mb-6">Welcome to Inventory Management</h1>
    <button
      className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-700 transition"
      onClick={() => setShowLogin(true)}
    >
      Login to get started
    </button>

    {/* Login Modal */}
    {showLogin && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative">
          <button
            className="absolute top-2 right-2 text-gray-500 text-2xl"
            onClick={() => setShowLogin(false)}
            aria-label="Close"
          >
            &times;
          </button>
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
                className="bg-blue-600 text-white px-4 py-2 rounded-md"
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
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md relative">
          <button
            className="absolute top-4 right-4 text-gray-500 text-2xl"
            onClick={handleCloseRegister}
            aria-label="Close"
          >
            &times;
          </button>
          <Registration />
        </div>
      </div>
    )}
  </div>
);

export default WelcomePage;
