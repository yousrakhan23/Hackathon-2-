"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Comments from "@/components/Comments";

const NeedHelp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#76a9db] to-[#e9ecef] flex flex-col items-center justify-center px-6 sm:px-12">
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#2c3e50] text-center mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Need Help?
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl text-[#495057] text-center max-w-2xl mb-8"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        We are here to assist you! Whether you have questions about our Comforty Sofa products or need assistance with your orders, our team is ready to help.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      >
        <Link href="/Contact">
        <button className="px-6 py-3 bg-[#3498db] text-white text-lg font-medium rounded-2xl shadow-md hover:bg-[#2980b9] transition-all duration-300">
          Contact Us
        </button>
        </Link>
        <Link href="/Faqs">
        <button className="px-6 py-3 bg-[#2ecc71] text-white text-lg font-medium rounded-2xl shadow-md hover:bg-[#27ae60] transition-all duration-300">
          FAQs
        </button>
        </Link>
        <Link href="/LiveChat">
        <button className="px-6 py-3 bg-[#1c70a8] text-white text-lg font-medium rounded-2xl shadow-md hover:bg-sky-800 transition-all duration-300">
          Live Chat
        </button>
        </Link>
      </motion.div>

      <motion.div
        className="mt-12 w-full max-w-4xl p-6 bg-white rounded-2xl shadow-lg border border-[#dee2e6]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
      >
        <h2 className="text-2xl font-semibold text-[#2c3e50] mb-4">
          Common Questions
        </h2>
        <ul className="space-y-3">
          <li className="p-4 bg-[#f8f9fa] rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
            <strong>How can I track my order?</strong>
            <p className="text-sm text-[#6c757d] mt-2">
              Once your order is shipped, you will receive a tracking link via email or SMS. Use the link to view real-time updates on your delivery.
            </p>
          </li>
          <li className="p-4 bg-[#f8f9fa] rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
            <strong>What is the return policy for Comforty Sofa?</strong>
            <p className="text-sm text-[#6c757d] mt-2">
              We offer a 30-day return policy for unused and undamaged items. Please visit our Returns & Refunds page for detailed instructions.
            </p>
          </li>
          <li className="p-4 bg-[#f8f9fa] rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
            <strong>Do you offer international shipping?</strong>
            <p className="text-sm text-[#6c757d] mt-2">
              Yes, we ship to select countries. Shipping fees and delivery times may vary based on your location. Contact our support team for more details.
            </p>
          </li>
        </ul>
        
      </motion.div>
      <div>
        <Comments />
      </div>
    </div>
  );
};

export default NeedHelp;
