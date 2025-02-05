

// import { getProducts } from "@/sanity/lib/fetch";
// import Link from "next/link";
// import Image from "next/image";


// interface Product {
//   _id: string;
//   imageUrl: string;
//   title: string;
//   description: string;
//   price: number;
// }

// const ProductPage = async () => {

//   // Fetch products
//   const products: Product[] = await getProducts();

//   if (!products || products.length === 0) {
//     return (
//       <div className="text-center text-red-500 text-xl py-8">
//         No products found.
//       </div>
//     );
//   }

 

//   return (
//     <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       {products.map((product: Product) => (
//         <Link
//           key={product._id}
//           href={`/Product/${product._id}`}
//           className="block border border-gray-500 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200"
//         >
//           {/* Product Image */}
//           <Image
//             src={product.imageUrl}
//             alt={product.title}
//             className="w-full h-auto rounded-lg transition-transform duration-200 hover:scale-105"
//             width={300}
//             height={300}
//           />

//           {/* Product Info */}
//           <div className="p-4">
//             <h2 className="text-lg font-semibold text-gray-800">
//               {product.title}
//             </h2>
//             <p className="text-sm text-gray-500 truncate">
//               {product.description}
//             </p>
//             <p className="text-red-800 font-bold mt-2">${product.price}</p>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default ProductPage;

import React from "react";
import { getProducts } from "@/sanity/lib/fetch";
import Link from "next/link";
import Image from "next/image";

interface Product {
  _id: string;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
}

const ProductPage = async () => {
  try {
    // Fetch products
    const products: Product[] = await getProducts();

    if (!products || products.length === 0) {
      return (
        <div className="text-center text-red-500 text-xl py-8">
          No products found.
        </div>
      );
    }

    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              key={product._id}
              href={`/Product/${product._id}`}
              className="block border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Product Image */}
              {/* <div className="relative aspect-square w-full">
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  className="object-cover w-full h-full"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  priority={false}
                />
              </div> */}
              {/* Product Image */}
              <div className="relative aspect-square w-full">
                {product.imageUrl ? (
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    className="object-cover w-full h-full"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    priority={false}
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200">No image available</div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4 bg-white">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {product.title}
                </h2>
                <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                  {product.description}
                </p>
                <p className="text-lg font-bold text-[#029FAE]">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return (
      <div className="text-center text-red-500 text-xl py-8">
        Failed to load products. Please try again later.
      </div>
    );
  }
};

export default ProductPage;