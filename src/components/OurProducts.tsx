
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
// import cart from "@/public/images/cart.png";

const products = [
  { id: 1, image: Fea_Prod1, name: "Library Stool Chair", price: 20 },
  { id: 2, image: Fea_Prod2, name: "Wooden Stool Chair", price: 25 },
  { id: 3, image: Fea_Prod3, name: "Plastic Stool Chair", price: 15 },
  { id: 4, image: Fea_Prod4, name: "Metal Stool Chair", price: 30 },
  { id: 5, image: prod5, name: "Library Desk Chair", price: 50 },
  { id: 6, image: prod6, name: "Leather Chair", price: 60 },
  { id: 7, image: prod7, name: "Designer Chair", price: 80 },
];

const OurProducts = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Our Products
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="aspect-square bg-gray-100 relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  priority={product.id <= 4}
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <div className="flex justify-between items-center">
                  <p className="text-xl font-bold text-[#007580]">
                    ${product.price}
                  </p>
                  <button
                    className="p-2 bg-[#007580] text-white rounded-full hover:bg-[#005f69] transition-colors duration-200"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProducts;