import { FaAngleDoubleLeft } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import React, { useState } from "react";
import TabsStructure from "../reusableComponent/TabsStructure";
import {
  Fun64,
  Fun58,
  Fun19,
  Fun186,
  Fun182,
  FunQ,
  FUNLogo,
} from "../../assets/Route/FunkariRoute";
import { CiGrid41 } from "react-icons/ci";
import { MdGridOn } from "react-icons/md";
import { LuRows3, LuRows4 } from "react-icons/lu";
import Dropdown from "../reusableComponent/Dropdown";

import { CiSettings } from "react-icons/ci";
import { TiStarburst } from "react-icons/ti";
import { BsExclamationCircle } from "react-icons/bs";
import { MdContentCopy } from "react-icons/md";
import { IoGlobeOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { CiShare2 } from "react-icons/ci";
import { HiDotsHorizontal } from "react-icons/hi";
import DetailModalContent from "./DetailModalContent";

const nftData = [
  {
    id: 1,
    name: "Funkari #64",
    price: "1.25 QTOV",
    lastSale: "1.05 BTOV",
    image: Fun64,
    description: (
      <p className=" font-inter text-[12px] font-[400] text-gray-400 ">
        Owned by <span className="text-[#fff] ">0xab51...cd26</span>
      </p>
    ),
  },
  {
    id: 2,
    name: "Funkari #59",
    price: "0.98 QTOV",
    lastSale: "0.85 BTOV",
    image: Fun19,
    description: (
      <p className=" font-inter text-[12px] font-[400] text-gray-400 ">
        Owned by <span className="text-[#fff] ">0xab51...cd26</span>
      </p>
    ),
  },
  {
    id: 3,
    name: "Funkari #60",
    price: "1.32 QTOV",
    lastSale: "1.20 BTOV",
    image: Fun186,
    description: (
      <p className=" font-inter text-[12px] font-[400] text-gray-400 ">
        Owned by <span className="text-[#fff] ">0xab51...cd26</span>
      </p>
    ),
  },
  {
    id: 4,
    name: "Funkari #61",
    price: "1.10 QTOV",
    lastSale: "0.95 BTOV",
    image: Fun182,
    description: (
      <p className=" font-inter text-[12px] font-[400] text-gray-400 ">
        Owned by <span className="text-[#fff] ">0xab51...cd26</span>
      </p>
    ),
  },
  {
    id: 5,
    name: "Funkari #62",
    price: "1.45 QTOV",
    lastSale: "1.30 BTOV",
    image: FunQ,
    description: (
      <p className=" font-inter text-[12px] font-[400] text-gray-400 ">
        Owned by <span className="text-[#fff] ">0xab51...cd26</span>
      </p>
    ),
  },
];

const Modaltabs = [
  {
    label: "Detail",
    content: <DetailModalContent />,
  },
  {
    label: "Orders",
    content: <p className="text-white">Settings content here.</p>,
  },
  {
    label: "Activity",
    content: <p className="text-white">Settings content here.</p>,
  },
];

export default function ModalSection({ showLeft, setShowLeft }) {
  const [gridCols, setGridCols] = useState("lg:grid-cols-5 sm:grid-cols-2");
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="bg-transparent">
      {/* Toolbar */}
      <div className="p-[10px] flex items-center justify-between gap-3 flex-wrap">
        <div
          className="p-2 border border-[#FFFFFF10] rounded-md cursor-pointer"
          onClick={() => setShowLeft(!showLeft)}
        >
          <FaAngleDoubleLeft
            className={`transition-transform duration-300 ${
              !showLeft ? "rotate-180" : ""
            }`}
          />
        </div>

        <div className="flex xl:flex-wrap gap-3">
          <Dropdown
            items={["low to high", "Oldest", "Trending"]}
            placeholder="high to low"
            onSelect={(v) => console.log(v)}
            className="w-[180px]  font-inter  font-[400] text-[12px]  "
          />

          {[
            { id: "sm:grid-cols-2", icon: <CiGrid41 size={17} /> },
            {
              id: "sm:grid-cols-2 lg:grid-cols-5",
              icon: <MdGridOn size={17} />,
            },
            { id: "grid-cols-1", icon: <LuRows4 size={17} /> },
            { id: "grid-cols-1 small-img", icon: <LuRows3 size={17} /> },
          ].map((opt) => (
            <div
              key={opt.id}
              className={`p-2  rounded-md cursor-pointer ${
                gridCols === opt.id
                  ? "bg-[#FFFFFF10] border border-[#ffffff15] text-white"
                  : "text-gray-300 hover:text-yellow-300"
              }`}
              onClick={() => setGridCols(opt.id)}
            >
              {opt.icon}
            </div>
          ))}

          <div
            className={`p-2 border border-[#ffffff1f] rounded-md cursor-pointer bg-black       
                   hover:text-yellow-300
              `}
          >
            <CiSettings />
          </div>
          <div
            className={`px-2 flex items-center border border-[#ffffff1f] rounded-md cursor-pointer bg-black       
                   hover:text-yellow-300
              `}
          >
            Insight
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="p-4">
        <div className="flex gap-3 items-center">
          <div className="relative flex items-center w-full max-w-sm border bg-black border-[#3d3e41] rounded-md px-3 py-1">
            <FiSearch size={15} className="mr-2" />
            <input
              type="text"
              placeholder="Search for collections"
              className="bg-transparent flex-1 font-inter font-[400] text-[14px] outline-none text-white"
            />
          </div>
        </div>

        {/* Grid Display */}
        <div className={`grid gap-3 py-6 ${gridCols}`}>
          {nftData.map((item) => {
            const isRow =
              gridCols === "grid-cols-1" ||
              gridCols === "grid-cols-1 small-img";
            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`rounded-lg overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform duration-200 ${
                  isRow ? "flex items-center border border-[#ffffff18] p-3" : ""
                }`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className={`object-cover ${
                    isRow
                      ? gridCols === "grid-cols-1 small-img"
                        ? "h-[50px] w-[50px] rounded-md"
                        : "h-[100px] w-[100px] rounded-md"
                      : "w-full"
                  }`}
                />
                <div
                  className={`p-3 text-white ${
                    isRow
                      ? "flex gap-9 justify-between bg-transparent"
                      : "bg-black"
                  }`}
                >
                  <div className="text-sm font-semibold">{item.name}</div>
                  <div
                    className={`flex text-[12px] font-inter font-[400] text-gray-400 mt-1 ${
                      isRow ? "flex-row gap-8 bg-transparent" : "flex-col"
                    }`}
                  >
                    <span>{item.price}</span>
                    <span>Last sale {item.lastSale}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tailwind Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-[#111] rounded-lg w-[90%] max-w-6xl text-white relative overflow-hidden">
            {/* Top Thumbnail Bar */}
            <div className="sticky top-0 z-10 border-b border-[#ffffff33] bg-black flex items-center justify-between px-4 py-3">
              <div
                id="thumb-scroll"
                className="flex overflow-x-auto gap-2 scrollbar-hide"
                style={{ scrollBehavior: "smooth" }}
              >
                {nftData.map((item) => (
                  <img
                    key={item.id}
                    src={item.image}
                    alt={item.name}
                    onClick={() => setSelectedItem(item)}
                    className={`w-[60px] h-[60px] object-cover rounded-md cursor-pointer ${
                      selectedItem.id === item.id
                        ? "ring-2 ring-pink-500"
                        : "opacity-70 hover:opacity-100"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => setSelectedItem(null)}
                className="text-gray-400 hover:text-white text-xl ml-4"
              >
                ✕
              </button>
            </div>

            {/* Main Scrollable Content */}
            <div className="p-6 overflow-y-auto no-scrollbar max-h-[85vh]">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                {/* Left Image */}
                <div className="flex md:order-1 order-2 justify-center items-center bg-black rounded-md">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    className="object-cover w-full h-full rounded-md"
                  />
                </div>

                {/* Right Info */}
                <div className="text-white md:order-2 order-1 flex flex-col gap-5">
                  <div>
                    <h2 className="text-2xl font-semibold mb-3">
                      {selectedItem.name}
                    </h2>
                    <div className="flex items-center gap-3">
                      <img src={FUNLogo} alt="" className="w-8 rounded-full" />
                      <span className="text-gray-400 text-sm">
                        Owned by{" "}
                        <span className="text-white">0xab51...cd26</span>
                      </span>
                    </div>
                  </div>

                  {/* Token Details */}
                  <div className="flex flex-wrap gap-2">
                    <div className="px-2 py-1 border border-[#ffffff25] rounded-md text-[12px]">
                      ERC721
                    </div>
                    <div className="px-2 py-1 border border-[#ffffff25] rounded-md text-[12px] flex items-center gap-1">
                      <TiStarburst />
                      QTOVereum
                    </div>
                    <div className="px-2 py-1 border border-[#ffffff25] rounded-md text-[12px]">
                      Token #{selectedItem.id}
                    </div>
                  </div>

                  {/* Price Box */}
                  <div className="bg-black p-4 rounded-md border border-[#ffffff1a]">
                    <div className="flex justify-between text-gray-400 text-sm mb-4">
                      <div>
                        <p>Current Price</p>
                        <p>{selectedItem.price}</p>
                      </div>
                      <div>
                        <p>Last Sale</p>
                        <p>{selectedItem.lastSale}</p>
                      </div>
                      <div>
                        <p>Edition</p>
                        <p>#{selectedItem.id}</p>
                      </div>
                    </div>

                    <div className="border border-[#ffffff2a] rounded-md p-3">
                      <p className="text-[12px] text-gray-400 mb-1">BUY FOR</p>
                      <div className="flex items-center gap-2">
                        <h1 className="text-[20px]">0.99 QTOV</h1>
                        <p className="text-[12px] text-gray-400">($3,764.84)</p>
                        <div className="border border-[#ffffff1c] text-[12px] text-gray-400 px-2 py-[2px] rounded">
                          ENDING IN WEEK
                        </div>
                      </div>

                      <div className="mt-3 flex gap-2">
                        <button className="w-full py-2 bg-white text-black text-[12px] rounded-md">
                          Buy now
                        </button>
                        <button className="w-full py-2 border border-[#ffffff2a] text-[12px] text-white rounded-md">
                          Make offer
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Tabs Section */}
                  <TabsStructure
                    tabs={Modaltabs}
                    defaultTab={0}
                    classNames={{
                      tabList: "",
                      activeTab:
                        "relative text-white after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[59px] after:border-b-[2px] font-inter font-[400] text-[14px] after:border-white",
                      inactiveTab:
                        "text-gray-400 font-inter font-[400] text-[14px] hover:text-white",
                      content: "",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
