import React from "react";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { IoGameController } from "react-icons/io5";
import { RiTelegram2Fill } from "react-icons/ri";
import { RiTwitterXLine } from "react-icons/ri";
import { FaEthereum } from "react-icons/fa";
import { RiWirelessChargingLine } from "react-icons/ri";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoMdVolumeHigh } from "react-icons/io";

export default function Footer() {
  return (
    <>
      <div className="lg:fixed z-20 bottom-0 left-0  w-full bg-[#222325] py-1 flex-wrap gap-y-3 border-t-2 border-[#2D2E31] flex justify-center items-center ">
        <div className="flex gap-2 items-center font-Inter font-normal text-[9px] leading-[18px]">
          <span className="rounded-full h-2 w-2 bg-[#FCFC03]  "></span>
          Paused
        </div>
        <div className="w-[1px] h-[18px] bg-[#38393b7a] mx-4"></div>
        <div className="font-Inter font-normal text-[9px] leading-[18px] text-[#ACADAE] flex gap-2 items-center">
            <BsFillLightningChargeFill className="hidden lg:block "/>
          Aggregating
        </div>

        <div className="w-[1px] h-[18px] bg-[#38393b7a] mx-4"></div>
        <div className="font-Inter font-normal text-[9px] leading-[18px] text-[#ACADAE] flex gap-1 items-center">
            <RiWirelessChargingLine className="hidden lg:block " fontSize={"18px"} />
          Networks
        </div>
        <div className="w-[1px] h-[18px] bg-[#38393b7a] mx-4"></div>
        <div className="font-Inter font-normal text-[9px] lg:leading-[18px] text-[#ACADAE] flex gap-1 items-center">
          Terms of Service
        </div>
        <div className="w-[1px] h-[18px] bg-[#38393b7a] mx-4"></div>
        <div className="font-Inter font-normal text-[9px] leading-[18px] text-[#ACADAE] flex gap-1 items-center">
          Privacy Policy
        </div>
        <div className="w-[1px] h-[18px] bg-[#38393b7a] mx-4"></div>
        <div className="flex">
          <p className="font-Inter font-normal text-[12px] leading-[18px] text-[#ACADAE] flex gap-1 items-center">
             <IoGameController  className="hidden lg:block " fontSize={"15px"}/>
             <RiTelegram2Fill className="hidden lg:block " fontSize={"15px"}/>
             <RiTwitterXLine className="hidden lg:block " fontSize={"15px"}/>
             <FaEthereum className="hidden lg:block " fontSize={"15px"}/>
            $4,09.10
          </p>
        </div>
        <div className="w-[1px] h-[18px] bg-[#38393b7a] mx-4"></div>
        <div className="font-Inter font-normal text-[9px] leading-[18px] text-[#ACADAE] flex gap-1 items-center">
          <FaRegQuestionCircle className="hidden lg:block "/>
          Support
        </div>
        <div className="w-[1px] h-[18px] bg-[#38393b7a] mx-4"></div>
        <div>
          <IoMdVolumeHigh />
        </div>
      </div>
    </>
  );
}
