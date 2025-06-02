import OrderTable from "../Component/OrderTable.jsx";

const OrdersPage = () => {
  return (
    <div className="flex-1">
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">Sales Orders</h1>
        <OrderTable />
      </main>
    </div>
  );
};

export default OrdersPage;
