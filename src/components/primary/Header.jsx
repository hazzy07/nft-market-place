import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { LiaUserCircle } from "react-icons/lia";
import { NavLink } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-black h-[60px] hidden md:flex items-center justify-between px-4 border-b-2 border-[#2D2E31] font-interTight relative">
      {/* Search Bar */}
      <div className="relative flex items-center w-full max-w-sm border border-[#2D2E31] rounded-md px-3 py-2">
        <FiSearch className="text-white w-5 h-5 mr-2" />
        <input
          type="text"
          placeholder="Search QTOVNFT"
          className="bg-transparent flex-1 font-inter font-[400] text-[14px] outline-none text-white "
        />
        <span
          onClick={() => setIsModalOpen(true)}
          className="text-white cursor-pointer text-sm font-medium border border-[#2D2E31] rounded px-2 py-0.5 ml-2"
        >
          /
        </span>
      </div>

      {/* Right Side */}
      <div className="flex items-center">
        <NavLink to="/" end>
          <span className="text-[14px] font-[400] ml-3 text-white">
            Connect Wallet
          </span>
        </NavLink>

        {/* Divider */}
        <div className="h-6 w-px bg-[#2D2E31] mx-4"></div>

        {/* User Icon */}
        <LiaUserCircle className="text-white w-7 h-7" />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-black text-white p-6 rounded-md w-[300px] text-center"
          >
            <div className="flex mb-4 justify-between items-center">
              <h2 className="text-lg">Search Modal</h2>
              <span
                onClick={() => setIsModalOpen(false)}
                className="cursor-pointer "
              >
                <RxCross2 />
              </span>
            </div>
            <div className="relative flex items-center w-full max-w-sm border border-[#2D2E31] rounded-md px-3 py-2">
              <FiSearch fontSize={"21px"} className="text-white " />
              <input
                type="text"
                placeholder="Search QTOVNFT"
                className="bg-transparent flex-1 font-inter font-[400] text-[14px] outline-none text-white placeholder-[#3d3c3ca8] focus:placeholder-opacity-0"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
