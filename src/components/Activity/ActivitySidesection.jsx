import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { GiSevenPointedStar } from "react-icons/gi";
import {
  Azuki,
  BoredApe,
  Canidae,
  CyberKongz,
  DXTerminal,
  GoodVibes,
  Hypurr,
  LilPudgys,
  Moonbirds,
  PudgyPen,
} from "../../assets/Route/ProfileRoute";
import { FiSearch } from "react-icons/fi";
const AccordionItem = ({ title, children, initialOpen = false }) => {
  const [open, setOpen] = useState(initialOpen);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex border-b border-[#48484ba9] justify-between w-full py-4 px-6 text-white font-inter font-[400] text-[14px]"
      >
        {title}
        <RxCaretDown
          size={21}
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && <div className="px-4 py-6">{children}</div>}
    </div>
  );
};

const collections = [
  { name: "Hypurr", img: Hypurr },
  { name: "Pudgy Penguins", img: PudgyPen },
  { name: "DX Terminal", img: DXTerminal },
  { name: "Moonbirds", img: Moonbirds },
  { name: "Lil Pudgys", img: LilPudgys },
  { name: "BoredApe", img: BoredApe },
  { name: "Canidae", img: Canidae },
  { name: "CyberKongz", img: CyberKongz },
  { name: "GoodVibes", img: GoodVibes },
  { name: "Azuki", img: Azuki },
];

export default function ActivitySidesection({
  activeCategory,
  setActiveCategory,
}) {
  const categories = [
    "All",
    "Sale",
    "Mint",
    "Transfer",
    "Listing",
    "Item Offer",
    "Collection Offer",
    "Trait Offer",
  ];

  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);

  const filtered = collections.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleSelect = (name) => {
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((i) => i !== name) : [...prev, name]
    );
  };

  return (
    <div className="text-white">
      <AccordionItem title="Status" initialOpen={true}>
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

      <AccordionItem title="Price" initialOpen={false}>
        <div className="flex flex-wrap gap-2">content here</div>
      </AccordionItem>

      <AccordionItem title="Marketplace" initialOpen={false}>
        <div className="flex flex-wrap gap-2">content here</div>
      </AccordionItem>

      <AccordionItem title="Chains" initialOpen={false}>
        <div className="flex flex-wrap gap-2">content here</div>
      </AccordionItem>

      <AccordionItem title="Collections" initialOpen={true}>
        <div className="relative flex items-center w-full max-w-sm border bg-black border-[#3d3e41] rounded-md px-3 py-2">
          <FiSearch className="text-white w-5 h-5 mr-2" />
          <input
            type="text"
            placeholder="Search for collections"
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent flex-1 font-inter font-[400] text-[14px] outline-none text-white"
          />
        </div>
        <div className="space-y-2 mt-3">
          {filtered.map((item) => (
            // <label
            //   key={item.name}
            //   className="flex items-center gap-3 cursor-pointer hover:bg-neutral-800 px-2 py-2 rounded-md"
            // >
            //   <input
            //     type="checkbox"
            //     checked={selected.includes(item.name)}
            //     onChange={() => toggleSelect(item.name)}
            //     className="appearance-none w-4 h-4 border border-gray-500 rounded-sm cursor-pointer checked:bg-black checked:border-black"
            //   />
            //   <img src={item.img} alt={item.name} className="w-6 h-6 rounded" />
            //   <span className="text-sm flex items-center gap-1">
            //     {item.name}
            //     <GiSevenPointedStar size={14} />
            //   </span>
            // </label>
            <label
              key={item.name}
              className="flex items-center gap-3 cursor-pointer hover:bg-neutral-800 px-2 py-2 rounded-md"
            >
              <div
                onClick={() => toggleSelect(item.name)}
                className="relative w-5 h-5 bg-black border border-gray-500 rounded-sm flex items-center justify-center cursor-pointer"
              >
                {selected.includes(item.name) && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8.01 8.01a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
              <img src={item.img} alt={item.name} className="w-8 h-8 rounded" />
              <span className="text-sm flex items-center gap-1">
                {item.name}
                <GiSevenPointedStar size={14} />
              </span>
            </label>
          ))}
        </div>
      </AccordionItem>
    </div>
  );
}
