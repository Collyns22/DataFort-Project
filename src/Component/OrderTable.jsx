const OrderTable = () => {
  const orders = [
    {
      id: 1,
      customerName: "John Doe",
      orderDate: "2023-10-01",
      status: "Shipped",
      totalAmount: "$150.00",
    },
    {
      id: 2,
      customerName: "Jane Smith",
      orderDate: "2023-10-02",
      status: "Pending",
      totalAmount: "$200.00",
    },
    {
      id: 3,
      customerName: "Alice Johnson",
      orderDate: "2023-10-03",
      status: "Delivered",
      totalAmount: "$300.00",
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Order ID</th>
            <th className="py-3 px-6 text-left">Customer Name</th>
            <th className="py-3 px-6 text-left">Order Date</th>
            <th className="py-3 px-6 text-left">Status</th>
            <th className="py-3 px-6 text-left">Total Amount</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {orders.map((order) => (
            <tr
              key={order.id}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6">{order.id}</td>
              <td className="py-3 px-6">{order.customerName}</td>
              <td className="py-3 px-6">{order.orderDate}</td>
              <td className="py-3 px-6">{order.status}</td>
              <td className="py-3 px-6">{order.totalAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
