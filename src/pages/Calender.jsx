import React, { useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { MdHistory } from "react-icons/md";
import HomeCarousel from "../components/Home/HomeCraosal";
import { LilPudgys } from "../assets/Route/HomeRoute";
import { Background, Slide1, Slide2, Slide3 } from "../assets/Route/DropRoute";
import Structure from "../components/Drop/structure";
import ImageScroll from "../components/Drop/ImageScroll";

export default function Calender() {
  const [active, setActive] = useState("token");

  const customSlides = [
    {
      id: 3,
      image: Background,
      title: "Billions Supermasks",
      author: " By billions_ntwk",
      floorPrices: [
        { name: "FLOOR PRICE", value: 1.25, currency: " QTOV" },
        { name: "ITEMS", value: 5000 },
        { name: "TOTAL VOLUME", value: "10k", currency: "ETH" },
        { name: "Listed", value: "10k", currency: "ETH" },
      ],
      avatars: [Slide1, Slide2, Slide3],
    },

    {
      id: 2,
      image: Background,
      title: "Custom Project",
      author: "By You",
      floorPrices: [
        { name: "FLOOR PRICE", value: 1.25, currency: "ETH" },
        { name: "ITEMS", value: 5000 },
        { name: "TOTAL VOLUME", value: "10k", currency: "ETH" },
      ],
      avatars: [Slide1, Slide2, Slide3],
    },

    {
      id: 3,
      image: Background,
      title: "Billions Supermasks",
      author: " By billions_ntwk",
      floorPrices: [
        { name: "FLOOR PRICE", value: 1.25, currency: "ETH" },
        { name: "ITEMS", value: 5000 },
        { name: "TOTAL VOLUME", value: "10k", currency: "ETH" },
      ],
      avatars: [Slide1, Slide2, Slide3],
    },
  ];

  return (
    <>
      <div className="p-6">
        <div className="flex gap-3">
          <div className="flex items-center justify-center border border-[#4f5052] rounded-md bg-black p-1">
            <span className="flex items-center justify-center border border-[#4f5052] bg-[#2D2E31] rounded-md p-1">
              <CiCalendar size={20} />
            </span>
          </div>

          <p className="font-inter font-[400] text-[24px] ">Drop</p>
        </div>

        <div className="flex flex-col items-start transition-all duration-300">
          <div className="flex  py-[10px] gap-3">
            <button
              onClick={() => setActive("collection")}
              className={`flex items-center  whitespace-nowrap gap-2 px-2 py-1 rounded-md border border-[#ffffff46] ${
                active === "collection" ? "bg-black" : "bg-transparent"
              }`}
            >
              <CiCalendar size={20} />
              Live & Upcoming
            </button>
            <button
              onClick={() => setActive("token")}
              className={`px-2 flex items-center gap-2  py-1 rounded-md border border-[#ffffff46] ${
                active === "token" ? "bg-black" : "bg-transparent"
              }`}
            >
              <MdHistory />
              past
            </button>
          </div>

          <div className="w-full pt-3 transition-all duration-300">
            {active === "collection" ? (
              <>kjhggjm</>
            ) : (
              <>
                <div>
                  <HomeCarousel slides={customSlides} />
                  <Structure />
                  <ImageScroll />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
