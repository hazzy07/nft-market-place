import React, { useState } from "react";
import Hometabs from "../components/Home/Hometabs";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import CardsReel from "../components/Home/CardsReel";
import TokensReel from "../components/Home/TokensReel";
import Footer from "../components/primary/Footer";
import TokenTables from "../components/Home/TokenTables";

export default function Home() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="bg-[#222325]  relative"
      // style={{ height: "calc(100vh - 75px)" }}
    >
      <div className="grid lg:grid-cols-3">
        {/* Main content */}
        <div
          className={`p-6 relative ${
            expanded ? "lg:col-span-3" : "lg:col-span-2"
          }`}
        >
          <Hometabs />
          <CardsReel />
          <TokensReel />
        </div>

        {/* TokenTables */}
        {!expanded && (
          <TokenTables expanded={expanded} setExpanded={setExpanded} />
        )}
      </div>

      <div
        className="absolute hidden lg:block top-6 right-4 text-gray-300 font-normal font-inter border border-[#FFFFFF10] rounded-md hover:text-yellow-300 cursor-pointer p-2 z-50"
        onClick={() => setExpanded(!expanded)}
      >
        <MdKeyboardDoubleArrowRight />
      </div>

    
    </div>
  );
}
