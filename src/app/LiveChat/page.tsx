"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const LiveChat = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>(
    []
  );
  const [input, setInput] = useState("");

  const generateBotResponse = (userMessage: string) => {
    if (userMessage.toLowerCase().includes("order")) {
      return "You can track your order by visiting the 'Order Tracking' page in your account.";
    } else if (userMessage.toLowerCase().includes("return")) {
      return "We offer a 30-day return policy for unused and undamaged items. Please visit our Returns page for more details.";
    } else if (userMessage.toLowerCase().includes("shipping")) {
      return "We provide free shipping on all orders over $50. For international shipping, fees may apply.";
    } else {
      return "Thank you for reaching out! Could you please provide more details about your query?";
    }
  };

  const handleSendMessage = () => {
    if (input.trim() !== "") {
      const userMessage = input;
      setMessages([...messages, { sender: "user", text: userMessage }]);
      setInput("");

      // Simulate bot response
      setTimeout(() => {
        const botResponse = generateBotResponse(userMessage);
        setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e9ecef] to-[#40d5e2] flex flex-col items-center justify-center px-6 sm:px-12">
      <motion.h1
        className="text-4xl sm:text-5xl font-bold text-[#2c3e50] mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Live Chat Support
      </motion.h1>

      <motion.div
        className="w-full max-w-3xl bg-white rounded-2xl shadow-lg border border-[#dee2e6] flex flex-col overflow-hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <div
          className="flex-1 overflow-y-auto p-6 space-y-4"
          style={{ maxHeight: "60vh" }}
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-4 py-2 text-sm rounded-lg shadow-md max-w-[75%] ${
                  message.sender === "user"
                    ? "bg-[#029FAE] text-white"
                    : "bg-[#ecf0f1] text-[#2c3e50]"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 bg-[#f8f9fa] border-t border-[#dee2e6]">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg border border-[#ced4da] focus:outline-none focus:ring-2 focus:ring-[#3498db] focus:border-transparent"
            />
            <button
              onClick={handleSendMessage}
              className="w-full md:w-auto px-6 py-3 bg-[#029FAE] text-white text-lg font-medium rounded-lg shadow-md hover:bg-[#85ceff] transition-all duration-300"
            >
              Send
            </button>
          </div>
        </div>
      </motion.div>
     
    </div>
  );
};

export default LiveChat;
