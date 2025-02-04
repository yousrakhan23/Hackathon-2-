"use client";
import React from "react";
import Image from "next/image";
import category1 from "@/public/images/item-category 1.png";
import Fea_Prod4 from "@/public/images/fp_4.png";
import Fea_Prod1 from "@/public/images/fp_1.png";
import categ2 from "@/public/images/card (1).png";
import { Roboto } from "next/font/google";
import Link from "next/link";

const fontRoboto = Roboto({ weight: "400", subsets: ["latin"] });

const ExploreNewProducts = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#e9ecef] via-[#b8e4eb] to-[#40d5e2]">
      <div className={`${fontRoboto.className} max-w-7xl mx-auto`}>
        {/* Animated Heading */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 uppercase mb-4 animate-fade-in-down">
            Discover{" "}
            <span className="bg-gradient-to-r from-[#007580] to-[#40d5e2] text-transparent bg-clip-text">
              Innovative Designs
            </span>
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Experience the perfect blend of ergonomics and contemporary
            aesthetics
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Featured Product */}
          <div className="lg:col-span-2 relative group">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
              <Image
                src={category1}
                alt="Featured Design"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              {/* Floating Label */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm">
                <span className="text-xl font-bold text-[#007580]">
                  2024 Collection
                </span>
              </div>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <div className="text-white space-y-2 translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-3xl font-bold">Aurora Series</h3>
                  <p className="text-lg">Premium ergonomic seating solutions</p>
                  <Link href={"/Product"}>
                    <button className="mt-4 px-6 py-3 bg-white text-[#007580] rounded-full font-semibold hover:bg-[#007580] hover:text-white transition-colors">
                      Explore Collection
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Products Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {[
              { src: Fea_Prod4, title: "Metro Lounge", price: "$599" },
              { src: Fea_Prod1, title: "Urban Stool", price: "$299" },
              { src: Fea_Prod1, title: "Modern Bench", price: "$449" },
              { src: categ2, title: "Vintage Armchair", price: "$799" },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-lg font-medium">{item.price}</p>
                  </div>
                </div>
                {/* Top Right Badge */}
                <div className="absolute top-4 right-4 rotate-12 bg-white/90 px-3 py-1 rounded-full text-sm font-bold text-[#007580] shadow-sm">
                  New
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating CTA */}
        <div className="mt-12 flex justify-center">
          <Link href={"/Product"}>
            <button className="px-8 py-4 bg-[#007580] text-white rounded-full font-bold text-lg hover:bg-[#005f69] transition-colors duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transform">
              View All Collections →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExploreNewProducts;
