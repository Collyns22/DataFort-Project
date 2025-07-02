import React, { useState } from "react";
import InventoryTable from "../Component/InventoryTable";


const InventoryPage = ({ inventoryItems, setInventoryItems }) => {
  const [showAddProduct, setShowAddProduct] = useState(false);

  // Form state for new product
  const [newProduct, setNewProduct] = useState({
    image: "",
    sku: "",
    name: "",
    category: "",
    stock: "",
    price: "",
    supplier: "",
    status: "In Stock",
  });

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    // Add new product to inventoryItems
    setInventoryItems([
      ...inventoryItems,
      {
        ...newProduct,
        id: inventoryItems.length + 1,
        stock: Number(newProduct.stock),
        price: Number(newProduct.price),
      },
    ]);
    setShowAddProduct(false);
    setNewProduct({
      image: "",
      sku: "",
      name: "",
      category: "",
      stock: "",
      price: "",
      supplier: "",
      status: "In Stock",
    });
  };

  return (
    <div className="flex-1 flex flex-col">
      <main className="flex-1 p-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Inventory</h1>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            onClick={() => setShowAddProduct(true)}
          >
            + Add Product
          </button>
        </div>
        {/* Pass inventoryItems as prop */}
        <InventoryTable
          inventoryItems={inventoryItems}
          setInventoryItems={setInventoryItems}
        />
        {showAddProduct && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
              <h2 className="text-lg font-bold mb-4">Add New Product</h2>
              <form onSubmit={handleAddProduct} className="space-y-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Product Image URL
                  <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    value={newProduct.image}
                    onChange={handleChange}
                    className="w-full border rounded-md p-2"
                  />
                </label>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  SKU
                  <input
                    type="text"
                    name="sku"
                    placeholder="SKU"
                    value={newProduct.sku}
                    onChange={handleChange}
                    className="w-full border rounded-md p-2"
                    required
                  />
                </label>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Product Name
                  <input
                    type="text"
                    name="name"
                    placeholder="Product Name"
                    value={newProduct.name}
                    onChange={handleChange}
                    className="w-full border rounded-md p-2"
                    required
                  />
                </label>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                  <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={newProduct.category}
                    onChange={handleChange}
                    className="w-full border rounded-md p-2"
                    required
                  />
                </label>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Stock Quantity
                  <input
                    type="number"
                    name="stock"
                    placeholder="Stock Quantity"
                    value={newProduct.stock}
                    onChange={handleChange}
                    className="w-full border rounded-md p-2"
                    required
                  />
                </label>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Unit Price
                  <input
                    type="number"
                    name="price"
                    placeholder="Unit Price"
                    value={newProduct.price}
                    onChange={handleChange}
                    className="w-full border rounded-md p-2"
                    required
                  />
                </label>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Supplier
                  <input
                    type="text"
                    name="supplier"
                    placeholder="Supplier"
                    value={newProduct.supplier}
                    onChange={handleChange}
                    className="w-full border rounded-md p-2"
                    required
                  />
                </label>

                <div className="flex justify-between">
                  <button
                    type="button"
                    className="text-gray-500"
                    onClick={() => setShowAddProduct(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md"
                  >
                    Add Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default InventoryPage;
