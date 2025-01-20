// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import cart from "../../public/images/cart.png";
// import NewsLetter from "@/components/NewsLetter";

// interface Product {
//   _id: string;
//   imageUrl: string;
//   title: string;
//   price: number;
// }

// const Page = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch products from the API
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch("/api/products");
//         const data = await response.json();
//         setProducts(data); // Save the products data to state
//         setLoading(false);
//       } catch (error) {
//         console.error("Failed to fetch products:", error);
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);

//   if (loading) {
//     return <div className="text-center py-8">Loading products...</div>;
//   }

//   return (
//     <div className="bg-gray-50 min-h-screen p-4">
//       {/* Gallery Section */}
//       <div className="container mx-auto">
//         <h1 className="text-3xl font-bold text-center my-8">Our Product Gallery</h1>
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
//           {products.map((product) => (
//             <Link key={product._id} href={`/Product/${product._id}`}>
//               <div
//                 className="bg-white shadow-lg rounded-lg p-4 hover:scale-105 transform transition-all duration-300 cursor-pointer"
//               >
//                 {/* Product Image */}
//                 <Image
//                   src={product.imageUrl}
//                   alt={product.title}
//                   width={300}
//                   height={300}
//                   className="w-full h-auto rounded-md object-cover"
//                 />
//                 {/* Product Title and Price */}
//                 <h2 className="text-[#007580] text-lg mt-3">{product.title}</h2>
//                 <p className="text-xl font-bold mt-2">${product.price}</p>
//                 {/* Cart Icon */}
//                 <Image
//                   src={cart}
//                   alt="cart"
//                   width={44}
//                   height={44}
//                   className="mt-4"
//                 />
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>

//       {/* Newsletter Section */}
//       <div className="bg-gray-100 mt-12 p-8">
//         <div className="container mx-auto">
//           <NewsLetter />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;

import { getProducts } from "@/sanity/lib/fetch";
import Link from "next/link";

const ProductPage = async () => {
  // Fetch products
  const products = await getProducts();

  if (!products || products.length === 0) {
    return (
      <div className="text-center text-red-500 text-xl py-8">
        No products found.
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product: any) => (
        <Link
          key={product._id}
          href={`/Product/${product._id}`}
          className="block border rounded-lg overflow-hidden shadow hover:shadow-lg"
        >
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-bold">{product.title}</h2>
            <p className="text-sm text-gray-500 truncate">{product.description}</p>
            <p className="text-green-600 font-semibold mt-2">${product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductPage;
