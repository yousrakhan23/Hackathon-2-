import React from "react";
import Image from "next/image";
import sofa1 from "../public/images/sofa_1.png";
import sofa2 from "../public/images/sofa_2.png";
import sofa3 from "../public/images/sofa_3.png";

const OurPopularProducts = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-gray-800">
          Our Popular Products
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Product Item */}
          <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow">
            <Image src={sofa1} alt="Sofa 1" className="rounded-md" />
            <h3 className="mt-4 text-lg font-medium text-gray-700 uppercase">sueda sofa</h3>
          </div>

          <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow">
            <Image src={sofa2} alt="Sofa 2" className="rounded-md" />
            <h3 className="mt-4 text-lg font-medium text-gray-700 uppercase">dandy chair</h3>
          </div>

          <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow">
            <Image src={sofa3} alt="Sofa 3" className="rounded-md" />
            <h3 className="mt-4 text-lg font-medium text-gray-700 uppercase">wood chair</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPopularProducts;
