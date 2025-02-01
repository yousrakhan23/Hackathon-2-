// "use client";
// import React from "react";
// import Image from "next/image";
// import Fea_Prod2 from "@/public/images/fp_2.png";
// import Fea_Prod3 from "@/public/images/fp_3.png";

// const Cart = () => {
//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <main className="max-w-7xl mx-auto p-4 sm:p-6">
//         <h2 className="text-2xl font-bold mb-6">Bag</h2>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Cart Items Section */}
//           <div className="lg:col-span-2 space-y-4">
//             {/* Single Item */}
//             <div className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 shadow rounded">
//               {/* Product Image */}
//               <Image
//                 src={Fea_Prod3 }
//                 alt="Library Chair"
//                 width={150}
//                 height={150}
//                 className="rounded-md"
//               />
//               {/* Product Details */}
//               <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left flex-1">
//                 <h3 className="font-bold text-lg">Library Stool Chair</h3>
//                 <p className="text-sm text-gray-500">Ashen Slate/Cobalt Bliss</p>
//                 <p className="text-sm">Size: L</p>
//                 <p className="text-base font-semibold mt-2">MRP: $99</p>
//               </div>
//               {/* Remove Button */}
//               <button className="text-red-500 hover:underline mt-4 sm:mt-0">
//                 Remove
//               </button>
//             </div>

//             {/* Additional Items */}
//             <div className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 shadow rounded">
//               {/* Product Image */}
//               <Image
//                 src={Fea_Prod2}
//                 alt="Library Chair"
//                 width={150}
//                 height={150}
//                 className="rounded-md"
//               />
//               {/* Product Details */}
//               <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left flex-1">
//                 <h3 className="font-bold text-lg">Library Stool Chair</h3>
//                 <p className="text-sm text-gray-500">Ashen Slate/Cobalt Bliss</p>
//                 <p className="text-sm">Size: L</p>
//                 <p className="text-base font-semibold mt-2">MRP: $99</p>
//               </div>
//               {/* Remove Button */}
//               <button className="text-red-500 hover:underline mt-4 sm:mt-0">
//                 Remove
//               </button>
//             </div>
//           </div>

//           {/* Summary Section */}
//           <div className="bg-white p-6 shadow rounded space-y-4">
//             <h3 className="text-lg font-bold">Summary</h3>

//             <div className="flex justify-between">
//               <span>Subtotal</span>
//               <span>$198</span>
//             </div>

//             <div className="flex justify-between">
//               <span>Estimated Delivery & Handling</span>
//               <span>Free</span>
//             </div>

//             <div className="flex justify-between font-bold border-t pt-4">
//               <span>Total</span>
//               <span>$198</span>
//             </div>

//             <button className="bg-[#029FAE] text-white w-full py-2 rounded-full hover:bg-[#007e88] transition">
//               Member Checkout
//             </button>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Cart;

"use client";

import React, { useEffect, useState } from "react";
import {
  getCartItems,
  removeFromCart,
  updateCartQuantity,
} from "../actions/actions";
import { Product } from "@/sanity/types/products";
import Swal from "sweetalert2";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Cart = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire("Deleted!", "Your item has been deleted.", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) handleQuantityChange(id, product.inventory + 1);
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.inventory > 1)
      handleQuantityChange(id, product.inventory - 1);
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.inventory,
      0
    );
  };

  const router = useRouter();

  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to checkout?",
      text: "Please check your cart!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success", "Your order has been placed", "success");
        router.push("/Checkout")
        setCartItems([]);
      }
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500">Your cart is empty.</div>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex items-center justify-between border rounded-lg p-4 shadow-sm"
              >
                <div className="flex items-center space-x-4">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="w-16 h-16 rounded object-cover"
                  />
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h2>
                    <p className="text-sm text-gray-500">
                      ${item.price.toFixed(2)} each
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <button
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      onClick={() => handleDecrement(item._id)}
                    >
                      -
                    </button>
                    <span>{item.inventory}</span>
                    <button
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      onClick={() => handleIncrement(item._id)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => handleRemove(item._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 border-t">
            <div className="flex justify-between items-center text-lg font-semibold">
              <span>Total:</span>
              <span>${calculateTotal().toFixed(2)}</span>
            </div>
            <button
              className="w-full mt-4 py-2 bg-[#029FAE] text-white rounded-lg shadow hover:bg-[#30a0aa] transition ease-in-out duration-300"
              onClick={handleProceed}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
