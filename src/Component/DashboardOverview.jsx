import KPI from "./KPI.jsx";
import ChartComponent from "../Component/ChartComponent.jsx";

const DashboardOverview = ({ inventoryItems, orders }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="mb-10">
        <KPI inventoryItems={inventoryItems} orders={orders} />
      </div>
      <div>
        <ChartComponent />
      </div>
    </div>
  );
};

export default DashboardOverview;
