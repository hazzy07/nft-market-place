import React from "react";

export default function Galleries() {
  const skeletonCards = Array(4).fill(null);
  return (
    <>
      <div className="space-y-3">
        {/* Header Section */}
        <div className="mt-8">
          <p className="font-inter w-[15%] text-[20px] p-2 rounded bg-[#2a2b2c] font-[400] text-white"></p>
          <p className="font-inter mt-2 w-[25%] text-[14px] rounded bg-[#2a2b2c] p-2 text-[#ACADAE]"></p>
        </div>

        <div className="flex items-center justify-between gap-4 p-2">
          {/* Skeleton Cards */}
          {skeletonCards.map((_, index) => (
            <div
              key={index}
              className="relative min-w-[310px] h-[270px] rounded-lg overflow-hidden bg-gradient-to-r from-[#1a1a1a] to-[#222324] flex flex-col justify-end p-4"
            >
              <div className="flex flex-col gap-2 ">
                <div className="h-3 w-1/2 bg-[#2a2b2c] rounded"></div>
                <div className="h-3 w-2/3 bg-[#2a2b2c] rounded"></div>
                <div className="flex gap-2">
                  <div className="h-3 w-1/4 bg-[#2a2b2c] rounded"></div>
                  <div className="h-3 w-1/4 bg-[#2a2b2c] rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
