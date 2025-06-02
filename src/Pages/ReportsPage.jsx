import ReportGenerator from "../Component/ReportGenerator.jsx"; // Ensure this path is correct

const ReportsPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Reports & Analytics</h1>
      <ReportGenerator />
    </div>
  );
};

export default ReportsPage;
