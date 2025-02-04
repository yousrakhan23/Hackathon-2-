

"use client";
import React, { useEffect, useState } from "react";

import { Product } from "@/sanity/types/products";
import { CgChevronRight } from "react-icons/cg";

import { getCartItems } from "../actions/actions";
import Link from "next/link";
import Image from "next/image";
import Swal from "sweetalert2";
import { client } from "@/sanity/lib/client";

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
    phone: "",
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
    phone: false,
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
      phone: !formValues.phone,
      paymentMethod: !formValues.paymentMethod,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handlePlaceOrder = async () => {
    Swal.fire({
      title: "Processing Order",
      text: "Are you sure you want to place the order?",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Proceed...",
    }).then((result) => {
      if (result.isConfirmed) {
        if (validateForm()) {
          localStorage.removeItem("appliedDiscount");
          Swal.fire(
            "Order Placed Successfully!",
            "Your order has been placed. You will receive an email confirmation shortly.",
            "success"
          );
        } else {
          Swal.fire(
            "Error!",
            "Please fill in the following required fields.",
            "error"
          );
        }
      }
    });

    
    const total = subTotal - discount;
    const orderData = {
      _type: "order",
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      address: formValues.address,
      city: formValues.city,
      state: formValues.state,
      zip: formValues.zip,
      phone: formValues.phone,
      paymentMethod: formValues.paymentMethod,
      cartItems: cartItems.map( item => ({
        _type: "reference",
        _ref: item._id,
      })),
      total: total,
      discount: discount,
      orderData: new Date().toISOString(),
    };

    try {
      await client.create(orderData);
      localStorage.removeItem("appliedDiscount");
    } catch (error) {
      console.log("Error creating order: ", error);
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
