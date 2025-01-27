"use client";
import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import about_img from "@/public/images/Image Block.png";
import OurPopularProducts from "@/components/OurPopularProducts";
import Link from "next/link";

const fontInter700 = Inter({ weight: "700", subsets: ["latin"] });
const fontInter400 = Inter({ weight: "400", subsets: ["latin"] });
const fontInter600 = Inter({ weight: "600", subsets: ["latin"] });

const About = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      {/* About Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-6 mt-8 lg:mt-16">
        <div className="bg-[#007580] flex flex-col justify-center text-white p-6 lg:p-12 rounded-lg lg:w-1/2">
          <h1
            className={`${fontInter700.className} text-2xl lg:text-4xl mb-4`}
          >
            About Us - Comforty
          </h1>
          <p className={`${fontInter400.className} text-lg mb-6`}>
            At Comforty, we believe that the right chair can transform your
            space and elevate your comfort. Specializing in ergonomic design,
            premium materials, and modern aesthetics, we craft chairs that
            seamlessly blend style with functionality.
          </p>
          <Link href="/Product">
          <div>
          <button className="w-fit px-6 py-3 bg-[#029FAE] text-lg rounded-lg hover:bg-[#027C8D]">
            View Collection
          </button></div></Link>
        </div>
        <div className="lg:w-1/2">
          <Image
            src={about_img}
            alt="About us"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* What Makes Us Different */}
      <div className="mt-16 text-center">
        <h1 className={`${fontInter600.className} text-2xl lg:text-4xl mb-6`}>
          What Makes Our Brand Different
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-[#F9F9F9] p-6 rounded-lg">
          {/* Reusable Feature Card */}
          {[
            {
              title: "Next Day as Standard",
              description:
                "Order before 3pm and get your order the next day as standard.",
              icon: (
                <path d="M12 12H3V13.5H12V12Z" fill="#007580" />
              ),
            },
            {
              title: "Made by True Artisans",
              description:
                "Handmade crafted goods made with real passion and craftsmanship.",
              icon: (
                <path d="M11.3779 16.0605L7.62793 12.3097L8.68769 11.25L11.3779 13.9395L17.0667 8.25L18.1279 9.31125L11.3779 16.0605Z" fill="#007580" />
              ),
            },
            {
              title: "Unbeatable Prices",
              description:
                "For our materials and quality, you won’t find better prices anywhere.",
              icon: (
                <path d="M21.6963 4.5H3.69629C3.29846 4.5 2.91693 4.65804 2.63563 4.93934C2.35432 5.22064 2.19629 5.60218 2.19629 6V18C2.19629 18.3978 2.35432 18.7794 2.63563 19.0607C2.91693 19.342 3.29846 19.5 3.69629 19.5H21.6963C22.0941 19.5 22.4756 19.342 22.7569 19.0607C23.0383 18.7794 23.1963 18.3978 23.1963 18V6C23.1963 5.60218 23.0383 5.22064 22.7569 4.93934C22.4756 4.65804 22.0941 4.5 21.6963 4.5Z" fill="#007580" />
              ),
            },
            {
              title: "Eco-Friendly Materials",
              description:
                "Crafted with care for the environment, using sustainable materials.",
              icon: (
                <path d="M19.2949 1.5C17.6327 1.50275 16.01 2.00708 14.6391 2.94704..." fill="#007580" />
              ),
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md"
            >
              <svg
                width="48"
                height="48"
                fill="none"
                className="mb-4"
                xmlns="http://www.w3.org/2000/svg"
              >
                {feature.icon}
              </svg>
              <h2 className="text-lg font-semibold text-[#007580] mb-2">
                {feature.title}
              </h2>
              <p className="text-[#007580] text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div><OurPopularProducts /> </div>
    </div>
  );
};

export default About;
