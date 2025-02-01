// import React from "react";

// const Checkout = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-8 lg:px-16">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* Left Section: Billing & Shipping */}
//         <div className="lg:col-span-2 bg-white shadow-md rounded-lg p-6">
//           <h1 className="text-2xl font-bold text-gray-800 mb-6">Checkout</h1>

//           {/* Billing Details */}
//           <div className="mb-8">
//             <h2 className="text-xl font-semibold text-gray-700 mb-4">Billing Details</h2>
//             <form className="space-y-4">
//               <div className="flex flex-col">
//                 <label htmlFor="name" className="text-gray-600 mb-2">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   placeholder="Yousra Khan"
//                   className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#80bbd8] focus:outline-none"
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <label htmlFor="email" className="text-gray-600 mb-2">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   placeholder="yousrakhanzai@gmail.com"
//                   className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#80bbd8] focus:outline-none"
//                 />
//               </div>
//             </form>
//           </div>

//           {/* Shipping Address */}
//           <div className="mb-8">
//             <h2 className="text-xl font-semibold text-gray-700 mb-4">Shipping Address</h2>
//             <form className="space-y-4">
//               <div className="flex flex-col">
//                 <label htmlFor="address" className="text-gray-600 mb-2">
//                   Address
//                 </label>
//                 <input
//                   type="text"
//                   id="address"
//                   placeholder="123 Main St"
//                   className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#80bbd8] focus:outline-none"
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <label htmlFor="city" className="text-gray-600 mb-2">
//                   City
//                 </label>
//                 <input
//                   type="text"
//                   id="city"
//                   placeholder="City"
//                   className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#80bbd8] focus:outline-none"
//                 />
//               </div>
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="flex flex-col">
//                   <label htmlFor="state" className="text-gray-600 mb-2">
//                     State
//                   </label>
//                   <input
//                     type="text"
//                     id="state"
//                     placeholder="State"
//                     className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#80bbd8] focus:outline-none"
//                   />
//                 </div>
//                 <div className="flex flex-col">
//                   <label htmlFor="zip" className="text-gray-600 mb-2">
//                     ZIP Code
//                   </label>
//                   <input
//                     type="text"
//                     id="zip"
//                     placeholder="ZIP Code"
//                     className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#80bbd8] focus:outline-none"
//                   />
//                 </div>
//               </div>
//             </form>
//           </div>

//           {/* Payment Options */}
//           <div>
//             <h2 className="text-xl font-semibold text-gray-700 mb-4">Payment Options</h2>
//             <div className="space-y-4">
//               <div className="flex items-center">
//                 <input
//                   type="radio"
//                   id="creditCard"
//                   name="paymentMethod"
//                   className="w-5 h-5 text-[#80bbd8] focus:ring-2 focus:ring-[#80bbd8]"
//                 />
//                 <label htmlFor="creditCard" className="ml-3 text-gray-600">
//                   Credit/Debit Card
//                 </label>
//               </div>
//               <div className="flex items-center">
//                 <input
//                   type="radio"
//                   id="paypal"
//                   name="paymentMethod"
//                   className="w-5 h-5 text-[#80bbd8] focus:ring-2 focus:ring-[#80bbd8]"
//                 />
//                 <label htmlFor="paypal" className="ml-3 text-gray-600">
//                   PayPal
//                 </label>
//               </div>
//               <div className="flex items-center">
//                 <input
//                   type="radio"
//                   id="cashOnDelivery"
//                   name="paymentMethod"
//                   className="w-5 h-5 text-[#80bbd8] focus:ring-2 focus:ring-[#80bbd8]"
//                 />
//                 <label htmlFor="cashOnDelivery" className="ml-3 text-gray-600">
//                   Cash on Delivery
//                 </label>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Section: Order Summary */}
//         <div className="bg-white shadow-md rounded-lg p-6">
//           <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>
//           <div className="space-y-4">
//             <div className="flex justify-between">
//               <span className="text-gray-600">Item Total</span>
//               <span className="font-semibold">$150.00</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-600">Shipping</span>
//               <span className="font-semibold">$10.00</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-600">Tax</span>
//               <span className="font-semibold">$5.00</span>
//             </div>
//             <hr className="my-4" />
//             <div className="flex justify-between text-xl font-semibold">
//               <span>Total</span>
//               <span>$165.00</span>
//             </div>
//           </div>
//           <button className="w-full mt-6 bg-[#80bbd8] hover:bg-[#64a5c4] text-white font-semibold py-2 px-4 rounded-lg transition">
//             Place Order
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;

"use client";
import { Product } from "@/sanity/types/products";
import { CgChevronRight } from "react-icons/cg";
import React, { useEffect, useState } from "react";

