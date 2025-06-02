import DashboardOverview from "../Component/DashboardOverview.jsx";

const DashboardPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <main className="flex-grow p-4">
        <DashboardOverview />
      </main>
    </div>
  );
};

export default DashboardPage;
