// "use client";
// import React, { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import Image from "next/image";

// interface Product {
//   _id: string;
//   imageUrl: string;
//   title: string;
//   price: number;
//   description: string;
//   inventory: number;
// }

// const ProductDetail = () => {
//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState(true);
//   const params = useParams();
//   const { id } = params;

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await fetch(`/api/products?id=${id}`);
//         const data = await response.json();
  
//         if (response.ok && data) {
//           setProduct(data);
//         } else {
//           setProduct(null); // No product found
//         }
//       } catch (error) {
//         console.error("Error fetching product:", error);
//         setProduct(null); // Handle error
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     if (id) fetchProduct();
//   }, [id]);
  

//   if (loading) {
//     return <div className="text-center py-8">Loading product...</div>;
//   }

//   if (!product) {
//     return <div className="text-center py-8">Product not found</div>;
//   }

//   return (
//     <div className="container mx-auto p-8">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Product Image */}
//         <div>
//           <Image
//             src={product.imageUrl}
//             alt={product.title}
//             width={500}
//             height={500}
//             className="w-full h-auto rounded-md object-cover"
//           />
//         </div>

//         {/* Product Details */}
//         <div>
//           <h1 className="text-3xl font-bold">{product.title}</h1>
//           <p className="text-lg mt-2 text-gray-600">{product.description}</p>
//           <p className="text-xl font-bold mt-4">${product.price}</p>
//           <p className="text-sm text-gray-500 mt-2">Inventory: {product.inventory}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;

import { getProducts } from "@/sanity/lib/fetch";
import { notFound } from "next/navigation";
import Image from "next/image";

interface Product {
  _id: string;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  inventory: number;
}

const ProductDetail = async ({ params }: { params: { id: string } }) => {
  const products: Product[] = await getProducts();
  const product = products.find((p: Product) => p._id === params.id);

  if (!product) {
    return notFound(); // Show a 404 page if the product is not found
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Image Section */}
        <div className="flex justify-center">
          <Image
            src={product.imageUrl}
            alt={product.title}
            className="w-full max-w-md h-auto rounded-lg object-cover shadow-md"
            width={500}
            height={500}
          />
        </div>

        {/* Product Details Section */}
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-lg text-gray-600 leading-relaxed">{product.description}</p>
          <p className="text-2xl font-semibold text-green-600">${product.price}</p>
          <p className="text-sm text-gray-500">Stock: {product.inventory}</p>
          <button className="px-6 py-3 mt-6 text-white bg-black rounded-md shadow hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

