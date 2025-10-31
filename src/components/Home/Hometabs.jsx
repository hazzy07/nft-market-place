import React from "react";
import TabsStructure from "../reusableComponent/TabsStructure";
import { IoIosBrush } from "react-icons/io";
import { IoGameController } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import HomeCraosal from "../Home/HomeCraosal";

export default function Hometabs() {
  const tabData = [
    {
      label: "All",
      content: <HomeCraosal />,
    },
    {
      label: (
        <div className="flex items-center gap-2">
          <IoGameController />
          Gaming
        </div>
      ),
      content: <p>Adjust your settings here.</p>,
    },

    {
      label: (
        <div className="flex items-center gap-2">
          <IoIosBrush />
          Art
        </div>
      ),
      content: <p>Adjust your settings here.</p>,
    },
    {
      label: (
        <div className="flex items-center gap-2">
          <FaRegUserCircle />
          PEPs
        </div>
      ),
      content: <span></span>,
    },
    {
      label: "More",
    content: <p>Adjust your settings here.</p>,
    },
  ];
  return (
    <div className="font-interTight w-[100%]">
      <TabsStructure
        tabs={tabData}
        classNames={{
          tabList: "border-none gap-x-2",
          activeTab:
            "text-white bg-[#FFFFFF10] font-normal font-inter border border-[#FFFFFF10] rounded-md",
          inactiveTab: "text-gray-300 font-normal font-inter border border-[#FFFFFF10] rounded-md hover:text-yellow-300 cursor-pointer",
          content: "text-gray-200 rounded-b-md",
        }}
      />
    </div>
  );
}
