import React, { useState } from "react";

const ReportGenerator = () => {
  const [reportType, setReportType] = useState("sales");
  const [dateRange, setDateRange] = useState("lastMonth");

  const handleReportTypeChange = (e) => {
    setReportType(e.target.value);
  };

  const handleDateRangeChange = (e) => {
    setDateRange(e.target.value);
  };

  const generateReport = () => {
    // Logic to generate the report based on selected type and date range
    console.log(`Generating ${reportType} report for ${dateRange}`);
  };

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Generate Report</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Report Type:</label>
        <select
          value={reportType}
          onChange={handleReportTypeChange}
          className="border rounded p-2 w-full"
        >
          <option value="sales">Sales Report</option>
          <option value="inventory">Inventory Report</option>
          <option value="orders">Orders Report</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Date Range:</label>
        <select
          value={dateRange}
          onChange={handleDateRangeChange}
          className="border rounded p-2 w-full"
        >
          <option value="lastMonth">Last Month</option>
          <option value="lastQuarter">Last Quarter</option>
          <option value="lastYear">Last Year</option>
        </select>
      </div>
      <button
        onClick={generateReport}
        className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
      >
        Generate Report
      </button>
    </div>
  );
};

export default ReportGenerator;
