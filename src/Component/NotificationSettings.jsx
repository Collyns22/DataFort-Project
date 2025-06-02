import React, { useState } from "react";

const NotificationSettings = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(true);

  const handleEmailChange = () => {
    setEmailNotifications(!emailNotifications);
  };

  const handleSmsChange = () => {
    setSmsNotifications(!smsNotifications);
  };

  const handlePushChange = () => {
    setPushNotifications(!pushNotifications);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Notification Settings</h2>
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          checked={emailNotifications}
          onChange={handleEmailChange}
          className="mr-2"
        />
        <label>Email Notifications</label>
      </div>
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          checked={smsNotifications}
          onChange={handleSmsChange}
          className="mr-2"
        />
        <label>SMS Notifications</label>
      </div>
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          checked={pushNotifications}
          onChange={handlePushChange}
          className="mr-2"
        />
        <label>Push Notifications</label>
      </div>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Save Changes
      </button>
    </div>
  );
};

export default NotificationSettings;
