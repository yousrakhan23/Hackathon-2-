"use client";
import React from "react";
import Image from "next/image";
import Fea_Prod1 from "@/public/images/fp_1.png";
import Fea_Prod2 from "@/public/images/fp_2.png";
import Fea_Prod3 from "@/public/images/fp_3.png";
import Fea_Prod4 from "@/public/images/fp_4.png";
import prod5 from "@/public/images/Image (4).png";
import prod6 from "@/public/images/card (1).png";
import prod7 from "@/public/images/Image (7).png";
import cart from "@/public/images/cart.png";


const OurProducts = () => {
  return (
    <div className="py-10 px-6">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          Our Products
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-center items-center">
          {/* Product 1 */}
          <div className="text-center">
            <Image
              src={Fea_Prod1}
              alt="Product 1"
              width={200}
              height={200}
              className="w-auto h-auto rounded-lg"
            />
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
          <div className="text-center">
            <Image
              src={Fea_Prod2}
              alt="Product 2"
              width={200}
              height={200}
              className="w-auto h-auto rounded-lg"
            />
            <h2 className="text-[#007580] text-lg mt-3">Wooden Stool Chair</h2>
            <p className="text-xl font-bold mt-2">$25</p>
            <Image
              src={cart}
              alt="cart"
              width={44}
              height={44}
              className="mt-4 cursor-pointer"
            />
          </div>
          {/* Product 3 */}
          <div className="text-center">
            <Image
              src={Fea_Prod3}
              alt="Product 3"
              width={200}
              height={200}
              className="w-auto h-auto rounded-lg"
            />
            <h2 className="text-[#007580] text-lg mt-3">Plastic Stool Chair</h2>
            <p className="text-xl font-bold mt-2">$15</p>
            <Image
              src={cart}
              alt="cart"
              width={44}
              height={44}
              className="mt-4 cursor-pointer"
            />
          </div>
          {/* Product 4 */}
          <div className="text-center">
            <Image
              src={Fea_Prod4}
              alt="Product 4"
              width={200}
              height={200}
              className="w-auto h-auto rounded-lg"
            />
            <h2 className="text-[#007580] text-lg mt-3">Metal Stool Chair</h2>
            <p className="text-xl font-bold mt-2">$30</p>
            <Image
              src={cart}
              alt="cart"
              width={44}
              height={44}
              className="mt-4 cursor-pointer"
            />
          </div>
          {/* Product 5 */}
          <div className="text-center">
            <Image
              src={prod5}
              alt="Product 5"
              width={200}
              height={200}
              className="w-auto h-auto rounded-lg"
            />
            <h2 className="text-[#007580] text-lg mt-3">Library Desk Chair</h2>
            <p className="text-xl font-bold mt-2">$50</p>
            <Image
              src={cart}
              alt="cart"
              width={44}
              height={44}
              className="mt-4 cursor-pointer"
            />
          </div>
          {/* Product 6 */}
          <div className="text-center">
            <Image
              src={prod6}
              alt="Product 6"
              width={200}
              height={200}
              className="w-auto h-auto rounded-lg"
            />
            <h2 className="text-[#007580] text-lg mt-3">Leather Chair</h2>
            <p className="text-xl font-bold mt-2">$60</p>
            <Image
              src={cart}
              alt="cart"
              width={44}
              height={44}
              className="mt-4 cursor-pointer"
            />
          </div>
          <div className="text-center">
            <Image
              src={prod6}
              alt="Product 6"
              width={200}
              height={200}
              className="w-auto h-auto rounded-lg"
            />
            <h2 className="text-[#007580] text-lg mt-3">Leather Chair</h2>
            <p className="text-xl font-bold mt-2">$60</p>
            <Image
              src={cart}
              alt="cart"
              width={44}
              height={44}
              className="mt-4 cursor-pointer"
            />
          </div>
          {/* Product 7 */}
          <div className="text-center">
            <Image
              src={prod7}
              alt="Product 7"
              width={200}
              height={200}
              className="w-auto h-auto rounded-lg"
            />
            <h2 className="text-[#007580] text-lg mt-3">Designer Chair</h2>
            <p className="text-xl font-bold mt-2">$80</p>
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

export default OurProducts;
