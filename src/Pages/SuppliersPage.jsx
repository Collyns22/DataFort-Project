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
  const [selectedId, setSelectedId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newSupplier, setNewSupplier] = useState({
    name: "",
    contact: "",
    phone: "",
    status: "Active",
    address: "",
  });
  const [editFields, setEditFields] = useState({
    name: "",
    contact: "",
    phone: "",
    status: "Active",
    address: "",
  });

  // Handle input changes for add and edit
  const handleChange = (e) => {
    setNewSupplier({ ...newSupplier, [e.target.name]: e.target.value });
  };
  const handleEditFieldChange = (e) => {
    setEditFields({ ...editFields, [e.target.name]: e.target.value });
  };

  // Add supplier
  const handleAddSupplier = (e) => {
    e.preventDefault();
    setSuppliers([
      ...suppliers,
      {
        ...newSupplier,
        id: suppliers.length ? Math.max(...suppliers.map((s) => s.id)) + 1 : 1,
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

  // Remove supplier
  const handleRemoveSupplier = () => {
    setSuppliers((prev) => prev.filter((s) => s.id !== selectedId));
    setSelectedId(null);
    setIsEditing(false);
  };

  // Start editing
  const handleEditSupplier = () => {
    const supplier = suppliers.find((s) => s.id === selectedId);
    if (supplier) {
      setEditFields({
        name: supplier.name,
        contact: supplier.contact,
        phone: supplier.phone,
        status: supplier.status,
        address: supplier.address,
      });
      setIsEditing(true);
    }
  };

  // Save edit
  const handleSaveEdit = (e) => {
    e.preventDefault();
    setSuppliers((prev) =>
      prev.map((s) =>
        s.id === selectedId
          ? {
              ...s,
              name: editFields.name,
              contact: editFields.contact,
              phone: editFields.phone,
              status: editFields.status,
              address: editFields.address,
            }
          : s
      )
    );
    setIsEditing(false);
    setSelectedId(null);
  };

  // Cancel edit
  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  // Checkbox handler
  const handleCheckboxChange = (id) => {
    if (selectedId === id) {
      setSelectedId(null);
      setIsEditing(false);
    } else {
      setSelectedId(id);
      setIsEditing(false);
    }
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
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left"></th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Contact</th>
              <th className="py-3 px-6 text-left">Phone</th>
              <th className="py-3 px-6 text-left">Address</th>
              <th className="py-3 px-6 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {suppliers.map((supplier) => (
              <tr
                key={supplier.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left">
                  <input
                    type="checkbox"
                    checked={selectedId === supplier.id}
                    onChange={() => handleCheckboxChange(supplier.id)}
                    title="Select to edit or remove"
                  />
                </td>
                <td className="py-3 px-6 text-left">
                  {isEditing && selectedId === supplier.id ? (
                    <input
                      type="text"
                      name="name"
                      value={editFields.name}
                      onChange={handleEditFieldChange}
                      className="border rounded-md p-1 w-full"
                    />
                  ) : (
                    supplier.name
                  )}
                </td>
                <td className="py-3 px-6 text-left">
                  {isEditing && selectedId === supplier.id ? (
                    <input
                      type="text"
                      name="contact"
                      value={editFields.contact}
                      onChange={handleEditFieldChange}
                      className="border rounded-md p-1 w-full"
                    />
                  ) : (
                    supplier.contact
                  )}
                </td>
                <td className="py-3 px-6 text-left">
                  {isEditing && selectedId === supplier.id ? (
                    <input
                      type="text"
                      name="phone"
                      value={editFields.phone}
                      onChange={handleEditFieldChange}
                      className="border rounded-md p-1 w-full"
                    />
                  ) : (
                    supplier.phone
                  )}
                </td>
                <td className="py-3 px-6 text-left">
                  {isEditing && selectedId === supplier.id ? (
                    <input
                      type="text"
                      name="address"
                      value={editFields.address}
                      onChange={handleEditFieldChange}
                      className="border rounded-md p-1 w-full"
                    />
                  ) : (
                    supplier.address
                  )}
                </td>
                <td className="py-3 px-6 text-left">
                  {isEditing && selectedId === supplier.id ? (
                    <select
                      name="status"
                      value={editFields.status}
                      onChange={handleEditFieldChange}
                      className="border rounded-md p-1 w-full"
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  ) : (
                    supplier.status
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedId && !isEditing && (
        <div className="mt-4 flex justify-end gap-2">
          <button
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
            onClick={handleRemoveSupplier}
          >
            Remove Supplier
          </button>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            onClick={handleEditSupplier}
          >
            Edit Supplier
          </button>
        </div>
      )}
      {isEditing && (
        <div className="mt-4 flex justify-end gap-2">
          <button
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
            onClick={handleSaveEdit}
          >
            Save
          </button>
          <button
            className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition"
            onClick={handleCancelEdit}
          >
            Cancel
          </button>
        </div>
      )}
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
                  className="bg-blue-600 text-white px-4 py-2 rounded-md"
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
