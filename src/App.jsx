import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from "./Pages/DashboardPage.jsx";
import InventoryPage from "./Pages/InventoryPage.jsx";
import OrdersPage from "./Pages/OrdersPage.jsx";
import ReportsPage from "./Pages/ReportsPage.jsx";
import SettingsPage from "./Pages/SettingPage.jsx";
import NotFoundPage from "./Pages/NotFoundPage.jsx";
import SideBar from "./Component/SideBar.jsx";
import TopBar from "./Component/TopBar.jsx";
import Footer from "./Component/Footer/Footer.jsx";
import SuppliersPage from "./Pages/SuppliersPage.jsx";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <TopBar />
        <div className="flex flex-1">
          <SideBar />

          <main className="flex-1 p-4 bg-gray-50 overflow-y-auto">
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/inventory" element={<InventoryPage />} />
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
