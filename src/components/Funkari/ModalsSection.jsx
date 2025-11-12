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
import { NavLink } from "react-router-dom";
import { CiSettings } from "react-icons/ci";
import { TiStarburst } from "react-icons/ti";
import { BsExclamationCircle } from "react-icons/bs";
import { MdContentCopy } from "react-icons/md";
import { IoGlobeOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { CiShare2 } from "react-icons/ci";
import { HiDotsHorizontal } from "react-icons/hi";
import DetailModalContent from "./DetailModalContent";
import { GoGraph } from "react-icons/go";
import { RiStackFill } from "react-icons/ri";
import DetailTab from "./DetailTab";
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
    content: <DetailTab />,
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

  const [activeMiniModal, setActiveMiniModal] = useState(null);

  const MinihandleOpen = (modalName) => setActiveMiniModal(modalName);
  const MinihandleClose = () => setActiveMiniModal(null);

  const [activeModal, setActiveModal] = useState(null);

  const handleOpen = (modalName) => setActiveModal(modalName);
  const handleClose = () => setActiveModal(null);

  const [value, setValue] = useState("");

  const isInvalid = value === "1";

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

        <div className="flex xl:flex-nowrap h-auto flex-wrap gap-3">
          <Dropdown
            items={[
              { label: "Low to High" },
              { label: "Oldest" },
              { label: "Trending" },
            ]}
             paddingY="py-[3px] "
            placeholder={{ label: "High to Low" }}
            onSelect={(v) => console.log(v)}
            className="w-[180px] font-inter font-[400] text-[12px]"
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
              className={`p-1 px-[5px] rounded-md cursor-pointer ${
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
            className={`p-1 px-[5px] flex items-center border border-[#ffffff1f] rounded-md cursor-pointer bg-black       
                   hover:text-yellow-300
              `}
          >
            <CiSettings />
          </div>
          <div
            className={`px-[9px] flex gap-2 items-center border border-[#ffffff1f] rounded-md cursor-pointer bg-black       
                   hover:text-yellow-300
              `}
          >
            <GoGraph />
            Insight
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="p-4">
        <div className="flex gap-3 items-center">
          <div className="relative flex items-center w-full max-w-sm border bg-black border-[#3d3e41] rounded-md px-3 py-[6px]">
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
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999]">
          <div className="bg-[#111] rounded-lg w-[96%] max-w-7xl text-white relative overflow-hidden">
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

            {/* Main */}
            <div className="p-6 overflow-y-auto no-scrollbar max-h-[85vh]">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                <div className="flex  justify-center items-center  rounded-md">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    className="object-cover w-full  rounded-md"
                  />
                </div>

                {/* Right */}
                <div className="text-white  flex flex-col gap-5">
                  <div>
                    <h2 className="text-2xl font-semibold mb-3">
                      {selectedItem.name}
                    </h2>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={FUNLogo}
                          alt=""
                          className="w-8 rounded-full"
                        />
                        <span className="text-gray-400 text-sm">
                          Owned by{" "}
                          <span className="text-white">0xab51...cd26</span>
                        </span>
                      </div>

                      <div className="relative flex items-center gap-3 text-white">
                        <MdContentCopy
                          size={19}
                          className="cursor-pointer"
                          onClick={() => handleOpen("copy")}
                        />
                        <IoGlobeOutline
                          size={19}
                          className="cursor-pointer"
                          onClick={() => handleOpen("globe")}
                        />
                        <div className="h-5 w-[1px] bg-[#515152bd]"></div>
                        <NavLink to="https://x.com/" end>
                          <FaXTwitter size={19} className="cursor-pointer " />
                        </NavLink>
                        <CiShare2
                          size={19}
                          className="cursor-pointer"
                          onClick={() => handleOpen("share")}
                        />
                        <HiDotsHorizontal
                          size={19}
                          className="cursor-pointer"
                          onClick={() => MinihandleOpen("more")}
                        />

                        {activeModal && (
                          <div
                            className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
                            onClick={handleClose}
                          >
                            <div
                              className="bg-[#111] text-white rounded-lg shadow-lg p-6 w-[90%] max-w-sm relative"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <button
                                onClick={handleClose}
                                className="absolute top-2 right-2 text-gray-400 hover:text-white"
                              >
                                ✕
                              </button>
                              {activeModal === "info" && (
                                <p>Information details go here.</p>
                              )}
                              {activeModal === "copy" && (
                                <p>Copied content modal.</p>
                              )}
                              {activeModal === "globe" && (
                                <p>Language or region settings.</p>
                              )}

                              {activeModal === "share" && (
                                <p>Share options modal.</p>
                              )}
                              {activeModal === "more" && (
                                <p>More actions available here.</p>
                              )}
                            </div>
                          </div>
                        )}

                        {/* Reusable Mini Modal */}
                        {activeMiniModal && (
                          <div
                            className="fixed inset-0 bg-black/50 z-[10000] flex items-end justify-center"
                            onClick={MinihandleClose}
                          >
                            <div
                              className="bg-[#151515] text-white shadow-lg  w-full max-w-[100%] relative"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <div className="flex p-6 items-center justify-end  pb-3 mb-4">
                                <button
                                  onClick={MinihandleClose}
                                  className="text-gray-400 relative right-0 hover:text-white text-xl"
                                >
                                  ✕
                                </button>
                              </div>

                              {activeMiniModal === "more" && (
                                <>
                                  <div className="flex  mx-auto justify-center items-center flex-col w-full max-w-6xl">
                                    <div className="flex w-full mt-[-50px] justify-between items-center">
                                      <p className="font-inter text-[20px] font-medium">
                                        Create Item Offer
                                      </p>

                                      <div className="flex items-center gap-3">
                                        <p className="font-space text-[12px] text-gray-300">
                                          Set Price To
                                        </p>
                                        <div className="px-3 py-1 bg-black border border-[#ffffff42] rounded-md text-sm text-white">
                                          Top Offer
                                        </div>
                                      </div>
                                    </div>

                                    <div className="flex mt-4 w-full justify-between items-center">
                                      <div className="font-inter flex items-center gap-3 text-[#ACADAE] text-[12px] font-medium">
                                        <RiStackFill size={21} />1 item
                                      </div>

                                      <div className="flex items-center gap-11">
                                        <p className="font-inter text-[#ACADAE] text-[12px] font-medium">
                                          FLOOR
                                        </p>

                                        <p className="font-inter text-[#ACADAE] text-[12px] font-medium">
                                          TOP OFFER
                                        </p>

                                        <p className="font-inter text-[#ACADAE] text-[12px] font-medium">
                                          Cost
                                        </p>

                                        <p className="font-inter text-[#ACADAE] text-[12px] font-medium">
                                          OFFER TOTAL
                                        </p>

                                        <p className="font-inter text-[#ACADAE] text-[12px] font-medium">
                                          OFFERED AT
                                        </p>
                                      </div>
                                    </div>

                                    <div className="flex border-b pb-9 border-[#ffffff42] mt-7 w-full justify-between items-center">
                                      <div className="font-inter flex items-center gap-3  text-[14px] font-medium">
                                        <img
                                          src={Fun64}
                                          alt=""
                                          className="rounded-md w-10 h-10"
                                        />
                                        Funkari#82
                                      </div>

                                      <div className="flex items-center font-inter gap-7">
                                        <p className="">0.099 QTOV</p>

                                        <p className="">0.784 QTOV</p>

                                        <p className="">0.96 QTOV</p>

                                        <p className="">1.00 QTOV</p>

                                        <div className="flex flex-col items-end">
                                          <div className="flex gap-2 items-center">
                                            <div className="border px-1 py-1 border-[#ffffff2c] bg-black rounded-md">
                                              <CiSettings size={19} />
                                            </div>
                                            <div
                                              className={`flex items-center border bg-black rounded-md overflow-hidden ${
                                                isInvalid
                                                  ? "border-red-500"
                                                  : "border-[#ffffff42]"
                                              }`}
                                            >
                                              <input
                                                type="number"
                                                placeholder="0"
                                                value={value}
                                                onChange={(e) =>
                                                  setValue(e.target.value)
                                                }
                                                className="w-[30px] bg-transparent text-white text-center focus:outline-none"
                                              />
                                              <span className="px-2 py-1 text-white text-sm ">
                                                QTOV
                                              </span>
                                            </div>
                                          </div>
                                          {isInvalid && (
                                            <p className="text-red-500 text-[12px] text-end font-medium">
                                              Offer exceeds wallet balance by
                                              1.00 QTOV/QTOV
                                            </p>
                                          )}
                                        </div>
                                      </div>
                                    </div>

                                    <div className="flex border-b border-[#ffffff42] py-5  w-full justify-between items-center">
                                      <p className="font-inter gap-3  text-[14px] font-medium">
                                        Total offer value
                                      </p>

                                      <p className="font-inter gap-3  text-[14px] font-medium">
                                        {" "}
                                        <span className="text-gray-400  ">
                                          ($3,804.44)
                                        </span>{" "}
                                        0.099 QTOV
                                      </p>
                                    </div>

                                    <div className="flex  py-5  w-full justify-between items-center">
                                      <p className="font-inter text-gray-400 gap-3  text-[14px] font-medium">
                                        Floor difference
                                      </p>

                                      <p className="font-inter text-gray-400 gap-3  text-[14px] font-medium">
                                        1.2% above floor
                                      </p>
                                    </div>
                                  </div>
                                  <div className="flex border-t border-[#ffffff42]  py-5 bg-[#1B1D1F]  mx-auto  flex-col ">
                                    <div className="flex gap-2 mx-auto    max-w-6xl w-full items-end justify-end">
                                      <div className="w-[150px] text-black bg-[#FFFFFF] py-1 text-center font-inter rounded-md  text-sm">
                                        Review item offer
                                      </div>

                                      <Dropdown
                                        items={[
                                          "Today",
                                          "This Week",
                                          "This Month",
                                        ]}
                                        placeholder="30 days"
                                        onSelect={(item) =>
                                          console.log("Chosen:", item)
                                        }
                                        className="w-[150px] bg-black rounded-md font-inter  text-sm"
                                      />
                                    </div>
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

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

                  <div className="bg-black p-4 rounded-md border border-[#ffffff1a]">
                    <div className="flex text-[12px] justify-between text-gray-400  mb-4">
                      <div>
                        <p>TOP OFFER </p>
                        <p>{selectedItem.price}</p>
                      </div>
                      <div>
                        <p> COLLECTION FLOOR </p>
                        <p>{selectedItem.lastSale}</p>
                      </div>
                      <div>
                        <p>PARITY</p>
                        <p>#{selectedItem.id}</p>
                      </div>
                       <div>
                        <p>LAST SALE</p>
                        <p>#{selectedItem.id}</p>
                      </div>
                    </div>

                    <div className="border border-[#ffffff2a] rounded-md p-3">
                      <p className="text-[12px] text-gray-400 mb-1">BUY FOR</p>
                      <div className="flex items-center gap-2">
                        <h1 className="text-[20px]">0.99 QTOV</h1>
                        <p className="text-[12px] text-gray-400">($3,764.84)</p>
                        <div className="border border-[#ffffff1c] text-[10px] text-gray-400 px-2 py-[2px] rounded">
                          ENDING IN WEEK
                        </div>
                      </div>

                      <div className="mt-3 flex gap-2">
                        <button className="w-full py-2 bg-white hover:bg-transparent hover:text-white hover:border  border-[#ffffff2a] text-black text-[12px] rounded-md">
                          Buy now
                        </button>
                        <button className="w-full py-2 hover:bg-white  hover:text-black border border-[#ffffff2a] text-[12px] text-white rounded-md">
                          Make offer
                        </button>
                      </div>
                    </div>
                  </div>

                  <TabsStructure
                    tabs={Modaltabs}
                    defaultTab={0}
                    classNames={{
                      tabList: "",
                      activeTab:
                        "relative text-white after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 px-0 after:w-[39px] after:border-b-[2px] font-inter font-[400] text-[14px] after:border-white",
                      inactiveTab:
                        "text-gray-400  font-inter font-[400] text-[14px] hover:text-white",
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
