import React from "react";
import {
  FUNLogo,
  FunkariBack,
 
} from "../../assets/Route/FunkariRoute";
import { MdOutlineStarRate } from "react-icons/md";
import { TiStarburst } from "react-icons/ti";
import { BsExclamationCircle } from "react-icons/bs";
import { MdContentCopy } from "react-icons/md";
import { IoGlobeOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { CiShare2 } from "react-icons/ci";
import { HiDotsHorizontal } from "react-icons/hi";
import TabsStructure from "../reusableComponent/TabsStructure";
import ItemTabContent from "./ItemTabContent";



export default function HeroSection() {
  const tabs = [
    {
      label: "Explore",
      content: <p className="text-white">This is the overview content.</p>,
    },
    {
      label: "Items",
      content: <ItemTabContent />,
    },
    {
      label: "Offers",
      content: <p className="text-white">Settings content here.</p>,
    },
    {
      label: "Holder",
      content: <p className="text-white">Settings content here.</p>,
    },
    {
      label: "Traits",
      content: <p className="text-white">Settings content here.</p>,
    },
    {
      label: "Activity",
      content: <p className="text-white">Settings content here.</p>,
    },
  ];

  return (
    <>
      <div className="relative  ">
        <img src={FunkariBack} alt="" className="w-full min-h-[300px] object-cover " />
        <div className="absolute bottom-0 left-0 right-0 h-[160px] bg-gradient-to-t from-[#111] to-transparent"></div>

        <div className="absolute bottom-0  left-10 flex justify-between lg:flex-row flex-col gap-y-4 lg:items-center right-10">
          <div className="flex flex-wrap gap-3 items-center">
            <img src={FUNLogo} alt="" className="" />
            <div className="flex flex-col">
              <div className="flex items-center gap-3 text-white">
                {/* Left Section */}
                <div className="flex gap-1 items-center">
                  <h1 className="text-[18px] font-medium">Funkari</h1>
                  <TiStarburst />
                  <MdOutlineStarRate />
                </div>

                {/* Divider */}
                <div className="h-5 w-[1px] bg-[#515152bd]"></div>

                {/* Right Section */}
                <div className="flex items-center gap-3">
                  <BsExclamationCircle className="cursor-pointer" />
                  <MdContentCopy className="cursor-pointer" />
                  <IoGlobeOutline className="cursor-pointer" />
                  <FaXTwitter className="cursor-pointer" />
                  <CiShare2 className="cursor-pointer" />
                  <HiDotsHorizontal className="cursor-pointer" />
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <div className="px-2 gap-2 flex items-center font-space text-[12px] font-[400] rounded-md bg-[#1e1f20] ">
                  By Funkari-Deployer
                  <TiStarburst />
                </div>

                <div className="px-2 gap-2 flex items-center font-space text-[12px] font-[400] rounded-md bg-[#1e1f20] ">
                  QTOVereum
                  <TiStarburst />
                </div>

                <div className="px-2 gap-2 flex items-center font-space text-[12px] font-[400] rounded-md bg-[#1e1f20] ">
                  <TiStarburst />
                  200
                </div>

                <div className="px-2 gap-2 flex items-center font-space text-[12px] font-[400] rounded-md bg-[#1e1f20] ">
                  Launched Jan 2023
                </div>

                <div className="px-2 gap-2 flex items-center font-space text-[12px] font-[400] rounded-md bg-[#1e1f20] ">
                  Memberships
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap  md:items-center gap-4">
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

      <div>
        <div className="">
          <TabsStructure
            tabs={tabs}
            defaultTab={0}
            classNames={{
              tabList: "",
              activeTab:
                "relative text-white after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[28px] after:border-b-[2px] font-inter font-[400] text-[12px  after:border-white",

              inactiveTab:
                "text-gray-400 font-inter font-[400] text-[12px] hover:text-white",
              content: "",
            }}
            onChange={(index) => console.log("Active tab:", index)}
          />
        </div>
      </div>
    </>
  );
}
