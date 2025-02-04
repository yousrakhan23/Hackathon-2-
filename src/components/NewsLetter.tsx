"use client";
import React from "react";
import Image from "next/image";
import img1 from "@/public/images/Image (5).png";
import img2 from "@/public/images/Image (4).png";
import img3 from "@/public/images/fp_2.png";
import img4 from "@/public/images/fp_3.png";
import img5 from "@/public/images/fp_1.png";
import img6 from "@/public/images/Image (6).png";

const NewsLetter = () => {
  return (
    <section className="bg-gradient-to-br from-[#e9ecef] to-[#40d5e2]  py-12">
      {/* Container */}
      <div className="max-w-6xl mx-auto px-6">
        {/* Newsletter Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 mt-2">
            Stay updated with the latest products and discounts.
          </p>
        </div>

        {/* Subscription Form */}
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <input
            type="email"
            placeholder="Email Address..."
            className="w-full sm:w-2/3 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3  text-black font-semibold rounded-lg  transition"
          >
            Submit
          </button>
        </form>

        {/* Instagram Section */}
        <div>
          <h3 className="text-center text-2xl font-medium text-gray-800 mb-8">
            Follow Products and Discounts on Instagram
          </h3>

          {/* Product Images Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            <Image
              src={img1}
              alt="Product 1"
              width={150}
              height={150}
              className="rounded-lg shadow-lg hover:scale-105 transition transform"
            />
            <Image
              src={img2}
              alt="Product 2"
              width={150}
              height={150}
              className="rounded-lg shadow-lg hover:scale-105 transition transform"
            />
            <Image
              src={img3}
              alt="Product 3"
              width={150}
              height={150}
              className="rounded-lg shadow-lg hover:scale-105 transition transform"
            />
            <Image
              src={img4}
              alt="Product 4"
              width={150}
              height={150}
              className="rounded-lg shadow-lg hover:scale-105 transition transform"
            />
            <Image
              src={img5}
              alt="Product 5"
              width={150}
              height={150}
              className="rounded-lg shadow-lg hover:scale-105 transition transform"
            />
            <Image
              src={img6}
              alt="Product 6"
              width={150}
              height={150}
              className="rounded-lg shadow-lg hover:scale-105 transition transform"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
