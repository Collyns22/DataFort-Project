import IntegrationSettings from "../Component/IntegrationSettings.jsx";
import NotificationSettings from "../Component/NotificationSettings.jsx";
import UserManagement from "../Component/UserManagement.jsx";

const SettingsPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <div className="space-y-6">
        <IntegrationSettings />
        <NotificationSettings />
        <UserManagement />
      </div>
    </div>
  );
};

export default SettingsPage;
