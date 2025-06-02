import React, { useState } from "react";
import SupplierList from "../Component/SupplierList.jsx";

const SuppliersPage = () => {
  const [suppliers, setSuppliers] = useState([
    {
      id: 1,
      name: "Emmanuel & Sons Limited",
      contact: "emmasons@gmail.com",
      phone: "07043354678",
      status: "Active",
      address: "No 1, Balogun shopping plaza, Lagos",
    },
    {
      id: 2,
      name: "Alex Industrial Limited",
      contact: "alexindustrial@yahoo.com",
      phone: "09123456879",
      status: "Inactive",
      address: "Line B, Industrial Area, Abuja",
    },
  ]);
  const [showAdd, setShowAdd] = useState(false);
  const [newSupplier, setNewSupplier] = useState({
    name: "",
    contact: "",
    phone: "",
    status: "Active",
    address: "",
  });

  const handleChange = (e) => {
    setNewSupplier({ ...newSupplier, [e.target.name]: e.target.value });
  };

  const handleAddSupplier = (e) => {
    e.preventDefault();
    setSuppliers([
      ...suppliers,
      {
        ...newSupplier,
        id: suppliers.length + 1,
      },
    ]);
    setShowAdd(false);
    setNewSupplier({
      name: "",
      contact: "",
      phone: "",
      status: "Active",
      address: "",
    });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Suppliers</h1>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          onClick={() => setShowAdd(true)}
        >
          + Add Supplier
        </button>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <SupplierList suppliers={suppliers} />
      </div>
      {showAdd && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-lg font-bold mb-4">Add New Supplier</h2>
            <form onSubmit={handleAddSupplier} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Supplier Name"
                value={newSupplier.name}
                onChange={handleChange}
                className="w-full border rounded-md p-2"
                required
              />
              <input
                type="text"
                name="contact"
                placeholder="Contact Email"
                value={newSupplier.contact}
                onChange={handleChange}
                className="w-full border rounded-md p-2"
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={newSupplier.phone}
                onChange={handleChange}
                className="w-full border rounded-md p-2"
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={newSupplier.address}
                onChange={handleChange}
                className="w-full border rounded-md p-2"
                required
              />
              <select
                name="status"
                value={newSupplier.status}
                onChange={handleChange}
                className="w-full border rounded-md p-2"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
              <div className="flex justify-between">
                <button
                  type="button"
                  className="text-gray-500"
                  onClick={() => setShowAdd(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md"
                >
                  Add Supplier
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuppliersPage;
