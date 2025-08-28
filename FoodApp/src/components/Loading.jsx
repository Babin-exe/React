import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-wrap justify-center p-4">
      {Array(10)
        .fill("")
        .map((_, idx) => (
          <div
            key={idx}
            className="border rounded-lg p-4 shadow-md w-64 h-72 m-2 overflow-hidden bg-gray-200"
          >
            {/* Image placeholder */}
            <div className="h-32 rounded mb-3 shimmer-bg"></div>

            {/* Text placeholders */}
            <div className="h-4 rounded w-3/4 mb-2 shimmer-bg"></div>
            <div className="h-4 rounded w-1/2 mb-2 shimmer-bg"></div>
            <div className="h-4 rounded w-1/4 shimmer-bg"></div>
          </div>
        ))}
    </div>
  );
};

export default Loading;
