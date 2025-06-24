import React, { useEffect } from "react";

const TopBar = ({
  isLoggedIn,
  showUserMenu,
  setShowUserMenu,
  handleLogout,
  handleAvatarClick,
}) => {
  // Optional: Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest("#user-avatar-btn") &&
        !event.target.closest("#user-menu-dropdown")
      ) {
        setShowUserMenu(false);
      }
    };
    if (showUserMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showUserMenu, setShowUserMenu]);

  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-xl font-bold">Inventory Management</h1>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-md p-2"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Notifications
        </button>
        {isLoggedIn && (
          <div className="relative">
            <button
              id="user-avatar-btn"
              className="flex items-center"
              onClick={handleAvatarClick}
            >
              <img
                src="https://th.bing.com/th/id/OIP.idmKJ66Q5IXLXKxPXFy0twHaFj?cb=iwp2&rs=1&pid=ImgDetMain"
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
              />
            </button>
            {showUserMenu && (
              <div
                id="user-menu-dropdown"
                className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50"
              >
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Profile
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Settings
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={handleLogout}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBar;
