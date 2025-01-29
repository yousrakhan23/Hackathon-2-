"use client";

import React from "react";
import Link from "next/link";
import { Inter } from "next/font/google";
import Image from "next/image";
import wishlist from "../public/images/wishlist.png";
import profile from "../public/images/profile.png";
import cart from "../public/images/cart.png";
import comforty_logo from "../public/images/comforty_logo.png";


const fontInter500 = Inter({ weight: "500", subsets: ["latin"] });
const Navbar = () => {
  return (
    <div>
      <div className="bg-[#80bbd8] py-6 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        {/* Top Container */}
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/">
            <div className="flex items-center space-x-2">
              <div className="uppercase font-bold text-lg text-white">
                comforty
              </div>
              <Image
                src={comforty_logo}
                alt="Comforty Logo"
                width={35}
                height={30}
              />
            </div>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex items-center w-full max-w-lg mx-auto bg-[#F8F8F8] rounded-xl px-4 py-2">
            <input
              type="text"
              className="flex-grow bg-transparent focus:outline-none text-sm text-gray-700"
              placeholder="Search for varieties of sofa and much more..."
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Link href="/Wishlist">
              <div>
                <Image src={wishlist} alt="Wishlist" height={30} width={30}/>
              </div>
            </Link>
            <Link href="/Dashboard">
              <div>
                <Image src={profile} alt="Profile" height={30} width={30} />
              </div>
            </Link>
            <Link href="/Cart">
              <div>
                <Image src={cart} alt="Cart" height={30} width={30} />
              </div>
            </Link>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="flex md:hidden items-center bg-[#F8F8F8] rounded-xl px-4 py-2 mt-4">
          <input
            type="text"
            className="flex-grow bg-transparent focus:outline-none text-sm text-gray-700"
            placeholder="Search for varieties of sofa and much more..."
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>

      {/* navbar */}
      <div>
        <nav className="h-[84px] hidden lg:block">
          <ul
            className={`${fontInter500.className} flex items-center gap-8 ml-[19rem] mt-7 text-[#636270]`}
          >
            <li className="hover:text-[#007580]">
              <Link href="/">Home</Link>
            </li>

            <li className="hover:text-[#007580]">
              <Link href="/Product">Product</Link>
            </li>

            <li className="hover:text-[#007580]">
              <Link href="/About">About</Link>
            </li>

            <Link href="/Contact">
              <span className="text-[#636270] ml-[29rem] underline">
                Contact:
                <span className="text-[#272343] underline">(808) 555-0111</span>
              </span>
            </Link>
          </ul>
        </nav>

        {/* Responsive Navbar */}
        {/* <div className="lg:hidden">
          <Sheet>
            <SheetTrigger>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="40px"
                viewBox="0 -960 960 960"
                width="40px"
                fill="#000"
                className="block ml-[18rem]"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </SheetTrigger>
            <SheetContent className="w-screen bg-[#80bbd8] h-screen flex flex-col justify-center items-center gap-6">
              <li className="list-none text-[#FFFFFF] text-2xl hover:text-[#272343]">
                <Link href="/">Home</Link>
              </li>
              
              <li className="list-none text-[#FFFFFF]  text-2xl hover:text-[#272343]">
                <Link href="/Product">Product</Link>
              </li>

              <li className="list-none text-[#FFFFFF]  text-2xl hover:text-[#272343]">
                <Link href="/About">About</Link>
              </li>
              <li className="list-none text-[#FFFFFF]  text-2xl hover:text-[#272343]">
                <Link href="/Contact">Contact</Link>
              </li>
            </SheetContent>
          </Sheet>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;


