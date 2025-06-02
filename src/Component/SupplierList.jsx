import Table from "./Shared/Table";

const SupplierList = ({ suppliers }) => {
  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Name", accessor: "name" },
    { header: "Contact", accessor: "contact" },
    { header: "Phone", accessor: "phone" },
    { header: "Address", accessor: "address" },
    { header: "Status", accessor: "status" },
  ];

  return (
    <div className="p-4">
      <Table data={suppliers} columns={columns} />
    </div>
  );
};

export default SupplierList;
