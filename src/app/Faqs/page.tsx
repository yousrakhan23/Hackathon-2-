"use client";
import React, { useState } from "react";
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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="px-4 md:px-16 lg:px-24 py-12 bg-gray-50">
      {/* Heading Section */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className={`${fontInter700.className} text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4`}>
          Frequently Asked Questions
        </h1>
        <p className={`${fontInter400.className} text-gray-600 text-base md:text-lg`}>
          Find answers to common questions about our products, services, and policies.
        </p>
      </div>

      {/* FAQs Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqsData.map((faq, index) => (
          <div
            key={index}
            className="group transition-all duration-300 bg-gradient-to-br from-[#e9ecef] to-[#40d5e2]  rounded-xl shadow-sm hover:shadow-lg border border-gray-200"
          >
            <div
              className="p-6 md:p-8 cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex justify-between items-start">
                <h3 className={`${fontInter700.className} text-lg md:text-xl text-gray-900 pr-4`}>
                  {faq.question}
                </h3>
                <span className="text-2xl text-blue-600 ml-2 transform transition-transform duration-300">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </div>
            </div>
            
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 md:px-8 pb-6 md:pb-8">
                <p className={`${fontInter400.className} text-gray-600 leading-relaxed`}>
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;