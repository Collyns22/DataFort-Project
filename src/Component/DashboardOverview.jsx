import KPI from "../Component/KPI.jsx";
import ChartComponent from "../Component/ChartComponent.jsx";

const DashboardOverview = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <KPI />
        <ChartComponent />
      </div>
    </div>
  );
};

export default DashboardOverview;
