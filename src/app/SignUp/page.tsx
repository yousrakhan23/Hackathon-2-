import React from "react";
import Link from "next/link";
const SignupPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#e9ecef] to-[#40d5e2] p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-semibold text-gray-700">Sign Up</h2>
        <form className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-600" htmlFor="name">
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
            <label className="mb-1 block text-sm font-medium text-gray-600" htmlFor="email">
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
            <label className="mb-1 block text-sm font-medium text-gray-600" htmlFor="password">
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
          <button
            type="submit"
            className="w-full rounded-md bg-[#029FAE] p-2 text-white transition "
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account? <Link href="/Login" className="text-[#029FAE] hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
