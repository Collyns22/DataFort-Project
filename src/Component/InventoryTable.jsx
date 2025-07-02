import React, { useState } from "react";

const getStatus = (stock) => {
  if (stock === 0) return "Out of Stock";
  if (stock < 50) return "Low Stock";
  if (stock >= 50) return "In Stock";
  return "Low Stock";
};

const InventoryTable = ({ inventoryItems, setInventoryItems }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editFields, setEditFields] = useState({
    name: "",
    category: "",
    stock: "",
    price: "",
    supplier: "",
  });

  const handleCheckboxChange = (id) => {
    if (selectedId === id) {
      setSelectedId(null);
      setIsEditing(false);
    } else {
      setSelectedId(id);
      setIsEditing(false);
    }
  };

  const handleRemove = () => {
    setInventoryItems((prev) => prev.filter((item) => item.id !== selectedId));
    setSelectedId(null);
    setIsEditing(false);
  };

  const handleEdit = () => {
    const itemToEdit = inventoryItems.find((item) => item.id === selectedId);
    if (itemToEdit) {
      setEditFields({
        name: itemToEdit.name,
        category: itemToEdit.category,
        stock: itemToEdit.stock,
        price: itemToEdit.price,
        supplier: itemToEdit.supplier,
      });
      setIsEditing(true);
    }
  };

  const handleEditFieldChange = (e) => {
    const { name, value } = e.target;
    setEditFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    setInventoryItems((prev) =>
      prev.map((item) =>
        item.id === selectedId
          ? {
              ...item,
              name: editFields.name,
              category: editFields.category,
              stock: Number(editFields.stock),
              price: Number(editFields.price),
              supplier: editFields.supplier,
            }
          : item
      )
    );
    setIsEditing(false);
    setSelectedId(null);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left"></th>
            <th className="py-3 px-6 text-left">Product Image</th>
            <th className="py-3 px-6 text-left">SKU</th>
            <th className="py-3 px-6 text-left">Product Name</th>
            <th className="py-3 px-6 text-left">Category</th>
            <th className="py-3 px-6 text-left">Stock Quantity</th>
            <th className="py-3 px-6 text-left">Unit Price</th>
            <th className="py-3 px-6 text-left">Supplier</th>
            <th className="py-3 px-6 text-left">Status</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {inventoryItems.map((item) => (
            <tr
              key={item.id}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6 text-left">
                <input
                  type="checkbox"
                  checked={selectedId === item.id}
                  onChange={() => handleCheckboxChange(item.id)}
                  title="Select to remove or edit"
                />
              </td>
              <td className="py-3 px-6 text-left">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover"
                />
              </td>
              <td className="py-3 px-6 text-left">{item.sku}</td>
              <td className="py-3 px-6 text-left">
                {isEditing && selectedId === item.id ? (
                  <input
                    type="text"
                    name="name"
                    value={editFields.name}
                    onChange={handleEditFieldChange}
                    className="border rounded-md p-1 w-full"
                  />
                ) : (
                  item.name
                )}
              </td>
              <td className="py-3 px-6 text-left">
                {isEditing && selectedId === item.id ? (
                  <input
                    type="text"
                    name="category"
                    value={editFields.category}
                    onChange={handleEditFieldChange}
                    className="border rounded-md p-1 w-full"
                  />
                ) : (
                  item.category
                )}
              </td>
              <td className="py-3 px-6 text-left">
                {isEditing && selectedId === item.id ? (
                  <input
                    type="number"
                    name="stock"
                    value={editFields.stock}
                    onChange={handleEditFieldChange}
                    className="border rounded-md p-1 w-full"
                  />
                ) : (
                  item.stock
                )}
              </td>
              <td className="py-3 px-6 text-left">
                {isEditing && selectedId === item.id ? (
                  <input
                    type="number"
                    name="price"
                    value={editFields.price}
                    onChange={handleEditFieldChange}
                    className="border rounded-md p-1 w-full"
                  />
                ) : (
                  `$${Number(item.price).toFixed(2)}`
                )}
              </td>
              <td className="py-3 px-6 text-left">
                {isEditing && selectedId === item.id ? (
                  <input
                    type="text"
                    name="supplier"
                    value={editFields.supplier}
                    onChange={handleEditFieldChange}
                    className="border rounded-md p-1 w-full"
                  />
                ) : (
                  item.supplier
                )}
              </td>
              <td className="py-3 px-6 text-left">
                {getStatus(Number(item.stock))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedId && !isEditing && (
        <div className="mt-4 flex justify-end gap-2">
          <button
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
            onClick={handleRemove}
          >
            Remove Item
          </button>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            onClick={handleEdit}
          >
            Edit Item
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
    </div>
  );
};

export default InventoryTable;
