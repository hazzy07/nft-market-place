import React, { useState } from "react";
import ProfileTable from "./ProfileTable";
import { MdOutlineTableRows } from "react-icons/md";
import { BsGrid1X2 } from "react-icons/bs";
import { FaAngleDoubleLeft } from "react-icons/fa";
import TokenGrid from "./TokenGrid";
import CollectionAccordian from "./CollectionAccordian";
import TokenAccordian from "./TokenAccordian";
import { StokeToken } from "../../assets/Route/HomeRoute";
import { TfiMedall } from "react-icons/tfi";
import { MdLocalFireDepartment } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";
import { MdOutlineWbTwilight } from "react-icons/md";

const TwoSectionGrid = () => {
  const [active, setActive] = useState("collection");
  const [listView, setListView] = useState({
    collection: false,
    token: false,
  });
  const [showLeft, setShowLeft] = useState(true);

  const handleViewToggle = (tab, value) => {
    setListView((prev) => ({ ...prev, [tab]: value }));
  };

  return (
    <div
      className={`grid text-white transition-all duration-300 ${
        showLeft ? "lg:grid-cols-[1fr_3fr]" : "lg:grid-cols-1"
      } grid-cols-1`}
    >
      {/* Left Section */}
      {showLeft && (
        <div className="flex flex-col  border-b border-[#FFFFFF14] items-start transition-all duration-300">
          <div className="flex px-6 w-full py-[10px] gap-3 border-[#FFFFFF14] border-b">
            <button
              onClick={() => setActive("collection")}
              className={`px-4 flex items-center justify-center gap-2 w-1/2 py-[6px] rounded-md border border-[#ffffff46] ${
                active === "collection" ? "bg-black text-[#ACADAE] " : "bg-transparent"
              }`}
            >
              <BsGrid1X2 size={15} /> Collection
            </button>
            <button
              onClick={() => setActive("token")}
              className={`px-4 flex items-center justify-center gap-2 w-1/2 py-[6px] rounded-md border border-[#ffffff46] ${
                active === "token" ? "bg-black text-[#ACADAE] " : "bg-transparent"
              }`}
            >
              <StokeToken /> Token
            </button>
          </div>

          <div className="w-full   transition-all duration-300">
            {active === "collection" ? (
              <CollectionAccordian />
            ) : (
              <TokenAccordian />
            )}
          </div>
        </div>
      )}

      {/* Right Section */}
      <div className="bg-black transition-all duration-300 w-full">
        <div className="p-[12px] flex items-center justify-between gap-2 flex-wrap">
          {/* Toggle Sidebar */}
          <div className="flex flex-wrap w-full sm:w-auto sm:flex-nowrap  gap-3">
            <div
              className="p-2 hidden lg:block border border-[#FFFFFF10] rounded-md cursor-pointer"
              onClick={() => setShowLeft(!showLeft)}
            >
              <FaAngleDoubleLeft
                className={`transition-transform duration-300 ${
                  !showLeft ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* Top and Trending buttons */}
            <button
              className={`px-4 justify-center flex items-center w-full gap-2 sm:w-1/2 py-1 rounded-md border border-[#ffffff46]`}
            >
              <MdLocalFireDepartment /> Trending
            </button>
            <button
              className={`px-4 justify-center bg-[#1B1D1F] w-full flex items-center gap-2 md:w-1/2 py-1 rounded-md border border-[#ffffff46]`}
            >
              <TfiMedall /> Top
            </button>

            {/* Conditional Buttons */}
            {active === "collection" ? (
              <button
                className={`px-4 w-full flex justify-center items-center gap-2 md:w-1/2 py-1 rounded-md border border-[#ffffff46] bg-black`}
              >
                <MdOutlineStarBorder />
                Watchlist
              </button>
            ) : (
              <button
                className={`px-4 w-full justify-center flex items-center gap-2 sm:w-1/2 py-1 rounded-md border border-[#ffffff46] bg-black`}
              >
                <MdOutlineWbTwilight />
                New
              </button>
            )}
          </div>

          <div className="flex w-full lg:w-auto flex-wrap sm:flex-nowrap justify-between  items-center md:gap-3">
            {active === "collection" && (
              <>
                {["All", "30d", "7d", "1d", "15m", "5m", "1m"].map((label) => (
                  <div
                    key={label}
                    className="px-2 py-[5px]  border border-transparent rounded-md text-[14px] text-[#ACADAE] cursor-pointer  hover:text-yellow-300 hover:border-[#FFFFFF10]"
                  >
                    {label}
                  </div>
                ))}
              </>
            )}

            {/* Existing two buttons */}
            <div
              className={`p-2 border border-[#FFFFFF10] rounded-md cursor-pointer ${
                !listView[active]
                  ? "bg-[#FFFFFF10] text-white"
                  : "text-gray-300 hover:text-yellow-300"
              }`}
              onClick={() => handleViewToggle(active, false)}
            >
              <MdOutlineTableRows size={17} />
            </div>

            <div
              className={`p-2 border border-[#FFFFFF10] rounded-md cursor-pointer ${
                listView[active]
                  ? "bg-[#FFFFFF10] text-white"
                  : "text-gray-300 hover:text-yellow-300"
              }`}
              onClick={() => handleViewToggle(active, true)}
            >
              <BsGrid1X2 size={17} />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          {active === "collection" ? (
            <ProfileTable listView={listView[active]} />
          ) : (
            <TokenGrid listView={listView[active]} />
          )}
        </div>
      </div>
    </div>
  );
};

export default TwoSectionGrid;
