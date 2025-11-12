import React from "react";

export default function StructureSkeleton() {
  const skeletonCards = Array(8).fill(null);

  return (
    <div className="space-y-3">
      {/* Header Section */}
      <div className="mt-8">
        <p className="font-inter text-[20px] font-[400] text-white">
          You're on the Allowlist
        </p>
        <p className="font-inter text-[14px] text-[#ACADAE]">
          You own NFTs that grant you access to these upcoming curated mints.
        </p>
      </div>

      {/* Scrollable Skeleton Cards */}

      <div className="overflow-x-auto no-scrollbar ">
        <div className="flex items-center gap-4  w-[650px] p-2">
          {/* Empty State */}
          <div className="min-w-[270px] flex items-center justify-center bg-gradient-to-l from-[#1a1a1a] to-[#22232400] h-[180px] text-white text-[18px] font-medium rounded-lg">
            You have no upcoming mints
          </div>

          {/* Skeleton Cards */}
          {skeletonCards.map((_, index) => (
            <div
              key={index}
              className="relative min-w-[270px] h-[180px] rounded-lg overflow-hidden bg-gradient-to-r from-[#1a1a1a] to-[#222324] flex flex-col justify-end p-4"
            >
              <div className="flex flex-col gap-2 ">
                <div className="h-3 w-1/2 bg-[#2a2b2c] rounded"></div>
                <div className="h-3 w-2/3 bg-[#2a2b2c] rounded"></div>
                <div className="flex gap-2">
                  <div className="h-3 w-1/4 bg-[#2a2b2c] rounded"></div>
                  <div className="h-3 w-1/4 bg-[#2a2b2c] rounded"></div>
                </div>
              </div>

              {/* Footer Placeholder */}
              {/* <div className="absolute bottom-0 w-full left-0 p-2 bg-[#2a2b2c] text-sm font-medium text-white opacity-20">
              Upcoming Mint #{index + 1}
            </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
