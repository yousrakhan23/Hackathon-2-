"use client";
import React from "react";
import Image from "next/image";
import Fea_Prod1 from "@/public/images/fp_1.png";
import Fea_Prod2 from "@/public/images/fp_2.png";
import Fea_Prod3 from "@/public/images/fp_3.png";
import Fea_Prod4 from "@/public/images/fp_4.png";
import cart from "@/public/images/cart.png"
import green_button from "@/public/images/Products Status.png";
import orange_button from "@/public/images/Products Status (1).png";
import { Inter } from "next/font/google";

const fontInter700 = Inter({ weight: "400", subsets: ["latin"] });

const FeaturedProducts = () => {
  return (
    <div className="py-10 px-6 md:px-10 lg:px-16 bg-gray-50">
      <div className={`${fontInter700.className}`}>
        {/* Heading */}
        <h1 className="text-2xl md:text-4xl font-bold mb-8">
          Featured Products
        </h1>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Product 1 */}
          <div className="relative bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="relative">
              <Image
                src={Fea_Prod1}
                alt="Fea_Prod1"
                width={300}
                height={300}
                className="rounded-lg"
              />
              <Image
                src={green_button}
                alt="green_button"
                width={49}
                height={26}
                className="absolute top-2 left-2"
              />
            </div>
            <h2 className="text-[#007580] text-lg mt-3">Library Stool Chair</h2>
            <p className="text-xl font-bold mt-2">$20</p>
            <Image
              src={cart}
              alt="cart"
              width={44}
              height={44}
              className="mt-4 cursor-pointer"
            />
          </div>

          {/* Product 2 */}
          <div className="relative bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="relative">
              <Image
                src={Fea_Prod2}
                alt="Fea_Prod2"
                width={300}
                height={300}
                className="rounded-lg"
              />
              <Image
                src={orange_button}
                alt="orange_button"
                width={49}
                height={26}
                className="absolute top-2 left-2"
              />
            </div>
            <h2 className="text-[#007580] text-lg mt-3">Library Stool Chair</h2>
            <p className="text-xl font-bold mt-2">
              $20 <span className="text-gray-400 line-through">$30</span>
            </p>
            <Image
              src={cart}
              alt="cart"
              width={44}
              height={44}
              className="mt-4 cursor-pointer"
            />
          </div>

          {/* Product 3 */}
          <div className="relative bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="relative">
              <Image
                src={Fea_Prod3}
                alt="Fea_Prod3"
                width={300}
                height={300}
                className="rounded-lg"
              />
             
            </div>
            <h2 className="text-[#007580] text-lg mt-3">Library Stool Chair</h2>
            <p className="text-xl font-bold mt-2">$20</p>
            <Image
              src={cart}
              alt="cart"
              width={44}
              height={44}
              className="mt-4 cursor-pointer"
            />
          </div>

          {/* Product 4 */}
          <div className="relative bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="relative">
              <Image
                src={Fea_Prod4}
                alt="Fea_Prod4"
                width={300}
                height={300}
                className="rounded-lg"
              />
              
            </div>
            <h2 className="text-[#007580] text-lg mt-3">Library Stool Chair</h2>
            <p className="text-xl font-bold mt-2">$20</p>
            <Image
              src={cart}
              alt="cart"
              width={44}
              height={44}
              className="mt-4 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
