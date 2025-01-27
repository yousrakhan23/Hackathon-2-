import React from "react";
import Image from "next/image";
import sofa1 from "../../public/images/fp_3.png";
import sofa2 from "../../public/images/sofa_2.png";
import sofa3 from "../../public/images/sofa_3.png";
const Wishlist = () => {
  const wishlistItems = [
    { id: 1, name: "Modern Sofa", price: "$450", image: sofa1 },
    { id: 2, name: "Classic Armchair", price: "$220", image: sofa2 },
    { id: 3, name: "Stylish Ottoman", price: "$150", image: sofa3 },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800">Your Wishlist</h1>
        <p className="text-blue-600 transition duration-200 hover:text-blue-800 text-sm md:text-base">
          Browse and save your favorite furniture pieces!
        </p>
      </div>

      {/* Wishlist Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlistItems.length > 0 ? (
          wishlistItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200"
            >
              {/* Product Image */}
              <div className="h-48 bg-gray-200">
                <Image
                  src={item.image}
                  alt={item.name}
                  height={192}
                  width={192}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Details */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-gray-600">{item.price}</p>
                <button className="mt-4 w-full bg-[#52a1c9] hover:bg-[#64a5c4] text-white font-medium py-2 rounded-lg transition duration-200">
                  Remove from Wishlist
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            Your wishlist is empty.
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