import { getCartItems } from "../actions/actions";
import Link from "next/link";
import Image from "next/image";

  const Checkout = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    paymentMethod: "",
  });
  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    address: false,
    city: false,
    state: false,
    zip: false,
    paymentMethod: false,
  });

  useEffect(() => {
    setCartItems(getCartItems());
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.inventory,
    0
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      email: !formValues.email,
      address: !formValues.address,
      city: !formValues.city,
      state: !formValues.state,
      zip: !formValues.zip,
      paymentMethod: !formValues.paymentMethod,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handlePlaceOrder = () => {
    if (validateForm()) {
      localStorage.removeItem("appliedDiscount");
    }
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9fa] to-[#0e63b8] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/Cart" className="hover:text-gray-900">
            Cart
          </Link>
          <CgChevronRight className="text-gray-400" />
          <span className="text-gray-900">Checkout</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Summary Section */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Order Summary
            </h2>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex flex-col sm:flex-row items-center justify-between border-b py-4 space-y-4 sm:space-y-0"
                >
                  <div className="flex items-center space-x-4">
                    {item.imageUrl && (
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        width={80}
                        height={80}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                    )}
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        Quantity: {item.inventory}
                      </p>
                    </div>
                  </div>
                  <p className="text-lg font-semibold text-gray-800">
                    ${(item.price * item.inventory).toFixed(2)}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">Your cart is empty.</p>
            )}

            {/* Order Totals */}
            <div className="mt-6 space-y-3 border-t pt-6">
              <div className="flex justify-between">
                <p className="text-[#029FAE] font-mono font-black">Subtotal:</p>
                <p className="text-gray-800 font-medium">
                  ${subTotal.toFixed(2)}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-[#029FAE] font-mono font-black">Discount:</p>
                <p className="text-red-600 font-medium">
                  -${discount.toFixed(2)}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-[#029FAE] font-mono font-black">Total:</p>
                <p className="text-gray-800 font-semibold text-xl">
                  ${(subTotal - discount).toFixed(2)}
                </p>
              </div>
            </div>
          </div>

          {/* Checkout Form Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Checkout Details
            </h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={formValues.firstName}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full px-3 py-2 border ${
                    formErrors.firstName ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#029FAE]`}
                />
                {formErrors.firstName && (
                  <p className="text-sm text-red-500 mt-1">
                    First Name is required.
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={formValues.lastName}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full px-3 py-2 border ${
                    formErrors.lastName ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#029FAE]`}
                />
                {formErrors.lastName && (
                  <p className="text-sm text-red-500 mt-1">
                    Last Name is required.
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full px-3 py-2 border ${
                    formErrors.email ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#029FAE]`}
                />
                {formErrors.email && (
                  <p className="text-sm text-red-500 mt-1">
                    Email is required.
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  value={formValues.address}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full px-3 py-2 border ${
                    formErrors.address ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#029FAE]`}
                />
                {formErrors.address && (
                  <p className="text-sm text-red-500 mt-1">
                    Address is required.
                  </p>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    value={formValues.city}
                    onChange={handleInputChange}
                    className={`mt-1 block w-full px-3 py-2 border ${
                      formErrors.city ? "border-red-500" : "border-gray-300"
                    } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#029FAE]`}
                  />
                  {formErrors.city && (
                    <p className="text-sm text-red-500 mt-1">
                      City is required.
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-gray-700"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    value={formValues.state}
                    onChange={handleInputChange}
                    className={`mt-1 block w-full px-3 py-2 border ${
                      formErrors.state ? "border-red-500" : "border-gray-300"
                    } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#029FAE]`}
                  />
                  {formErrors.state && (
                    <p className="text-sm text-red-500 mt-1">
                      State is required.
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="zip"
                    className="block text-sm font-medium text-gray-700"
                  >
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    id="zip"
                    value={formValues.zip}
                    onChange={handleInputChange}
                    className={`mt-1 block w-full px-3 py-2 border ${
                      formErrors.zip ? "border-red-500" : "border-gray-300"
                    } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#029FAE]`}
                  />
                  {formErrors.zip && (
                    <p className="text-sm text-red-500 mt-1">
                      ZIP Code is required.
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="paymentMethod"
                  className="block text-sm font-medium text-gray-700"
                >
                  Payment Method
                </label>
                <input
                  type="text"
                  id="paymentMethod"
                  value={formValues.paymentMethod}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full px-3 py-2 border ${
                    formErrors.paymentMethod
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#029FAE]`}
                />
                {formErrors.paymentMethod && (
                  <p className="text-sm text-red-500 mt-1">
                    Payment Method is required.
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={handlePlaceOrder}
                className="w-full bg-[#029FAE] text-white py-2 px-4 rounded-md hover:bg-[#429ba3] focus:outline-none focus:ring-2 focus:ring-[#029FAE] focus:ring-offset-2"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
