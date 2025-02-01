"use client";
import React from "react";
import Image from "next/image";
import category1 from "@/public/images/item-category 1.png";
import Fea_Prod4 from "@/public/images/fp_4.png";
import Fea_Prod1 from "@/public/images/fp_1.png";
import categ2 from "@/public/images/card (1).png";
import { Roboto } from "next/font/google";

const fontRoboto = Roboto({ weight: "400", subsets: ["latin"] });

const ExploreNewProducts = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className={`${fontRoboto.className} max-w-7xl mx-auto`}>
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 uppercase mb-8">
          Explore New and Popular Styles
        </h1>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Large Image */}
          <div className="lg:col-span-2">
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src={category1}
                alt="Large Featured Image"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Small Images Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {[
              { src: Fea_Prod4, alt: "Product 4" },
              { src: Fea_Prod1, alt: "Product 1" },
              { src: Fea_Prod1, alt: "Product 1 (Duplicate)" },
              { src: categ2, alt: "Category 2" },
            ].map((image, index) => (
              <div
                key={index}
                className="relative w-full h-40 sm:h-48 md:h-56 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreNewProducts;