import React from "react";
import { MdOutlineImage } from "react-icons/md";
import { IoCartSharp } from "react-icons/io5";

import { IoLocate } from "react-icons/io5";

export default function HelpDeveloper() {
  const cardData = [
    {
      icon: <MdOutlineImage fill="#2092FF" size={29} />,
      title: "Display NFTs in your app",
      text: "Retrieve NFT data, images, and other information from both on and off-chain sources.",
    },
    {
      icon: <IoCartSharp fill="#2092FF" size={29} />,
      title: "Buy & Sell NFTs",
      text: "Easily retrieve and create QTOVNFT listings and offers.",
    },
    {
      icon: <IoLocate  color="#2092FF" size={29} />,
      title: "NFT Market Insights",
      text: "Get real-time and historical data on NFTs, collections, and the OS marketplace.",
    },
  ];

  return (
    <div className="bg-black p-8  shadow-lg min-h-screen">
      <h2 className="text-[24px] font-[400] font-inte ">Email Notifications</h2>
      <p className="font-[400] text-[#ACADAE] text-[14px] font-inter mb-6">
        Select the notifications you want to receive emails for
      </p>

      <div className="bg-[#151515] flex flex-col lg:flex-row rounded-md border border-[#2D2E31] gap-7 w-full  p-5">
        <div>
          <h2 className="text-[24px] font-[400] font-inter ">Alerts</h2>
          <p className="font-[400] text-[#ACADAE] text-[14px] font-inter">
            Receive notifications only when you receive offers with a value
            greater than or equal to this amount of QTOV
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="bg-transparent whitespace-nowrap rounded-full px-4 py-[9px] hover:border border-[#ffffff21] ">
            View API docs
          </button>

          <button className="bg-[#fff] whitespace-nowrap text-black rounded-full px-4 py-[9px] ">
            Go to Profile
          </button>
        </div>
      </div>

      <div className="flex h-full gap-6 mt-6 flex-wrap lg:flex-nowrap justify-between items-stretch">
        {cardData.map((card, i) => (
          <div
            key={i}
            className="flex flex-col justify-between bg-[#151515] rounded-md p-5 border border-[#2D2E31] 
                 w-full lg:w-1/3 min-h-[180px]"
          >
            {card.icon}
            <div>
              <p className="font-[400] text-[14px] mt-2 font-inter">
                {card.title}
              </p>
              <p className="font-[400] text-[#ACADAE] text-[14px] font-inter mt-3">
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
