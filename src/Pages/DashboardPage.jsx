import React from "react";
import DashboardOverview from "../Component/DashboardOverview.jsx";

const DashboardPage = ({ inventoryItems, orders }) => (
  <div className="flex flex-col h-screen">
    <main className="flex-grow p-4">
      <DashboardOverview inventoryItems={inventoryItems} orders={orders} />
    </main>
  </div>
);

export default DashboardPage;
