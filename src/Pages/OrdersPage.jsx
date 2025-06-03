import React, { useState } from "react";
import OrderTable from "../Component/OrderTable.jsx";

const OrdersPage = () => {
  const [showAddOrder, setShowAddOrder] = useState(false);
  const [orders, setOrders] = useState([
    {
      id: 1,
      productName: "Lg split-unit AC",
      category: "Electronics",
      orderDate: "2023-10-01",
      quantity: "30",
      totalAmount: "$150.00",
      status: "Pending",
    },
    {
      id: 2,
      productName: "Hp Laptop",
      category: "Computers",
      orderDate: "2023-10-02",
      quantity: "45",
      totalAmount: "$200.00",
      status: "Shipped",
    },
    {
      id: 3,
      productName: "Binatone Refrigerator",
      category: "Appliances",
      orderDate: "2023-10-03",
      quantity: "65",
      totalAmount: "$300.00",
      status: "Delivered",
    },
  ]);
  const [newOrder, setNewOrder] = useState({
    productName: "",
    category: "",
    orderDate: "",
    quantity: "",
    totalAmount: "",
    status: "Pending",
  });

  const handleChange = (e) => {
    setNewOrder({ ...newOrder, [e.target.name]: e.target.value });
  };

  const handleAddOrder = (e) => {
    e.preventDefault();
    setOrders([
      ...orders,
      {
        ...newOrder,
        id: orders.length + 1,
      },
    ]);
    setShowAddOrder(false);
    setNewOrder({
      productName: "",
      category: "",
      orderDate: "",
      quantity: "",
      totalAmount: "",
      status: "Pending",
    });
  };

  return (
    <div className="flex-1">
      <main className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Sales Orders</h1>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            onClick={() => setShowAddOrder(true)}
          >
            + Place Order
          </button>
        </div>
        <OrderTable orders={orders} setOrders={setOrders} />
        {showAddOrder && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
              <h2 className="text-lg font-bold mb-4">Add New Order</h2>
              <form onSubmit={handleAddOrder} className="space-y-4">
                <input
                  type="text"
                  name="productName"
                  placeholder="Product Name"
                  value={newOrder.productName}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2"
                  required
                />
                <input
                  type="text"
                  name="category"
                  placeholder="Category"
                  value={newOrder.category}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2"
                  required
                />
                <input
                  type="date"
                  name="orderDate"
                  placeholder="Order Date"
                  value={newOrder.orderDate}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2"
                  required
                />
                <input
                  type="number"
                  name="quantity"
                  placeholder="Quantity"
                  value={newOrder.quantity}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2"
                  required
                />
                <input
                  type="text"
                  name="totalAmount"
                  placeholder="Total Amount"
                  value={newOrder.totalAmount}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2"
                  required
                />
                <select
                  name="status"
                  value={newOrder.status}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2"
                >
                  <option value="Pending">Pending</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                </select>
                <div className="flex justify-between">
                  <button
                    type="button"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md"
                    onClick={() => setShowAddOrder(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md"
                  >
                    Place Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default OrdersPage;
