"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import sign_in_img from "@/public/images/signin.png";

const SignupPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#e9ecef] to-[#40d5e2] p-4">
      <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-4xl p-6 md:p-10 bg-white shadow-lg rounded-lg">
        {/* Image Section */}
        <div className="hidden md:block w-1/2">
          <Image src={sign_in_img} alt="Sign In" width={300} height={400} className="mx-auto" />
        </div>

        {/* Signup Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <h2 className="mb-6 text-center text-2xl font-semibold text-gray-700">Sign Up</h2>
          <form className="w-full space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
                placeholder="Enter your password"
                required
              />
            </div>
            <Link href={"/"}>
            <button
              type="submit"
              className="w-full rounded-md bg-[#029FAE] p-2 text-white hover:bg-[#027a8a] transition"
            >
              Sign Up
            </button>
            </Link>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/Login" className="text-[#029FAE] hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
