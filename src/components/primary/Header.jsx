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

  // const isReward = location.pathname === "/reward";
const isReward =
  location.pathname === "/reward" ||
  location.pathname === "/account" ||
  location.pathname === "/setting";


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
            className=" "
            items={["Select", "Hello"]}
            placeholder={{ label: "hryugfv..", image: Logopage }}
            onSelect={(item) => console.log(item)}
            renderItem={(item) => (
              <div className="flex items-center gap-2">
                <span>{item}</span>
              </div>
            )}
          />
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
