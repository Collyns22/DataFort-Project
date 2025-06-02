import React from "react";

const Branding = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold">Invento</h1>
        <p className="ml-2 italic">
          Cultivating Efficiency, Tracking Excellence — Your Trusted Inventory
          Management Partner
        </p>
      </div>
      <div className="flex space-x-4">
        <a href="/dashboard" className="hover:text-blue-400">
          Dashboard
        </a>
        <a href="/sales" className="hover:text-blue-400">
          Sales
        </a>

        <a href="/contact" className="hover:text-blue-400">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Branding;
