import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="relative w-32 h-32">
        <div
          className="absolute inset-0 animate-spin rounded-full border-8 border-t-transparent border-blue-500"
          style={{ animationDuration: "1.5s" }}
        ></div>
        <div
          className="absolute inset-0 animate-ping rounded-full border-8 border-transparent border-b-blue-500"
          style={{ animationDuration: "1.5s" }}
        ></div>
        <div
          className="absolute inset-4 animate-pulse rounded-full border-4 border-dashed border-gray-500"
          style={{ animationDuration: "2.5s" }}
        ></div>
        <div
          className="absolute inset-8 animate-bounce rounded-full border-2 border-dotted border-yellow-500"
          style={{ animationDuration: "2.5s" }}
        ></div>
      </div>
    </div>
  );
};

export default Loader;
