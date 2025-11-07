import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { LiaUserCircle } from "react-icons/lia";
import { NavLink, useLocation } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { IoStar } from "react-icons/io5";
import Dropdown from "../reusableComponent/Dropdown";
import { FaRegBell } from "react-icons/fa";

import { Container3, Logopage } from "../../assets/Route/Reward";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const [openModal, setOpenModal] = useState(null);

  const handleSelect = (item) => {
    if (item.label === "Language") setOpenModal("language");
    else if (item.label === "Shortcuts") setOpenModal("shortcuts");
  };

  const closeModal = () => setOpenModal(null);

  const isReward =
    location.pathname === "/reward" ||
    location.pathname === "/account" ||
    location.pathname.startsWith("/help");

  const isFunkari = location.pathname === "/Funkari";

  return (
    <header
      className={`top-0 left-[60px] right-0 z-50 h-[60px] hidden md:flex items-center justify-between px-4 font-interTight border-b-2 border-[#2D2E31] transition-all duration-300 ${
        isFunkari ? "bg-black fixed" : "bg-black fixed"
      }`}
    >
      {/* Search Bar */}
      <div className="relative flex items-center w-full max-w-sm border border-[#2D2E31] rounded-md px-3 py-2">
        <FiSearch className="text-white w-5 h-5 mr-2" />
        <input
          type="text"
          placeholder="Search QTOVNFT"
          className="bg-transparent flex-1 font-inter font-[400] text-[14px] outline-none text-white"
        />
        <span
          onClick={() => setIsModalOpen(true)}
          className="text-white cursor-pointer text-sm font-medium border border-[#2D2E31] rounded px-2 py-0.5 ml-2"
        >
          /
        </span>
      </div>

      {/* Right Side - Changes on /reward */}
      {isReward ? (
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <img src={Container3} alt="" className="w-12 h-12" />
            <div className="border-none hover:border flex gap-3 px-3 py-1 font-inter text-[12px] rounded-full bg-[#27262696]">
              <IoStar fill="#e7b018d0" size={15} />
              <IoStar size={15} />
              <IoStar size={15} />
            </div>
            <button className="border-none hover:border px-4 py-2 font-inter text-[12px] rounded-full">
              0%
            </button>
          </div>

          <div className="h-[25px]  bg-[#ffffff13]  w-[1px] "></div>
          <div className="font-inter font-[500] hidden lg:block text-[12px] ">
            0.00 QTOV
          </div>
          <div className="h-[25px] hidden lg:block bg-[#ffffff13] w-[1px] "></div>
          <div className="font-inter font-[500] hidden lg:block text-[12px] ">
            0.00 QTOV
          </div>
          <div className="h-[25px] hidden lg:block bg-[#ffffff13] w-[1px] "></div>
          <FaRegBell />

          <Dropdown
            className=""
            items={[
              { label: "Language", image: Logopage },
              { label: "Shortcuts", image: Logopage },
            ]}
            placeholder={{ label: "Select option", image: Logopage }}
            onSelect={handleSelect}
            renderItem={(item) => (
              <div className="flex items-center gap-2">
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-5 h-5 rounded"
                />
                <span>{item.label}</span>
              </div>
            )}
          />

          {/* Modal for Language */}
          {openModal === "language" && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70">
              <div className="bg-[#1a1a1a] w-full max-w-[450px] rounded-xl shadow-lg relative text-center border border-[#2D2E31]">
                <div className=" flex justify-between items-center p-6">
                  <h2 className="text-white text-lg font-semibold ">
                    Language
                  </h2>
                  <button
                    onClick={closeModal}
                    className=" border border-[#ffffff1f] rounded-full   py-1 px-[10px]  text-2xl"
                  >
                    ✕
                  </button>
                </div>

                <div className=" text-start pb-6 px-8">
                  <p className="font-inter text-[14px] font-[400] py-3 ">
                    English
                  </p>
                  <p className="font-inter text-[14px] font-[400] py-3 ">
                    Espanol{" "}
                  </p>
                  <p className="font-inter text-[14px] font-[400] py-3 ">
                    Deutsch
                  </p>
                  <p className="font-inter text-[14px] font-[400] py-3 ">
                    Francais
                  </p>
                  <p className="font-inter text-[14px] font-[400] py-3 ">
                    {" "}
                    日本語{" "}
                  </p>
                  <p className="font-inter text-[14px] font-[400] py-3 ">
                    한국어
                  </p>
                  <p className="font-inter text-[14px] font-[400] py-3 ">
                    {" "}
                    中文 (简体){" "}
                  </p>
                  <p className="font-inter text-[14px] font-[400] py-3 ">
                    {" "}
                    中文 (繁体){" "}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Modal for Shortcuts */}
          {openModal === "shortcuts" && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70">
              <div className="bg-[#1a1a1a] w-full max-w-[550px] max-h-[80vh] rounded-xl shadow-lg relative text-center border border-[#2D2E31] flex flex-col">
                <div className="flex justify-between items-center p-6 pb-0">
                  <h2 className="text-white text-lg font-semibold">
                    Shortcuts
                  </h2>
                  <button
                    onClick={closeModal}
                    className="border border-[#ffffff1f] rounded-full py-1 px-[10px] text-2xl"
                  >
                    ✕
                  </button>
                </div>

                <div className="text-start  overflow-y-auto no-scrollbar p-6 flex-1 pb-6 px-8">
                  {[
                    {
                      label: "Discover",
                      keys: [
                        ["G", "then", "D"],
                        ["G", "then", "H"],
                      ],
                    },
                    { label: "Stats", keys: [["G", "then", "S"]] },
                    { label: "Activity", keys: [["G", "then", "A"]] },
                    {
                      label: "Reward",
                      keys: [
                        ["G", "then", "R"],
                        ["G", "then", "L"],
                      ],
                    },
                    { label: "Profile", keys: [["G", "then", "P"]] },
                    {
                      label: "Toggle Collector / Pro Mode",
                      keys: [["T", "then", "M"]],
                    },
                    { label: "Toggle Currency", keys: [["T", "then", "C"]] },
                    {
                      label: "Search",
                      keys: [["/", "OR", "CTRL", "then", "K"]],
                    },
                    { label: "Shortcut help", keys: [["?"]] },
                    { label: "Previous item", keys: [["J", "OR", "arr"]] },
                    { label: "Next item", keys: [["K", "OR", "H"]] },
                    { label: "Exit item page", keys: [["ESC"]] },
                  ].map((shortcut, i) => (
                    <div key={i} className="flex items-center justify-between ">
                      <p className="font-inter text-[14px] font-[400] py-4">
                        {shortcut.label}
                      </p>
                      <div className="flex gap-2 flex-row font-[12px] font-inter font-[400] items-center">
                        {shortcut.keys.map((group, j) => (
                          <React.Fragment key={j}>
                            {group.map((key, k) =>
                              ["then", "OR"].includes(key) ? (
                                <span key={k}>{key}</span>
                              ) : (
                                <div
                                  key={k}
                                  className="bg-black rounded px-[6px] border border-[#ffffff25]"
                                >
                                  {key}
                                </div>
                              )
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center">
          <NavLink to="/" end>
            <span className="text-[14px] font-[400] ml-3 text-white">
              Connect Wallet
            </span>
          </NavLink>

          <div className="h-6 w-px bg-[#2D2E31] mx-4"></div>

          <LiaUserCircle className="text-white w-7 h-7" />
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[9999]"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-black text-white p-6 rounded-md w-[300px] text-center border border-[#2D2E31]"
          >
            <div className="flex mb-4 justify-between items-center">
              <h2 className="text-lg">Search Modal</h2>
              <span
                onClick={() => setIsModalOpen(false)}
                className="cursor-pointer"
              >
                <RxCross2 />
              </span>
            </div>
            <div className="relative flex items-center w-full border border-[#2D2E31] rounded-md px-3 py-2">
              <FiSearch fontSize={"21px"} className="text-white" />
              <input
                type="text"
                placeholder="Search QTOVNFT"
                className="bg-transparent flex-1 font-inter font-[400] text-[14px] outline-none text-white placeholder-[#3d3c3ca8] focus:placeholder-opacity-0"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
