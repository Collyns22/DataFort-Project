const KPI = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold">Total Inventory Value</h2>
        <p className="text-2xl font-bold">$10,000</p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold">Number of Products</h2>
        <p className="text-2xl font-bold">150</p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold">Pending Orders</h2>
        <p className="text-2xl font-bold">5</p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold">Low Stock Alerts</h2>
        <p className="text-2xl font-bold">3</p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold">Total Sales</h2>
        <p className="text-2xl font-bold">$200,000</p>
      </div>
    </div>
  );
};

export default KPI;
