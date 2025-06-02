const getStatus = (stock) => {
  if (stock === 0) return "Out of Stock";
  if (stock < 20) return "Low Stock";
  if (stock > 50) return "In Stock";
  return "Low Stock";
};

const InventoryTable = ({ inventoryItems }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Product Image</th>
            <th className="py-3 px-6 text-left">SKU</th>
            <th className="py-3 px-6 text-left">Product Name</th>
            <th className="py-3 px-6 text-left">Category</th>
            <th className="py-3 px-6 text-left">Stock Quantity</th>
            <th className="py-3 px-6 text-left">Unit Price</th>
            <th className="py-3 px-6 text-left">Supplier</th>
            <th className="py-3 px-6 text-left">Status</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {inventoryItems.map((item) => (
            <tr
              key={item.id}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6 text-left">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover"
                />
              </td>
              <td className="py-3 px-6 text-left">{item.sku}</td>
              <td className="py-3 px-6 text-left">{item.name}</td>
              <td className="py-3 px-6 text-left">{item.category}</td>
              <td className="py-3 px-6 text-left">{item.stock}</td>
              <td className="py-3 px-6 text-left">${item.price.toFixed(2)}</td>
              <td className="py-3 px-6 text-left">{item.supplier}</td>
              <td className="py-3 px-6 text-left">
                {getStatus(Number(item.stock))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;
