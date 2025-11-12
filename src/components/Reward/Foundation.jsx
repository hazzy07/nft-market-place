import React from "react";
import { Logopage } from "../../assets/Route/Reward";
import { TiStarburst } from "react-icons/ti";
import { PiCornersOutLight } from "react-icons/pi";
import { SlExclamation } from "react-icons/sl";
import { G482, C1470, C14514, D2234, C9027 } from "../../assets/Route/Reward";

export default function Foundation() {
  const items = [
    {
      img: G482,
      name: "Doodle #482",
      detail: "Doodles",
      time: "31 minutes ago",
    },
    {
      img: G482,
      name: "Doodle #2234",
      detail: "Doodle",
      time: "31 minutes ago",
    },
    {
      img: C1470,
      name: "Critters Quest Blind Box",
      detail: "Critters Quest Blind Box",
      time: "31 minutes ago",
    },
    {
      img: C1470,
      name: "Critters Quest Blind Box",
      detail: "Critters Quest Blind Box",
      time: "31 minutes ago",
    },
    {
      img: D2234,
      name: "Potatoz #9027",
      detail: "Memeland potatoz",
      time: "31 minutes ago",
    },
    { img: C9027, name: "#14514", detail: "HV-MTL", time: "31 minutes ago" },
    { img: D2234, name: "ITEM", detail: "ITEM", time: "31 minutes ago" },
  ];

  return (
    <div className="flex gap-3 flex-col">
      <div className="border rounded-md border-[#2D2E31] ">
        <div className="flex rounded-t-md items-center gap-3 bg-[#17181A] p-4 ">
          <img src={Logopage} alt="" className="w-10 h-10" />
          <div className="flex flex-col">
            <h1>0x5db4...f663</h1>
            <div className="flex justify-center border rounded-md border-[#2D2E31] bg-black ">
              5db4db
            </div>
          </div>
        </div>
        <div className="bg-black p-4 rounded-b-md ">
          <div className="flex gap-3 items-center ">
            <p className=" font-inter font-[400] text-[16px] ">Treasures</p>
            <SlExclamation />
          </div>
          <p className=" font-inter mt-3 font-[400] text-[14px] ">
            These represent your achievements and will be meaningfully
            considered by the QTOVNFT Foundation.
          </p>

          <div className="flex justify-between mt-4 items-center">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className={`flex items-center justify-center border border-[#4f5052] rounded-full bg-black p-1`}
              >
                <span className="flex items-center justify-center border border-[#4f5052] bg-[#2D2E31] rounded-full p-2">
                  <PiCornersOutLight size={21} />
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t rounded-b-md bg-black w-full flex gap-2 border-[#2D2E31] p-3">
          <button className="border rounded-md py-2 whitespace-nowrap px-4 border-[#ffffff23] w-full">
            How it works
          </button>

          <button className="bg-white py-2 px-4 whitespace-nowrap rounded-md border text-black border-[#ffffff23] w-full">
            Get Started
          </button>
        </div>
      </div>

      <div className="border rounded-md border-[#2D2E31] ">
        <div className="bg-black p-4 rounded-b-md ">
          <button className="border-none hover:border px-4 py-2 font-inter text-[12px] rounded-full bg-[#27262696]">
            Wave 2
          </button>

          <p className="font-inter mt-4 font-[400] text-[16px]">Chest Ends</p>

          <p className="font-inter mt-2 font-[400] text-[12px]  ">
            You'll be able to open your Treasure Chest and discover what's
            inside at the end of the wave.
          </p>

          <div className="flex border  border-[#2D2E31]  mt-4 items-center justify-between rounded-md font-[400] text-[12px] gap-3 bg-[#17181A]">
            <div className="flex font-inter items-center whitespace-nowrap px-2 justify-center">
              END IN
            </div>
            <div className="flex flex-wrap  border-l  border-[#2D2E31] lg:flex-nowrap gap-2 py-3 px-2 items-center">
              <div
                className={`flex items-center flex-col justify-center border border-[#4f5052] rounded-md bg-black px-2 pb-1`}
              >
                <p>28</p>

                <p className="mt-[-5px] font-inter text-[12px] ">DAYS</p>
              </div>

              <div
                className={`flex items-center flex-col justify-center border border-[#4f5052] rounded-md bg-black px-2 pb-1`}
              >
                <p>28</p>

                <p className="mt-[-5px] font-inter text-[12px] ">HOURS</p>
              </div>

              <div
                className={`flex items-center flex-col justify-center border border-[#4f5052] rounded-md bg-black px-2 pb-1`}
              >
                <p>28</p>

                <p className="mt-[-5px] font-inter text-[12px] ">MINS</p>
              </div>

              <div
                className={`flex items-center flex-col justify-center border border-[#4f5052] rounded-md bg-black px-2 pb-1`}
              >
                <p>28</p>

                <p className="mt-[-5px] font-inter text-[12px] ">SECS</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border rounded-t-md border-[#2D2E31] ">
        <div className="bg-[#17181A] p-2 ">
          <p className="font-inter mt-3 font-[400] text-[16px]">
            Recently Added to Reward Pool
          </p>
          <p className=" font-inter mt-3 font-[400] text-[#ACADAE] text-[14px] ">
            These represent your achievements and will be meaningfully
            considered by the QTOVNFT Foundation.
          </p>
        </div>

        <div className="bg-black w-full">
          <div className="grid border-t items-center p-3   border-[#2D2E31] grid-cols-[3fr_1fr]">
            <p className="font-space font-[400] text-[12px] ">ITEM</p>
            <p className="font-space font-[400] text-end text-[12px] ">TIME</p>
          </div>

       

          <div className="lg:h-[300px] no-scrollbar overflow-y-auto">
            {items.map((item, i) => (
              <div
                key={i}
                className="grid  border-t p-3 items-center  border-[#2D2E31] grid-cols-[3fr_1fr]"
              >
                <div className="flex font-inter gap-2 items-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-10 h-10 rounded-md"
                  />
                  <div>
                    <p className=" font-[400] text-[14px]">
                      {item.name}
                    </p>
                    <div className=" flex items-center gap-2 font-[400] text-[#ACADAE] text-[13px]">
                      {item.detail} <TiStarburst fill="white" />
                    </div>
                  </div>
                </div>

                <div className="whitespace-nowrap font-inter text-[14px] ">
                  {item.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
