import React from "react";
import Link from "next/link";
const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col bg-[#40d5e2] text-white w-64 p-4">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <nav className="flex flex-col space-y-4">
          <Link
            href="/"
            className="text-lg hover:bg-[#101314] px-4 py-2 rounded-lg transition"
          >
            Overview
          </Link>
          <Link
            href="Cart"
            className="text-lg hover:bg-[#0d1011] px-4 py-2 rounded-lg transition"
          >
            Orders
          </Link>
          <Link
            href="Product"
            className="text-lg hover:bg-[#0f1113] px-4 py-2 rounded-lg transition"
          >
            Products
          </Link>
          <Link
            href="/Customers"
            className="text-lg hover:bg-[#050607] px-4 py-2 rounded-lg transition"
          >
            Customers
          </Link>
          <Link
            href="/Settings"
            className="text-lg hover:bg-[#0c0f11] px-4 py-2 rounded-lg transition"
          >
            Settings
          </Link>
          <Link
            href="/Checkout"
            className="text-lg hover:bg-[#0b0e0f] px-4 py-2 rounded-lg transition"
          >
            Checkout
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <header className="bg-white shadow-md px-4 sm:px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">Welcome Back!</h1>
          <button className="bg-[#40d5e2] text-[#636270] px-4 py-2 rounded-lg transition">
            Logout
          </button>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-4 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Overview
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800">Total Sales</h3>
              <p className="text-3xl font-bold text-gray-600">$12,345</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800">New Orders</h3>
              <p className="text-3xl font-bold text-gray-600">34</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800">New Customers</h3>
              <p className="text-3xl font-bold text-gray-600">18</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;


