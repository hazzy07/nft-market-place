import React, { useState } from "react";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { IoStar } from "react-icons/io5";
import {
  ChromiumChest,
  Container2,
  Container3,
  Container4,
  Container5,
  Container6,
  Container7,
  Container8,
  Container9,
} from "../../assets/Route/Reward";
import { PiCaretLeftBold } from "react-icons/pi";
import { RxCaretRight } from "react-icons/rx";
import { PiTreasureChestBold } from "react-icons/pi";
import { LuBox } from "react-icons/lu";

export default function ActiveChest() {
  const [selectedImage, setSelectedImage] = useState(ChromiumChest);

  const images = [
    Container2,
    Container3,
    Container4,
    Container5,
    Container6,
    Container7,
    Container8,
    Container9,
    ChromiumChest,
  ];

  return (
    <div className="h-full">
      <div className="rounded-md mt-5 border border-[#ffffff2a]">
        <div className="grid grid-cols-1 rounded-md items-center lg:grid-cols-[2fr_1fr]">
          <div className="bg-black h-full rounded-l-md p-5 border-r flex flex-col justify-center items-start border-[#ffffff2a]">
            <button className="border-none hover:border px-4 py-2 font-inter text-[12px] rounded-full bg-[#27262696]">
              Wave 2
            </button>

            <div className="flex mt-5 gap-2">
              <div className="flex p-4 border rounded-full items-center justify-center">
                <PiCaretLeftBold />
              </div>

              <div className="flex items-center">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-center border border-[#4f5052] rounded-full bg-black p-1 ${
                      i !== 0 ? "lg:-ml-3 -ml-6" : ""
                    }`}
                  >
                    <span className="flex items-center justify-center border border-[#4f5052] bg-[#2D2E31] rounded-full p-2">
                      <PiTreasureChestBold size={21} />
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex p-3 border rounded-full items-center justify-center">
                <RxCaretRight size={25} />
              </div>
            </div>

            <p className="font-bold mt-6 text-[24px]">Unlock Reward</p>
            <p className="font-inter font-[400] pt-2 text-[12px]">
              The higher level your chest, the more exciting reward you'll
              receive including a Treasure
            </p>

            <div className="flex flex-col sm:flex-row gap-2 mt-4 w-full">
              <button className="border rounded-md py-2 px-4 border-[#ffffff23] text-center sm:w-auto w-full">
                View Reward Pool
              </button>

              <button className="bg-white text-black rounded-md border border-[#ffffff23] py-2 px-4 text-center sm:w-auto w-full">
                Get Started
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-transparent py-5 flex flex-col justify-center items-center">
            <div className="flex gap-2 items-center">
              <button className="border-none hover:border px-4 py-2 font-inter text-[12px] rounded-full bg-[#27262696]">
                Wood Chest
              </button>
              <button className="border-none flex px-4 py-2 items-center hover:border font-inter text-[12px] rounded-full bg-[#00178027]">
                <BsFillLightningChargeFill className="ml-1" /> Active
              </button>
            </div>

            {/* Dynamic image here */}
            <img
              src={selectedImage}
              alt="Selected Chest"
              className="mt-5 w-[200px] object-center"
            />

            <div className="flex items-center p-2 gap-2">
              <button className="border-none hover:border px-4 py-2 font-inter text-[12px] rounded-full bg-[#27262696]">
                tier
              </button>
              <div className="border-none hover:border flex gap-3 px-4 py-2 font-inter text-[12px] rounded-full bg-[#27262696]">
                <IoStar fill="#e7b018d0" size={19} />
                <IoStar size={19} />
                <IoStar size={19} />
              </div>
              <button className="border-none hover:border px-4 py-2 font-inter text-[12px] rounded-full bg-[#27272696]">
                0%
              </button>
            </div>

            <div className="flex mt-4 pt-4 px-3 w-full justify-center border-t border-[#ffffff25] items-center gap-2">
              <div className="rounded-full flex bg-[#3332321f] p-2">
                <IoStar fill="#e7b018d0" size={19} />
              </div>

              <div className="bg-[#3332321f] rounded-md w-full p-1"></div>

              <div className="rounded-full flex bg-[#3332321f] p-2">
                <IoStar size={19} />
              </div>
              <div className="bg-[#3332321f]  rounded-md w-full p-1"></div>

              <div className="rounded-full flex bg-[#3332321f] p-2">
                <IoStar size={19} />
              </div>
            </div>
          </div>
        </div>

        {/* IMAGE LIST */}
        <div className="bg-black w-[100%] max-w-[100%] gap-3 no-scrollbar overflow-x-auto flex justify-between items-center rounded-b-md border-t border-[#ffffff2a] p-5">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Chest Option"
              onClick={() => setSelectedImage(img)}
              className="cursor-pointer hover:opacity-80 transition-all w-[70px] h-[70px] object-contain"
            />
          ))}
        </div>
      </div>

      <div className="items-center mt-10 flex flex-col ">
        <div className="bg-[#ffffff2a] rounded-md p-3">
          <LuBox />
        </div>

        <p className="font-inter  mt-5 font-[400] text-[16px]  ">
          No active voyages
        </p>

        <p className="font-inter text-center text-[ACADAE] mt-2  font-[400] text-[14px]  ">
          You don't have any active voyages right now. Check back later
        </p>
      </div>
    </div>
  );
}
