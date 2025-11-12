import React from "react";
import {
  FooterSlide,
  FooterSlide2,
  FooterSlide1,
  FooterSlide3,
  FooterSlide4,
  FooterSlide5,
} from "../../assets/Route/DropRoute";

export default function ImageScroll() {
  const cardImages = [
    FooterSlide5,
    FooterSlide,
    FooterSlide2,
    FooterSlide1,
    FooterSlide3,
    FooterSlide4,
    FooterSlide5,
  ];

  return (
    <div className="space-y-3">
      {/* Header Section */}
      <div className="mt-4">
        <p className="font-inter text-[20px] font-[400] text-white">
          You're on the Allowlist
        </p>
        <p className="font-inter text-[14px] text-[#ACADAE]">
          You own NFTs that grant you access to these upcoming curated mints.
        </p>
      </div>

      <div className="overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-4 w-[650px] p-2">
          {cardImages.map((img, index) => (
            <div
              key={index}
              className="relative min-w-[220px] h-[180px] rounded-lg overflow-hidden bg-[#2a2b2c]"
            >
              <img
                src={img}
                alt={`slide-${index}`}
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 h-3 w-1/2 bg-[#2a2b2c]/70 rounded"></div>
              <div className="absolute bottom-0 w-full left-0 p-2 text-white bg-[#2a2b2c] text-sm font-medium">
                Upcoming Mint #{index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scrollable Cards */}
    </div>
  );
}
