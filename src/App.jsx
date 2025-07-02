import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomePage from "./Pages/WelcomePage.jsx";
import DashboardPage from "./Pages/DashboardPage";
import InventoryPage from "./Pages/InventoryPage";
import OrdersPage from "./Pages/OrdersPage.jsx";
import ReportsPage from "./Pages/ReportsPage.jsx";
import SettingsPage from "./Pages/SettingPage.jsx";
import NotFoundPage from "./Pages/NotFoundPage.jsx";
import SideBar from "./Component/SideBar.jsx";
import TopBar from "./Component/TopBar.jsx";
import Footer from "./Component/Footer/Footer.jsx";
import SuppliersPage from "./Pages/SuppliersPage.jsx";
import Registration from "./Component/Registration.jsx";

const App = () => {
  // Login/Register state
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [form, setForm] = useState({
    username: "",
    password: "",
    role: "user",
  });

  const [inventoryItems, setInventoryItems] = useState([
    // Example inventory items
    {
      id: 1,
      name: "Concert violin",
      price: 1200.0,
      stock: 97,
      category: "Musical Instruments",
      supplier: "Moscow Music Store",
      image:
        "https://th.bing.com/th/id/OIP.8lM3FD2LBtA2vBujS7EBXwHaHa?r=0&cb=thvnextc1&rs=1&pid=ImgDetMain",
    },
    {
      id: 2,
      name: "LG Plasma Television",
      price: 520,
      stock: 15,
      category: "Electronics",
      supplier: "Digital World international",
      image:
        "https://cdn.pixabay.com/photo/2018/12/22/03/27/smart-tv-3889141_960_720.png",
    },
    // ...other items
  ]);
  const [orders] = useState([
    // ...your orders data
  ]);

  // Handlers
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = (e) => {
    e.preventDefault();
    setShowLogin(false);
    setIsLoggedIn(true);
  };

  const handleShowRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  const handleCloseRegister = () => setShowRegister(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowUserMenu(false);
  };

  const handleAvatarClick = () => setShowUserMenu((prev) => !prev);

  // Only render WelcomePage before login
  if (!isLoggedIn) {
    return (
      <WelcomePage
        showLogin={showLogin}
        setShowLogin={setShowLogin}
        showRegister={showRegister}
        setShowRegister={setShowRegister}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        showUserMenu={showUserMenu}
        setShowUserMenu={setShowUserMenu}
        form={form}
        setForm={setForm}
        handleChange={handleChange}
        handleLogin={handleLogin}
        handleShowRegister={handleShowRegister}
        handleCloseRegister={handleCloseRegister}
        handleLogout={handleLogout}
        handleAvatarClick={handleAvatarClick}
      />
    );
  }

  // Render the rest of the app after login
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <TopBar
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          showUserMenu={showUserMenu}
          setShowUserMenu={setShowUserMenu}
          handleLogout={handleLogout}
          handleAvatarClick={handleAvatarClick}
        />
        <div className="flex flex-1">
          <SideBar />
          <main className="flex-1 p-4 bg-gray-50 overflow-y-auto">
            <Routes>
              <Route
                path="/"
                element={
                  <DashboardPage
                    inventoryItems={inventoryItems}
                    orders={orders}
                  />
                }
              />
              <Route
                path="/inventory"
                element={
                  <InventoryPage
                    inventoryItems={inventoryItems}
                    setInventoryItems={setInventoryItems}
                  />
                }
              />
              <Route path="/orders" element={<OrdersPage />} />
              <Route path="/reports" element={<ReportsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/suppliers" element={<SuppliersPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
