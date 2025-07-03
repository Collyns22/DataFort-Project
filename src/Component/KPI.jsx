import React from "react";

const KPI = ({ inventoryItems = [], orders = [] }) => {
  // Calculate total inventory value
  const totalInventoryValue = inventoryItems.reduce(
    (sum, item) => sum + Number(item.price) * Number(item.stock),
    0
  );

  // Number of products
  const numberOfProducts = inventoryItems.length;

  // Low stock alerts (stock < 20)
  const lowStockAlerts = inventoryItems.filter(
    (item) => Number(item.stock) < 20
  ).length;

  // Pending orders from the orders table (status === "Pending")
  const pendingOrders = orders.filter(
    (order) => order.status && order.status.toLowerCase() === "pending"
  ).length;

  // Total sales: sum of (totalAmount * quantity) for orders with status "shipped" or "Delivered"
  const totalSales = orders
    .filter(
      (order) =>
        order.status &&
        (order.status.toLowerCase() === "shipped" ||
          order.status.toLowerCase() === "delivered")
    )
    .reduce((sum, order) => {
      const amount = Number(String(order.totalAmount).replace(/[$,]/g, ""));
      const quantity = Number(order.quantity) || 1;
      return sum + amount * quantity;
    }, 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold">Total Inventory Value</h2>
        <p className="text-2xl font-bold">
          $
          {totalInventoryValue.toLocaleString(undefined, {
            minimumFractionDigits: 2,
          })}
        </p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold">Number of Products</h2>
        <p className="text-2xl font-bold">{numberOfProducts}</p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold">Low Stock Alerts</h2>
        <p className="text-2xl font-bold">{lowStockAlerts}</p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold">Pending Orders</h2>
        <p className="text-2xl font-bold">{pendingOrders}</p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold">Total Sales</h2>
        <p className="text-2xl font-bold">
          $
          {totalSales.toLocaleString(undefined, {
            minimumFractionDigits: 2,
          })}
        </p>
      </div>
    </div>
  );
};

export default KPI;
