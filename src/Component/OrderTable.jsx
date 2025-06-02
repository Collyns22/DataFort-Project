import React, { useState } from "react";

const OrderTable = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      productName: "Lg split-unit AC",
      category: "Electronics",
      orderDate: "2023-10-01",
      quantity: "30",
      totalAmount: "$150.00",
    },
    {
      id: 2,
      productName: "Hp Laptop",
      category: "Computers",
      orderDate: "2023-10-02",
      quantity: "45",
      totalAmount: "$200.00",
    },
    {
      id: 3,
      productName: "Binatone Refrigerator",
      category: "Appliances",
      orderDate: "2023-10-03",
      quantity: "65",
      totalAmount: "$300.00",
    },
  ]);

  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const handleRadioChange = (orderId) => {
    setSelectedOrderId(orderId);
  };

  const handleRemoveOrder = () => {
    setOrders((prev) => prev.filter((order) => order.id !== selectedOrderId));
    setSelectedOrderId(null);
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
                  type="radio"
                  name="removeOrder"
                  checked={selectedOrderId === order.id}
                  onChange={() => handleRadioChange(order.id)}
                  title="Check to remove"
                />
              </td>
              <td className="py-3 px-6">{order.id}</td>
              <td className="py-3 px-6">{order.productName}</td>
              <td className="py-3 px-6">{order.category}</td>
              <td className="py-3 px-6">{order.orderDate}</td>
              <td className="py-3 px-6">{order.quantity}</td>
              <td className="py-3 px-6">{order.totalAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedOrderId && (
        <div className="mt-4 flex justify-end">
          <button
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
            onClick={handleRemoveOrder}
          >
            Remove Selected Order
          </button>
        </div>
      )}
    </div>
  );
};

export default OrderTable;
