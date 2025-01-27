import React from "react";

const Settings = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Settings</h1>

        {/* Account Details Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Account Details</h2>
          <form className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-600 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Yousra Khan"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#80bbd8] focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-600 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="yousrakhanzai@gmail.com"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#80bbd8] focus:outline-none"
              />
            </div>

            <button className="bg-[#80bbd8] hover:bg-[#64a5c4] text-white font-semibold py-2 px-4 rounded-lg transition">
              Save Changes
            </button>
          </form>
        </div>

        {/* Password Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Change Password</h2>
          <form className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="currentPassword" className="text-gray-600 mb-2">
                Current Password
              </label>
              <input
                type="password"
                id="currentPassword"
                placeholder="••••••••"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#80bbd8] focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="newPassword" className="text-gray-600 mb-2">
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                placeholder="••••••••"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#80bbd8] focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="confirmPassword" className="text-gray-600 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="••••••••"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#80bbd8] focus:outline-none"
              />
            </div>

            <button className="bg-[#80bbd8] hover:bg-[#64a5c4] text-white font-semibold py-2 px-4 rounded-lg transition">
              Update Password
            </button>
          </form>
        </div>

        {/* Preferences Section */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Preferences</h2>
          <form className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="emailNotifications"
                className="w-5 h-5 text-[#80bbd8] focus:ring-2 focus:ring-[#80bbd8] rounded"
              />
              <label htmlFor="emailNotifications" className="ml-3 text-gray-600">
                Receive email notifications
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="smsNotifications"
                className="w-5 h-5 text-[#80bbd8] focus:ring-2 focus:ring-[#80bbd8] rounded"
              />
              <label htmlFor="smsNotifications" className="ml-3 text-gray-600">
                Receive SMS notifications
              </label>
            </div>

            <button className="bg-[#80bbd8] hover:bg-[#64a5c4] text-white font-semibold py-2 px-4 rounded-lg transition">
              Save Preferences
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
