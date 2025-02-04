"use client";
import React from "react";
import Image from "next/image";
import brand_icon from "@/public/images/brandIcon.png";
import { Inter } from "next/font/google";
import paypal from "@/public/images/Group 13.png";
import social_icons from "@/public/images/Social Links.png";

const fontInter400 = Inter({ weight: "400", subsets: ["latin"] });
const Footer = () => {
  return (
    <div>
      <footer className="bg-gradient-to-br from-[#e9ecef] to-[#40d5e2]  py-10 px-6">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-[26px] font-semibold text-[#272343]">
              <Image
                src={brand_icon}
                alt="brand_icon"
                width={50}
                height={50}
                className="w-10 h-10 float-left "
              />
              Comforty
            </h2>
            <p className="mt-4 text-sm text-gray-600">
              Vivamus tristique odio sit amet velit semper, eu posuere turpis
              interdum. Cras egestas purus.
              <Image
                src={social_icons}
                alt="social_icons"
                width={206}
                height={38}
              />
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-800">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-800">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-800">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-800">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>

          {/* Category */}
          <div>
            <h3 className="text-lg font-medium text-[#9A9CAA] uppercase">
              Category
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-[#272343] hover:underline">
                  Sofa
                </a>
              </li>
              <li>
                <a href="#" className="text-[#272343] hover:underline">
                  Armchair
                </a>
              </li>
              <li>
                <a href="#" className="text-[#272343] hover:underline">
                  Wing Chair
                </a>
              </li>
              <li>
                <a href="#" className="text-[#272343] hover:underline">
                  Desk Chair
                </a>
              </li>
              <li>
                <a href="#" className="text-[#272343] hover:underline">
                  Wooden Chair
                </a>
              </li>
              <li>
                <a href="#" className="text-[#272343] hover:underline">
                  Park Bench
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-medium text-[#9A9CAA] uppercase">
              Support
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-[#272343] hover:underline">
                  Help & Support
                </a>
              </li>
              <li>
                <a href="#" className="text-[#272343] hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-[#272343] hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-[#272343] hover:underline">
                  Help
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-medium text-[#9A9CAA] uppercase">
              Newsletter
            </h3>
            <form className="mt-4 flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="px-4 py-2 text-sm text-white bg-[#029FAE] rounded-r-md "
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-sm text-[#272343]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt erat enim.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-300 pt-4 text-sm text-gray-500">
          {/* Text */}
          <p
            className={`${fontInter400.className} text-center md:text-start md:ml-[6rem] text-[14px]`}
          >
            &copy; 2021 - Blogy - Designed & Developed by
            <span className="text-black"> Zokirsoft</span>
          </p>

          {/* Payment Icons */}
          <div className="mt-4 flex justify-center md:justify-end md:mr-[6rem] space-x-4">
            <Image
              src={paypal}
              alt="paypal"
              width={120} // Adjusted width for smaller screens
              height={27}
              className="w-auto"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
