import React, { useState } from "react";

import { PiTreasureChestBold } from "react-icons/pi";
import { GiRoundBottomFlask } from "react-icons/gi";
import { CgMenuMotion } from "react-icons/cg";
import { PiCornersOutLight } from "react-icons/pi";
import { SlExclamation } from "react-icons/sl";
import ActiveChest from "./ActiveChest";
import TabsStructure from "../reusableComponent/TabsStructure";

export default function Treasure() {
  const [activeMiniModal, setActiveMiniModal] = useState(true);
  const MinihandleClose = () => setActiveMiniModal(false);

  const tabs = [
    {
      label: (
        <>
          <div className="flex gap-2 justify-center items-center ">
            <PiTreasureChestBold />
            Chest & Voyages
          </div>
        </>
      ),
      content: (
        <div>
          <div className="flex justify-between items-center">
            <div className="flex  items-center gap-3">
              <span className="flex items-center justify-center border border-[#4f5052] bg-black rounded-md p-2">
                <PiTreasureChestBold size={18} />
              </span>
              <h1 className="font-inter text-[14px] "> Treasure Chest </h1>
              <SlExclamation size={21} />
            </div>
            <div className="bg-black border flex justify-center items-center text-[14px] font-inter font-[400] border-[#ffffff44] rounded-md pt-2 pb-1 px-4">
              View All Chest
            </div>
          </div>

          <ActiveChest />
        </div>
      ),
    },
    {
      label: (
        <>
          <div className="flex gap-2 justify-center items-center ">
            <CgMenuMotion />
            Reward Pool
          </div>
        </>
      ),
      content: <div>Analytics details go here</div>,
    },
    {
      label: (
        <>
          <div className="flex gap-2 justify-center items-center ">
            <GiRoundBottomFlask />
            My Activity
          </div>
        </>
      ),
      content: <div>Settings panel content</div>,
    },
  ];

  return (
    <>
      {activeMiniModal && (
        <div
          className="flex w-full  flex-col lg:flex-row items-center justify-center"
          onClick={MinihandleClose}
        >
          <div
            className="lg:bg-[#151515] w-full p-2 text-white lg:border border-[#2092FF] rounded-lg lg:p-6 "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex  justify-between ">
              <div className="flex flex-col lg:flex-row items-center gap-5">
                <div className="flex items-center justify-center border border-[#4f5052] rounded-md bg-black p-1">
                  <span className="flex items-center justify-center border border-[#4f5052] bg-[#2D2E31] rounded-md p-2">
                    <PiTreasureChestBold size={21} />
                  </span>
                </div>

                <div className="flex flex-col">
                  <h2 className="text-lg font-semibold">
                    {" "}
                    Level Up Your Treasure Chest!
                  </h2>
                  <p className="text-sm pt-3 text-gray-300">
                    Reminder: Token swap volume and purchases of QTOVNFT
                    listings will level up your chest.
                  </p>
                </div>
              </div>
              <button
                onClick={MinihandleClose}
                className=" text-gray-400 mt-[-140px] lg:mt-0 hover:text-white text-xl"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="w-full py-6">
        <TabsStructure
          tabs={tabs}
          defaultTab={0}
          onChange={(index) => console.log("Active Tab:", index)}
          classNames={{
            tabList: "",
            activeTab:
              "text-white border whitespace-nowrap   border-[#34353C] rounded-md",
            inactiveTab:
              "text-gray-400 bg-black rounded-md w-25 border  border-[#34353C] whitespace-nowrap hover:text-gray-200",
            content: "mt-6 text-gray-300",
          }}
          fullWidth
        />
      </div>
    </>
  );
}
