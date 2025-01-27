import React from "react";
import Image from "next/image";
import customer from "../../public/images/sir_hamza.jpg"
const CustomerProfile = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 px-4 sm:px-8 lg:px-16">
      {/* Profile Section */}
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          {/* Profile Picture */}
          <div className="flex-shrink-0">
            <Image
              src={customer}
              alt="Profile"
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-gray-300 shadow-md"
            />
          </div>

          {/* Profile Information */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Hamza Alvi
            </h2>
            <p className="text-gray-600 mb-4">hamzaalvi@example.com</p>
            <p className="text-gray-600">
              <span className="font-semibold">Phone:</span> +123 456 7890
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Address:</span> 123 Main Street,
              City, England
            </p>
          </div>
        </div>
      </div>

      {/* Account Settings & Purchase History */}
      <div className="w-full max-w-4xl mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Account Settings */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Account Settings</h3>
          <div className="space-y-3">
            <p className="text-gray-600">
              <span className="font-semibold">Username:</span> hamzaalvi123
            </p>
            <button className="bg-[#80bbd8] hover:bg-[#64a5c4] text-white px-4 py-2 rounded-lg transition">
              Edit Profile
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg transition">
              Change Password
            </button>
          </div>
        </div>

        {/* Purchase History */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Purchase History</h3>
          <ul className="space-y-4">
            <li className="flex justify-between items-center">
              <span className="text-gray-600">Sofa Set - Classic Comfort</span>
              <span className="text-gray-800 font-bold">$599</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-600">Modern Coffee Table</span>
              <span className="text-gray-800 font-bold">$299</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-600">Luxury Armchair</span>
              <span className="text-gray-800 font-bold">$249</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;
