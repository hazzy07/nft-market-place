import React, { useState } from "react";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { IoGameController } from "react-icons/io5";
import { RiTelegram2Fill } from "react-icons/ri";
import { RiTwitterXLine } from "react-icons/ri";
import { FaEthereum } from "react-icons/fa";
import { RiWirelessChargingLine } from "react-icons/ri";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoMdVolumeHigh } from "react-icons/io";
import { BsSunFill, BsMoonFill, BsCircleHalf } from "react-icons/bs";

export default function Footer() {
  // const [theme, setTheme] = useState("dark");
  const [plan, setPlan] = useState("collector");
  const [currency, setCurrency] = useState("crypto");

  const buttonClass = (activeValue, currentValue) =>
    `px-1 py-[3px] text-[10px] rounded-[4px] transition ${
      activeValue === currentValue
        ? "bg-black text-[9px] text-white"
        : "bg-[#2c2c2c] text-gray-300 hover:text-white"
    }`;
  return (
    <>
      <div className="fixed z-20 bottom-0 left-0  w-full bg-[#151515] py-1 flex-wrap gap-y-3 border-t-2 border-[#2D2E31] flex justify-center items-center ">
        <div className="flex gap-2 items-center font-Inter font-normal text-[9px] leading-[18px]">
          <span className="rounded-full h-2 w-2 bg-[#FCFC03]  "></span>
          Paused
        </div>
        <div className="w-[1px] h-[18px] bg-[#38393b7a] mx-4"></div>
        <div className="font-Inter font-normal text-[9px] leading-[18px] text-[#ACADAE] flex gap-2 items-center">
          <BsFillLightningChargeFill className="hidden lg:block " />
          Aggregating
        </div>

        <div className="w-[1px] h-[18px] bg-[#38393b7a] mx-4"></div>
        <div className="font-Inter font-normal text-[9px] leading-[18px] text-[#ACADAE] flex gap-1 items-center">
          <RiWirelessChargingLine
            className="hidden lg:block "
            fontSize={"18px"}
          />
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
            <IoGameController className="hidden lg:block " fontSize={"15px"} />
            <RiTelegram2Fill className="hidden lg:block " fontSize={"15px"} />
            <RiTwitterXLine className="hidden lg:block " fontSize={"15px"} />
            <FaEthereum className="hidden lg:block " fontSize={"15px"} />
            $4,09.10
          </p>
        </div>
        <div className="w-[1px] h-[18px] bg-[#38393b7a] mx-4"></div>
        <div className="font-Inter font-normal text-[9px] leading-[18px] text-[#ACADAE] flex gap-1 items-center">
          <FaRegQuestionCircle className="hidden lg:block " />
          Support
        </div>
        <div className="w-[1px] h-[18px] bg-[#38393b7a] mx-4"></div>

        <div className="md:flex hidden items-center gap-3">
         
        

          {/* Plan Toggle */}
          <div className="flex items-center gap-1 p-[2px] bg-[#2c2c2c] rounded-md">
            <button
              onClick={() => setPlan("collector")}
              className={buttonClass(plan, "collector")}
            >
              collector
            </button>

            <button
              onClick={() => setPlan("pro")}
              className={buttonClass(plan, "pro")}
            >
              pro
            </button>
          </div>

          {/* Currency Toggle */}
          <div className="flex items-center gap-1 mr-2 p-[2px] bg-[#2c2c2c] rounded-md">
            <button
              onClick={() => setCurrency("crypto")}
              className={buttonClass(currency, "crypto")}
            >
              crypto
            </button>

            <button
              onClick={() => setCurrency("usd")}
              className={buttonClass(currency, "usd")}
            >
              usd
            </button>
          </div>
        </div>

        <div>
          <IoMdVolumeHigh />
        </div>
      </div>
    </>
  );
}
