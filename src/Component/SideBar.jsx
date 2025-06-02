import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Dashboard" },
  { to: "/inventory", label: "Inventory" },
  { to: "/orders", label: "Sales Orders" },
  { to: "/suppliers", label: "Suppliers" },
  { to: "/reports", label: "Reports" },
  { to: "/settings", label: "Settings" },
];

const SideBar = () => (
  <div className="bg-gray-950 text-white w-60 h-full flex flex-col shadow-lg">
    <div className="p-6 flex items-center justify-center border-b border-gray-700">
      <span className="text-2xl font-extrabold tracking-wide">General</span>
    </div>
    <nav className="flex-1 mt-4">
      <ul>
        {navLinks.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                `flex items-center gap-3 py-3 px-6 transition-colors duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white font-semibold"
                    : "hover:bg-gray-800"
                }`
              }
              end={link.to === "/"}
            >
              <span className="text-lg">{link.icon}</span>
              <span>{link.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

export default SideBar;
