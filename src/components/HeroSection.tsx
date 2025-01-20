"use client";
import React from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import Image from "next/image";
import hero_section from "@/public/images/herosectionImg.png";
import { Inter } from "next/font/google";
import hero_logo1 from "@/public/images/heroLogo1.png";
import hero_logo2 from "@/public/images/heroLogo2.png";
import hero_logo3 from "@/public/images/heroLogo3.png";
import hero_logo4 from "@/public/images/heroLogo4.png";
import hero_logo5 from "@/public/images/heroLogo5.png";
import hero_logo6 from "@/public/images/heroLogo6.png";
import hero_logo7 from "@/public/images/heroLogo7.png";
import FeaturedProducts from "./FeaturedProducts";
import TopCategories from "./TopCategories";
import ExploreNewProducts from "./ExploreNewProducts";
import OurProducts from "./OurProducts";

const fontInter400 = Inter({ weight: "400", subsets: ["latin"] });
const fontInter700 = Inter({ weight: "700", subsets: ["latin"] });

const HeroSection = () => {
  const router = useRouter(); // Initialize useRouter

  const handleShopNow = () => {
    router.push("/Product"); // Navigate to the Product page
  };

  return (
    <div>
      <div className="h-[550px] bg-[#F0F2F3] flex flex-col lg:flex-row items-center lg:justify-center">
        <div className="text-center lg:text-left lg:top-[229px] lg:left-[70px]">
          <p
            className={`${fontInter400} uppercase text-[#272343] pt-4 text-[14px] lg:pt-9 lg:ml-[25rem]`}
          >
            Welcome to Chairy
          </p>
          <h1
            className={`${fontInter700.className} text-[#272343] text-[32px] sm:text-[60px] w-full lg:w-[557px] lg:h-[198px] lg:top-[267px] lg:left-[70px] lg:mx-[24rem]`}
          >
            Best Furniture Collection For Your Interior.
          </h1>
          <div className="w-[171px] h-[52px] pt-4 mx-auto lg:pt-[6rem] lg:ml-[24rem]">
            <button
              onClick={handleShopNow} // Add onClick handler
              className={`${fontInter400.className} text-[#FFFFFF] bg-[#029FAE] w-[171px] h-[52px] rounded-[8px]`}
            >
              Shop Now {"->"}
            </button>
          </div>
        </div>
        <div className="mt-8 lg:mt-0 lg:absolute lg:top-[290px] lg:right-0 lg:left-[1100px]">
          <Image
            src={hero_section}
            alt="hero_section"
            width={360}
            height={574}
            className="mx-auto lg:mx-0 scale-50 sm:scale-75 md:scale-100"
          />
        </div>
      </div>
      {/* logo images */}
      <div className="bg-white py-6 px-4">
        <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between gap-4 sm:gap-6 lg:gap-8">
          <Image
            src={hero_logo1}
            alt="hero_logo1"
            width={85}
            height={87}
            className=" sm:h-19"
          />
          <Image
            src={hero_logo2}
            alt="hero_logo2"
            width={107}
            height={109}
            className=" sm:h-19 "
          />
          <Image
            src={hero_logo3}
            alt="hero_logo3"
            width={135}
            height={139}
            className=" sm:h-19"
          />
          <Image
            src={hero_logo4}
            alt="hero_logo4"
            width={63}
            height={65}
            className="sm:h-19"
          />
          <Image
            src={hero_logo5}
            alt="hero_logo5"
            width={98}
            height={101}
            className=" sm:h-19"
          />
          <Image
            src={hero_logo6}
            alt="hero_logo6"
            width={113}
            height={115}
            className=" sm:h-19 "
          />
          <Image
            src={hero_logo7}
            alt="hero_logo1"
            width={84}
            height={87}
            className=" sm:h-19"
          />
        </div>
      </div>
      <div>
        <FeaturedProducts />
        <TopCategories />
        <ExploreNewProducts />
        <OurProducts />
      </div>
    </div>
  );
};

export default HeroSection;
