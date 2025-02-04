"use client";
import React from "react";
import Link from "next/link";
import { Inter } from "next/font/google";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const fontInter400 = Inter({ weight: "400", subsets: ["latin"] });

const Header = () => {
  return (
    <div>
      <div className="lg:hidden bg-[#029FAE]">
        <Sheet>
          <SheetTrigger>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#000"
              className="block ml-[22rem]"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </SheetTrigger>
          <SheetContent className="w-screen bg-[#029FAE] h-screen flex flex-col justify-center items-center gap-6">
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
            <li className="list-none text-[#FFFFFF]  text-2xl hover:text-[#272343]">
              <Link href="/Login">Login</Link>
            </li>
            <li className="list-none text-[#FFFFFF]  text-2xl hover:text-[#272343]">
              <Link href="/SignUp">Sign up</Link>
            </li>

          </SheetContent>
        </Sheet>
      </div>
      <header className="bg-[#272343] w-full">
        <div className="flex items-center justify-between px-4 py-3 md:py-[14px] md:px-[300px]">
          {/* Left Section */}
          <h1
            className={`${fontInter400.className} text-[12px] text-[#FFFFFF] flex items-center sm:text-[11px] md:text-[13px] overflow-hidden`}
          >
            <span className="mr-[10px]"></span>
            <span className="ml-[4px] inline-block whitespace-nowrap animate-marquee">
              Free Shipping on all orders over $50
            </span>
          </h1>

          <style jsx>{`
            @tailwind base;
            @tailwind components;
            @tailwind utilities;

            @layer utilities {
              @keyframes marquee {
                0% {
                  transform: translateX(100%);
                }
                100% {
                  transform: translateX(-100%);
                }
              }

              .animate-marquee {
                animation: marquee 10s linear infinite;
              }
            }
          `}</style>

          {/* Right Section */}
          <div className="flex items-center space-x-4 sm:space-x-2">
            {/* Language Dropdown */}
            <div className="flex items-center text-[#FFFFFF] text-[12px] sm:text-[11px] md:text-[14px]">
              {/* <span className="mr-[2px]">Eng</span> */}
              <DropdownMenu>
                <DropdownMenuTrigger className="mr-[2px]">
                  Eng
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>French</DropdownMenuItem>
                  <DropdownMenuItem>Spanish</DropdownMenuItem>
                  <DropdownMenuItem>Chineese</DropdownMenuItem>
                  <DropdownMenuItem>Arabic</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <span className="self-start">
                <svg
                  width="9"
                  height="5"
                  viewBox="0 0 9 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-[7px]"
                >
                  <path
                    d="M8 0.75L4.5 4.25L1 0.75"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>

            {/* FAQs */}
            <Link href="/Faqs">
              <span
                className={`${fontInter400.className} text-[#FFFFFF] text-[12px] sm:text-[11px] md:text-[13px] cursor-pointer`}
              >
                Faqs
              </span>
            </Link>

            {/* Need Help */}
            <Link href="/NeedHelp">
              <div className="flex items-center text-[#FFFFFF] text-[12px] sm:text-[11px] md:text-[13px]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2"
                >
                  <g opacity="0.7" clipPath="url(#clip0_1_883)">
                    <path
                      d="M7.99992 14.6667C11.6818 14.6667 14.6666 11.6819 14.6666 8.00004C14.6666 4.31814 11.6818 1.33337 7.99992 1.33337C4.31802 1.33337 1.33325 4.31814 1.33325 8.00004C1.33325 11.6819 4.31802 14.6667 7.99992 14.6667Z"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 5.33337V8.00004"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 10.6666H8.00615"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_883">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Need Help
              </div>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
