import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";

const AccordionItem = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <button
        onClick={() => setOpen(!open)}
        className="flex border-b border-[#48484ba9] justify-between w-full py-4 px-6 text-white text-sm"
      >
        {title}
        < RxCaretDown size={21}
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="px-4 border-b border-[#48484ba9] py-3 pb-3">
          {children}
        </div>
      )}
    </div>
  );
};

const ToggleSwitch = ({ label }) => {
  const [enabled, setEnabled] = useState(false);
  return (
    <div className="flex items-center justify-between py-3 px-4 text-white text-sm border-b border-[#2D2E31]">
      <span>{label}</span>
      <button
        onClick={() => setEnabled(!enabled)}
        className={`w-10 h-5 rounded-full transition-colors duration-300 ${
          enabled ? "bg-black" : "bg-[#3f3f46]"
        } relative`}
      >
        <span
          className={`absolute top-[2px] ${
            enabled ? "left-[22px]" : "left-[2px]"
          } w-4 h-4 bg-white rounded-full transition-all duration-300`}
        ></span>
      </button>
    </div>
  );
};

export default function AccordionSidebar() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Art",
    "Gaming",
    "Memberships",
    "Music",
    "PFPs",
    "Photography",
    "Domain Names",
    "Sports Collectibles",
    "Virtual Worlds",
    "Unspecified",
  ];

  return (
    <div className="flex w-full">
      {/* Sidebar Section */}
      <div className=" w-full text-white overflow-hidden">
        <AccordionItem title="Category">
          <div className="flex flex-wrap gap-2">
            {categories.map((item, i) => (
              <div
                key={i}
                onClick={() => setActiveCategory(item)}
                className={`border text-[14px] font-[400] font-inter px-4 py-1 rounded-md cursor-pointer transition-colors duration-200
          ${
            activeCategory === item
              ? "bg-[#3f3f46] border-[#626264ee]"
              : "bg-black border-[#48484ba9] hover:bg-[#2D2E31]"
          }`}
              >
                {item}
              </div>
            ))}
          </div>
        </AccordionItem>

        <AccordionItem title="Floor Price">
          <p className="text-[14px] font-[400] font-inter ">Slider or input here</p>
        </AccordionItem>

        <AccordionItem title="Top Offer">
          <p className="text-[14px] font-[400] font-inter">Slider or input here</p>
        </AccordionItem>

        <ToggleSwitch label="Is Verified" />
        <ToggleSwitch label="Branded Collection Page" />
      </div>
    </div>
  );
}
