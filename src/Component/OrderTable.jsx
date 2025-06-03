import React, { useState } from "react";

const OrderTable = ({ orders, setOrders }) => {
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editFields, setEditFields] = useState({
    productName: "",
    category: "",
    orderDate: "",
    quantity: "",
    totalAmount: "",
    status: "",
  });

  const handleCheckboxChange = (orderId) => {
    if (selectedOrderId === orderId) {
      setSelectedOrderId(null);
      setIsEditing(false);
    } else {
      setSelectedOrderId(orderId);
      setIsEditing(false);
    }
  };

  const handleRemoveOrder = () => {
    setOrders((prev) => prev.filter((order) => order.id !== selectedOrderId));
    setSelectedOrderId(null);
    setIsEditing(false);
  };

  const handleEditOrder = () => {
    const orderToEdit = orders.find((order) => order.id === selectedOrderId);
    if (orderToEdit) {
      setEditFields({
        productName: orderToEdit.productName,
        category: orderToEdit.category,
        orderDate: orderToEdit.orderDate,
        quantity: orderToEdit.quantity,
        totalAmount: orderToEdit.totalAmount,
        status: orderToEdit.status,
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
    setOrders((prev) =>
      prev.map((order) =>
        order.id === selectedOrderId
          ? {
              ...order,
              productName: editFields.productName,
              category: editFields.category,
              orderDate: editFields.orderDate,
              quantity: editFields.quantity,
              totalAmount: editFields.totalAmount,
              status: editFields.status,
            }
          : order
      )
    );
    setIsEditing(false);
    setSelectedOrderId(null);
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
            <th className="py-3 px-6 text-left">Order ID</th>
            <th className="py-3 px-6 text-left">Product Name</th>
            <th className="py-3 px-6 text-left">Category</th>
            <th className="py-3 px-6 text-left">Order Date</th>
            <th className="py-3 px-6 text-left">Quantity</th>
            <th className="py-3 px-6 text-left">Total Amount</th>
            <th className="py-3 px-6 text-left">Status</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {orders.map((order) => (
            <tr
              key={order.id}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6">
                <input
                  type="checkbox"
                  checked={selectedOrderId === order.id}
                  onChange={() => handleCheckboxChange(order.id)}
                  title="Check to remove or edit"
                />
              </td>
              <td className="py-3 px-6">{order.id}</td>
              <td className="py-3 px-6">
                {isEditing && selectedOrderId === order.id ? (
                  <input
                    type="text"
                    name="productName"
                    value={editFields.productName}
                    onChange={handleEditFieldChange}
                    className="border rounded-md p-1 w-full"
                  />
                ) : (
                  order.productName
                )}
              </td>
              <td className="py-3 px-6">
                {isEditing && selectedOrderId === order.id ? (
                  <input
                    type="text"
                    name="category"
                    value={editFields.category}
                    onChange={handleEditFieldChange}
                    className="border rounded-md p-1 w-full"
                  />
                ) : (
                  order.category
                )}
              </td>
              <td className="py-3 px-6">
                {isEditing && selectedOrderId === order.id ? (
                  <input
                    type="date"
                    name="orderDate"
                    value={editFields.orderDate}
                    onChange={handleEditFieldChange}
                    className="border rounded-md p-1 w-full"
                  />
                ) : (
                  order.orderDate
                )}
              </td>
              <td className="py-3 px-6">
                {isEditing && selectedOrderId === order.id ? (
                  <input
                    type="number"
                    name="quantity"
                    value={editFields.quantity}
                    onChange={handleEditFieldChange}
                    className="border rounded-md p-1 w-full"
                  />
                ) : (
                  order.quantity
                )}
              </td>
              <td className="py-3 px-6">
                {isEditing && selectedOrderId === order.id ? (
                  <input
                    type="text"
                    name="totalAmount"
                    value={editFields.totalAmount}
                    onChange={handleEditFieldChange}
                    className="border rounded-md p-1 w-full"
                  />
                ) : (
                  order.totalAmount
                )}
              </td>
              <td className="py-3 px-6">
                {isEditing && selectedOrderId === order.id ? (
                  <select
                    name="status"
                    value={editFields.status}
                    onChange={handleEditFieldChange}
                    className="border rounded-md p-1 w-full"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                ) : (
                  order.status
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedOrderId && !isEditing && (
        <div className="mt-4 flex justify-end gap-2">
          <button
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
            onClick={handleRemoveOrder}
          >
            Remove Order
          </button>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            onClick={handleEditOrder}
          >
            Edit Order
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

export default OrderTable;
