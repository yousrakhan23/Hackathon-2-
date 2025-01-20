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

const ProductDetail = async ({ params }: { params: { id: string } }) => {
  const products = await getProducts();
  const product = products.find((p: any) => p._id === params.id);

  if (!product) {
    return notFound(); // Show a 404 page if the product is not found
  }

  return (
    <div className="container mx-auto p-4">
      <img
        src={product.imageUrl}
        alt={product.title}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h1 className="text-3xl font-bold mt-4">{product.title}</h1>
      <p className="text-gray-700 text-lg mt-2">{product.description}</p>
      <p className="text-green-600 text-xl font-semibold mt-4">${product.price}</p>
      <p className="text-sm text-gray-500 mt-2">Stock: {product.inventory}</p>
    </div>
  );
};

export default ProductDetail;
