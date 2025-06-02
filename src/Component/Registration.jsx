import React, { useState } from "react";

const Registration = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "user",
    gender: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here (e.g., API call)
    setSubmitted(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        {submitted ? (
          <div className="text-green-600 text-center mb-4">
            Registration successful!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 font-medium" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border rounded-md p-2"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full border rounded-md p-2"
                placeholder="Enter your password"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="role">
                Role
              </label>
              <select
                name="role"
                id="role"
                value={form.role}
                onChange={handleChange}
                className="w-full border rounded-md p-2"
                required
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
                <option value="manager">Manager</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="gender">
                Gender
              </label>
              <select
                name="gender"
                id="gender"
                value={form.gender}
                onChange={handleChange}
                className="w-full border rounded-md p-2"
                required
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Registration;
