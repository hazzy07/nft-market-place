

import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { GiSevenPointedStar } from "react-icons/gi";

import { FiSearch } from "react-icons/fi";
const AccordionItem = ({ title, children, initialOpen = false }) => {
  const [open, setOpen] = useState(initialOpen);

  return (
    <div className="bg-black py-4 border border-[#48484ba9] mt-2 rounded-md ">
      <button
        onClick={() => setOpen(!open)}
        className="flex  justify-between w-full px-6 text-white font-inter font-[400] text-[14px]"
      >
        {title}
        <RxCaretDown
          size={21}
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="px-6 pt-3">{children}</div>
      )}
    </div>
  );
};
export default function DetailModalContent({
  activeCategory,
  setActiveCategory,
}) {
  const categories = ["All", "Listed"];

  return (
    <div className="text-white">
      <AccordionItem title="Status" initialOpen={false}>
        <div className="flex flex-wrap gap-2">
          {categories.map((item, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(item)}
              className={`border text-[14px] font-inter px-4 py-1 rounded-md cursor-pointer transition-colors duration-200 ${
                activeCategory === item
                  ? "bg-[#3f3f46] border-[#626264ee]"
                  : "bg-black border-[#48484ba9] hover:bg-[#2D2E31]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </AccordionItem>

      <AccordionItem title="Rarity" initialOpen={false}>
        <div className="flex flex-wrap gap-2">content here</div>
      </AccordionItem>

      <AccordionItem title="price" initialOpen={false}>
        <div className="flex flex-wrap gap-2">content here</div>
      </AccordionItem>
      <AccordionItem title="Marketplace" initialOpen={false}>
        <div className="flex flex-wrap gap-2">content here</div>
      </AccordionItem>

      <AccordionItem title="Collections" initialOpen={false}>
        <div className="relative flex items-center w-full max-w-sm border bg-black border-[#3d3e41] rounded-md px-3 py-2">
          <FiSearch className="text-white w-5 h-5 mr-2" />
          <input
            type="text"
            placeholder="Search for collections"
            // onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent flex-1 font-inter font-[400] text-[14px] outline-none text-white"
          />
        </div>
      </AccordionItem>
    </div>
  );
}
