import React from "react";

const Checkout = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section: Billing & Shipping */}
        <div className="lg:col-span-2 bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Checkout</h1>

          {/* Billing Details */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Billing Details</h2>
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
            </form>
          </div>

          {/* Shipping Address */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Shipping Address</h2>
            <form className="space-y-4">
              <div className="flex flex-col">
                <label htmlFor="address" className="text-gray-600 mb-2">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  placeholder="123 Main St"
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#80bbd8] focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="city" className="text-gray-600 mb-2">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  placeholder="City"
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#80bbd8] focus:outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="state" className="text-gray-600 mb-2">
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    placeholder="State"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#80bbd8] focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="zip" className="text-gray-600 mb-2">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    id="zip"
                    placeholder="ZIP Code"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#80bbd8] focus:outline-none"
                  />
                </div>
              </div>
            </form>
          </div>

          {/* Payment Options */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Payment Options</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="creditCard"
                  name="paymentMethod"
                  className="w-5 h-5 text-[#80bbd8] focus:ring-2 focus:ring-[#80bbd8]"
                />
                <label htmlFor="creditCard" className="ml-3 text-gray-600">
                  Credit/Debit Card
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="paypal"
                  name="paymentMethod"
                  className="w-5 h-5 text-[#80bbd8] focus:ring-2 focus:ring-[#80bbd8]"
                />
                <label htmlFor="paypal" className="ml-3 text-gray-600">
                  PayPal
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="cashOnDelivery"
                  name="paymentMethod"
                  className="w-5 h-5 text-[#80bbd8] focus:ring-2 focus:ring-[#80bbd8]"
                />
                <label htmlFor="cashOnDelivery" className="ml-3 text-gray-600">
                  Cash on Delivery
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Order Summary */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Item Total</span>
              <span className="font-semibold">$150.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping</span>
              <span className="font-semibold">$10.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tax</span>
              <span className="font-semibold">$5.00</span>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between text-xl font-semibold">
              <span>Total</span>
              <span>$165.00</span>
            </div>
          </div>
          <button className="w-full mt-6 bg-[#80bbd8] hover:bg-[#64a5c4] text-white font-semibold py-2 px-4 rounded-lg transition">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
