import React, { useState } from "react";

import {Gallery } from "../../assets/Route/Account";

import { TiStarburst } from "react-icons/ti";
import { BsExclamationCircle } from "react-icons/bs";
import { MdContentCopy } from "react-icons/md";

import { HiDotsHorizontal } from "react-icons/hi";
import TabsStructure from "../reusableComponent/TabsStructure";
// import ItemTabContent from "./ItemTabContent";
import Structure from "../Account/Galleries";

import { Acc1, Acc2, Acc3, Acc4, Acc5 } from "../../assets/Route/Account";

export default function HeroSection() {
  const tabs = [
    {
      label: "Galleries",
      content: <Structure></Structure>,
    },
    {
      label: "NFTs",
      //   content: <ItemTabContent />,
    },
    {
      label: "Tokens",
      content: <p className="text-white">Settings content here.</p>,
    },
    {
      label: "Offers",
      content: <p className="text-white">Settings content here.</p>,
    },
    {
      label: "Porfolio",
      content: <p className="text-white">Settings content here.</p>,
    },
    {
      label: "Created",
      content: <p className="text-white">Settings content here.</p>,
    },
    {
      label: "Watchlist",
      content: <p className="text-white">Settings content here.</p>,
    },
    {
      label: "Favourite",
      content: <p className="text-white">Settings content here.</p>,
    },

    {
      label: "Activity",
      content: <p className="text-white">Settings content here.</p>,
    },
  ];

  const [activeModal, setActiveModal] = useState(null);

  const handleOpen = (modalName) => setActiveModal(modalName);
  const handleClose = () => setActiveModal(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative  ">
        <img src={Acc3} alt="" className="w-full min-h-[300px] object-cover " />
        <div className="absolute bottom-0 left-0 right-0 h-[160px] bg-gradient-to-t from-[#111] to-transparent"></div>

        <div className="absolute bottom-0 left-2 md:left-10 flex justify-between lg:flex-row flex-col gap-y-4 lg:items-center right-10">
          <div className=" gap-3 items-center">
            <img src={Acc1} alt="" className="" />
            <div className="flex flex-col">
              <div className="flex items-center mt-3 gap-3 text-white">
                <h1 className="text-[18px]  font-medium">0x5db4...f663</h1>
                <div className="h-5 w-[1px] bg-[#515152bd]"></div>

                <div className="relative flex items-center gap-3 text-white">
                  <BsExclamationCircle
                    size={19}
                    className="cursor-pointer"
                    onClick={() => handleOpen("info")}
                  />
                  <MdContentCopy
                    size={19}
                    className="cursor-pointer"
                    onClick={() => handleOpen("copy")}
                  />

                  <HiDotsHorizontal
                    size={19}
                    className="cursor-pointer"
                    onClick={() => handleOpen("more")}
                  />

                  {/* Reusable Modal */}
                  {activeModal && (
                    <div
                      className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
                      onClick={handleClose}
                    >
                      <div
                        className="bg-[#111] text-white rounded-lg shadow-lg p-6 w-[90%] max-w-sm relative"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button
                          onClick={handleClose}
                          className="absolute top-2 right-2 text-gray-400 hover:text-white"
                        >
                          ✕
                        </button>
                        {activeModal === "info" && (
                          <p>Information details go here.</p>
                        )}
                        {activeModal === "copy" && <p>Copied content modal.</p>}
                        {activeModal === "globe" && (
                          <p>Language or region settings.</p>
                        )}

                        {activeModal === "share" && <p>Share options modal.</p>}
                        {activeModal === "more" && (
                          <p>More actions available here.</p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <div className="px-2 gap-2 flex items-center font-space text-[12px] font-[400] rounded-md bg-[#1e1f20] ">
                  <TiStarburst />
                  200
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mt-9  md:items-center gap-4">
            <span>
              <p className="font-space text-[#fff8] font-[400] text-[12px]">
                {" "}
                Floor price
              </p>
              <p className="font-space font-[400] text-[12px]"> 0.99 QTOV</p>
            </span>

            <span>
              <p className="font-space text-[#fff8] font-[400] text-[12px]">
                TOP OFFER
              </p>
              <p className="font-space font-[400] text-[12px]"> 0.0.76</p>
            </span>

            <span>
              <p className="font-space text-[#fff8] font-[400] text-[12px]">
                TOTAL VOLUME
              </p>
              <p className="font-space font-[400] text-[12px]">
                {" "}
                0.324.47 QTOV
              </p>
            </span>

            <span>
              <p className="font-space text-[#fff8] font-[400] text-[12px]">
                Listed
              </p>
              <p className="font-space font-[400] text-[12px]"> 1.5%</p>
            </span>

            <span>
              <p className="font-space text-[#fff8] font-[400] text-[12px]">
                {" "}
                OWNER (UNIQUE){" "}
              </p>
              <p className="font-space font-[400] text-[12px]"> 198 (99%) </p>
            </span>
          </div>
        </div>
      </div>

      <div className="">
        <TabsStructure
          tabs={tabs}
          defaultTab={0}
          classNames={{
            tabList: "",
            activeTab:
              "relative text-white after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[28px] after:border-b-[2px] font-inter font-[400] text-[14px]  after:border-white",

            inactiveTab:
              "text-gray-400 font-inter font-[400] text-[14px] hover:text-white",
            content: "p-4",
          }}
          onChange={(index) => console.log("Active tab:", index)}
        />
      </div>

      <div className="relative flex flex-col mt-[-120px] py-6 items-center justify-center left-[50%] -translate-x-1/2">
        <div className="relative flex justify-center items-center">
          <img
            src={Acc4}
            className="w-32 h-32 rounded-lg absolute -rotate-12 -translate-x-14 z-0"
          />

          <img src={Acc2} className="w-36 h-36 rounded-lg relative z-10" />

          <img
            src={Acc5}
            className="w-32 h-32 rounded-lg absolute rotate-12 translate-x-14 z-0"
          />
        </div>

        <h1 className="font-inter text-[32px] font-[400] mt-6">
          Feature your favorites
        </h1>

        <p className="font-inter text-center text-[16px] font-[400] mt-2 leading-relaxed">
          Showcase your favorite NFTs with our new galleries section. This tab
          <br />
          is publicly hidden until you add sections.
        </p>

        <button
          onClick={() => setIsOpen(true)}
          className="rounded-md px-5 py-2 bg-black border border-[#2D2E31] mt-4 hover:bg-[#111]"
        >
          Create a gallery
        </button>

       
      </div>
       {isOpen && (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70">
        <div className="bg-[#1a1a1a] w-full max-w-[450px] rounded-xl shadow-lg relative text-center border border-[#2D2E31]">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 rounded-full px-3 py-[5px]  bg-[#ffffff2d] text-gray-400 hover:text-white text-2xl"
          >
            ✕
          </button>

         <div className="p-6">
             <img
            src={Gallery}
            alt="Gallery Preview"
            className="w-full mx-auto mb-4 rounded-md object-cover"
          />

          <h2 className="text-white text-lg font-semibold mb-2">
            Create a gallery
          </h2>

          <p className="text-gray-400 text-sm mb-6">
            Select any items you own to create a gallery to feature on your
            profile.
          </p>
         </div>

          <div className="bg-black rounded-b-xl border-t p-4 border-[#ffffff31] ">

          <button
            onClick={() => setIsOpen(false)}
            className="w-full bg-white text-black font-medium py-2.5 rounded-full hover:bg-gray-200"
          >
            Get started
          </button>
          </div>

        </div>
      </div>
    )}
    </>
  );
}
