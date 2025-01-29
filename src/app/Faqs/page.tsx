"use client";
import React from "react";
import { Inter } from "next/font/google";

const fontInter700 = Inter({ weight: "700", subsets: ["latin"] });
const fontInter400 = Inter({ weight: "400", subsets: ["latin"] });

// FAQs Data Array with accurate answers
const faqsData = [
  {
    question: "What types of chairs do you offer?",
    answer:
      "We offer a wide variety of chairs, including ergonomic office chairs, adjustable task chairs, executive chairs, and lounge chairs. Each chair is designed with comfort and durability in mind to support different work environments.",
  },
  {
    question: "How can we get in touch with you?",
    answer:
      "You can reach us through our contact page, where we offer multiple communication channels, including email, phone, and live chat support. We also have a presence on social media platforms for quick queries.",
  },
  {
    question: "Do your chairs come with a warranty?",
    answer:
      "Yes, all our chairs come with a 5-year warranty, covering manufacturing defects. This warranty includes free replacement parts and repair services, ensuring you get the best experience with our products.",
  },
  {
    question: "What will be delivered? And When?",
    answer:
      "When you place an order, you will receive the chair(s) you selected along with any assembly tools if required. Delivery times vary by location, but typically, orders are delivered within 5-7 business days.",
  },
  {
    question: "Can I try a chair before purchasing?",
    answer:
      "We offer showrooms in select locations where you can experience our chairs in person. Alternatively, we offer a 30-day return policy, allowing you to try the chair at home and return it if it doesn’t meet your needs.",
  },
  {
    question: "How do I clean and maintain my Comforty chair?",
    answer:
      "To clean your Comforty chair, use a damp cloth to wipe the fabric or leather. For fabric chairs, you can use mild soap or fabric cleaner. Regularly adjust the chair's height and tilt mechanisms to ensure smooth operation.",
  },
];

const Faqs = () => {
  return (
    <div className="px-4 md:px-16 lg:px-24 py-8">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h1
          className={`${fontInter700.className} text-[32px] md:text-[48px] text-[#333333]`}
        >
          Frequently Asked Questions
        </h1>
        <p
          className={`${fontInter400.className} text-[14px] md:text-[16px] text-[#333333] mt-2`}
        >
          Find the answers to the most common questions our customers ask
          about our products and services.
        </p>
      </div>

      {/* FAQs Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqsData.map((faq, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg shadow-md bg-[#80bbd8] hover:shadow-lg transition-shadow"
          >
            <h1 className="text-[18px] font-semibold flex justify-between items-center text-[#333333]">
              {faq.question}
              <span className="text-[#3498db] text-[24px] cursor-pointer">+</span>
            </h1>
            <p className="text-[14px] text-[#666666] mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
