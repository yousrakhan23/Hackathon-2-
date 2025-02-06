// import React from "react";
// import Link from "next/link";
// import {
//   SignedIn,
//   SignedOut,
//   SignInButton,
//   UserButton,
// } from "@clerk/nextjs";
// import Image from "next/image";
// import login_img from "@/public/images/login.png";

// const LoginPage = () => {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#e9ecef] to-[#40d5e2] p-4">
//       <div>
//         <Image 
//         src={login_img}
//         alt="login image"
//         height={400}
//         width={400}/>
//       </div>
//       <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
//         <Link
//           href="/"
//           className="flex items-center justify-center w-full h-12 bg-[#029FAE] text-white font-medium text-sm uppercase rounded-md"
//         >
//           Back to Home
//           <svg
//             className="h-5 w-5 ml-2"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M17 8l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
//             />
//           </svg>
//         </Link>

//         <SignedIn>
//           <div className="mt-6 text-center">
//             <UserButton afterSignOutUrl="/" />
//             <h1 className="mt-6 text-3xl font-semibold text-[#029FAE] text-center">
//               Welcome back!
//             </h1>
//             <p className="mt-2 text-gray-600 text-lg">
//               Use coupon <span className="text-[#029FAE] font-bold">DISCOUNT</span> to get a 10% discount
//             </p>
//           </div>
//         </SignedIn>

//         <SignedOut>
//           <h2 className="mb-6 text-center text-2xl font-semibold text-gray-700">
//             Login
//           </h2>
//           <form className="space-y-4">
//             <div>
//               <label
//                 className="mb-1 block text-sm font-medium text-gray-600"
//                 htmlFor="email"
//               >
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
//                 placeholder="Enter your email"
//                 required
//               />
//             </div>
//             <div>
//               <label
//                 className="mb-1 block text-sm font-medium text-gray-600"
//                 htmlFor="password"
//               >
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 mb-3"
//                 placeholder="Enter your password"
//                 required
//               />
//             </div>
//           </form>
//           <div className="flex justify-center w-full rounded-md bg-[#029FAE] p-2 text-white transition duration-200">
//             <SignInButton mode="modal" />
//           </div>
//           <p className="mt-4 text-center text-sm text-gray-600">
//             Don't have an account?
//             <Link href="SignUp" className="text-[#029FAE] hover:underline">
//               Sign up
//             </Link>
//           </p>
//         </SignedOut>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

"use client";

import React from "react";
import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import login_img from "@/public/images/login.png";

const LoginPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#e9ecef] to-[#40d5e2] p-4">
      <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-4xl p-6 md:p-10 bg-white shadow-lg rounded-lg">
        {/* Image Section */}
        <div className="hidden md:block w-1/2">
          <Image src={login_img} alt="Login Image" height={400} width={400} className="mx-auto" />
        </div>

        {/* Login Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <Link
            href="/"
            className="flex items-center justify-center w-full h-12 bg-[#029FAE] text-white font-medium text-sm uppercase rounded-md hover:bg-[#027a8a] transition"
          >
            Back to Home
            <svg
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </Link>

          <SignedIn>
            <div className="mt-6 text-center">
              <UserButton afterSignOutUrl="/" />
              <h1 className="mt-4 text-3xl font-semibold text-[#029FAE]">Welcome back!</h1>
              <p className="mt-2 text-gray-600 text-lg">
                Use coupon <span className="text-[#029FAE] font-bold">DISCOUNT</span> to get a 10% discount
              </p>
            </div>
          </SignedIn>

          <SignedOut>
            <h2 className="mb-6 text-center text-2xl font-semibold text-gray-700">Login</h2>
            <form className="w-full space-y-4">
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
            </form>
            <div className="flex justify-center w-full mt-4">
              <div className="w-full rounded-md bg-[#029FAE] p-2 text-white text-center hover:bg-[#027a8a] transition">
                <SignInButton mode="modal" />
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-gray-600">
              Don&apos;t have an account?
              <Link href="SignUp" className="text-[#029FAE] hover:underline">
                Sign up
              </Link>
            </p>
          </SignedOut>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
