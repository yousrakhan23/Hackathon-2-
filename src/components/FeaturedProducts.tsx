"use client";
import React from "react";
import Image from "next/image";
import Fea_Prod1 from "@/public/images/fp_1.png";
import Fea_Prod2 from "@/public/images/fp_2.png";
import Fea_Prod3 from "@/public/images/fp_3.png";
import Fea_Prod4 from "@/public/images/fp_4.png";
// import cart from "@/public/images/cart.png"
// import green_button from "@/public/images/Products Status.png";
// import orange_button from "@/public/images/Products Status (1).png";
import { Inter } from "next/font/google";

const fontInter = Inter({ subsets: ["latin"] });

const products = [
  { 
    id: 1,
    image: Fea_Prod1,
    name: "Ergonomic Library Stool",
    price: 249,
    status: "green",
    discount: null
  },
  { 
    id: 2,
    image: Fea_Prod2,
    name: "Premium Wooden Stool",
    price: 199,
    originalPrice: 299,
    status: "orange",
    discount: "33% OFF"
  },
  { 
    id: 3,
    image: Fea_Prod3,
    name: "Modern Plastic Stool",
    price: 99,
    status: null,
    discount: null
  },
  { 
    id: 4,
    image: Fea_Prod4,
    name: "Industrial Metal Stool",
    price: 179,
    status: "green",
    discount: "NEW"
  },
];

const FeaturedProducts = () => {
  return (
    <div className={`py-16 px-4 sm:px-6 lg:px-8  bg-gradient-to-br from-[#e9ecef] to-[#40d5e2] ${fontInter.className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Crafted Excellence
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our curated collection of premium seating solutions blending comfort and contemporary design.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 ease-out"
            >
              {/* Product Image Container */}
              <div className="aspect-square bg-gray-50 relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                
                {/* Status Badge */}
                {product.status && (
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${
                    product.status === 'green' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-orange-100 text-orange-800'
                  }`}>
                    {product.discount || 'New Arrival'}
                  </div>
                )}
              </div>

              {/* Product Details */}
              <div className="p-6 pt-4 space-y-3">
                <h2 className="text-xl font-semibold text-gray-900">
                  {product.name}
                </h2>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-[#007580]">
                      ${product.price}
                    </p>
                    {product.originalPrice && (
                      <p className="text-gray-400 line-through text-sm">
                        ${product.originalPrice}
                      </p>
                    )}
                  </div>
                  
                  <button 
                    className="p-3 bg-[#007580] rounded-full hover:bg-[#005f69] transition-colors duration-200"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    <svg 
                      className="w-6 h-6 text-white" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
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

export default FeaturedProducts;