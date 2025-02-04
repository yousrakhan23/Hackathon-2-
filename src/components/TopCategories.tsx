"use client";
import React from "react";
import Image from "next/image";
import top_cat1 from "@/public/images/Image (4).png";
import top_cat2 from "@/public/images/Image (5).png";
import top_cat3 from "@/public/images/Image (6).png";
import { Inter } from "next/font/google";
import Link from "next/link";

const fontInter700 = Inter({ weight: "700", subsets: ["latin"] });

const TopCategories = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className={`max-w-7xl mx-auto ${fontInter700.className}`}>
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#272343] mb-4">
            Premium Seating Collections
          </h1>
          <p className="text-gray-600 text-lg">
            Explore our curated selection of ergonomic masterpieces
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Category 1 */}
          <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="aspect-square relative overflow-hidden">
              <Image
                src={top_cat1}
                alt="Modern Office Chair"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Link href={"/Product"}>
                  <button className="px-6 py-3 bg-white text-[#272343] rounded-full font-semibold hover:bg-[#007580] hover:text-white transition-colors duration-200">
                    View Collection →
                  </button>
                </Link>
              </div>
            </div>
            <div className="p-6 text-center">
              <h2 className="text-xl font-bold text-[#272343] mb-2">
                Executive Office Chairs
              </h2>
              <p className="text-gray-600">3,584 Premium Designs</p>
            </div>
          </div>

          {/* Category 2 */}
          <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="aspect-square relative overflow-hidden">
              <Image
                src={top_cat2}
                alt="Wooden Chair"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Link href={"/Product"}>
                  <button className="px-6 py-3 bg-white text-[#272343] rounded-full font-semibold hover:bg-[#007580] hover:text-white transition-colors duration-200">
                    View Collection →
                  </button>
                </Link>
              </div>
            </div>
            <div className="p-6 text-center">
              <h2 className="text-xl font-bold text-[#272343] mb-2">
                Artisan Wooden Chairs
              </h2>
              <p className="text-gray-600">175 Handcrafted Pieces</p>
            </div>
          </div>

          {/* Category 3 */}
          <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="aspect-square relative overflow-hidden">
              <Image
                src={top_cat3}
                alt="Desk Chair"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Link href={"/Product"}>
                  <button className="px-6 py-3 bg-white text-[#272343] rounded-full font-semibold hover:bg-[#007580] hover:text-white transition-colors duration-200">
                    View Collection →
                  </button>
                </Link>
              </div>
            </div>
            <div className="p-6 text-center">
              <h2 className="text-xl font-bold text-[#272343] mb-2">
                Ergonomic Desk Chairs
              </h2>
              <p className="text-gray-600">154 Advanced Models</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
