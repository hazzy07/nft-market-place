import React from "react";
import { Acc1 } from "../../assets/Route/Account";
import { Logopage } from "../../assets/Route/Reward";
import { MdOutlineStarOutline } from "react-icons/md";

export default function HelpWallet() {
  return (
    <div className="bg-black p-8 rounded-lg shadow-lg min-h-screen">
      <h2 className="text-[24px] font-[400] font-inte  mb-6">Linked Wallets</h2>
      <p className="font-[400] text-[#ACADAE] text-[14px] font-inter mb-4">
        You can link multiple wallets under a single profile in QTOVNFT. All
        wallet links are private and cannot be seen by other users. You can
        unlink at any time. Maximum 5 wallets.
      </p>

      <div className="border rounded-md p-3 border-[#ffffff18] flex items-center gap-2">
        <img src={Acc1} alt="" className="w-[50px]" />
        <div className="flex flex-col">
          <h1 className="font-inter font-[400] text-[14px] ">0x5db4...f663</h1>
          <div className="flex gap-2 items-center">
            <div className="bg-[#17181A] text-[#ACADAE]  px-2 rounded-md font-[400] text-[12px] font-space border border-[#ffffff18]">
              1 wallet
            </div>
            <div className="bg-[#17181A] text-[#ACADAE]  rounded-md px-2 font-[400] text-[12px] font-space border border-[#ffffff18]">
              $ 0.00
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center mt-4 justify-between ">

      <h1 className="text-[14px] font-[400] font-inter ">
        Your Linked Wallets
      </h1>

      <button className="bg-[#fff] text-black rounded-full px-4 py-[5px] " >
        Link a Wallet
      </button>
      </div>


      <div className="border mt-4 bg-[#17181A] rounded-md p-3 border-[#ffffff18] flex items-center gap-2">
        <img src={Logopage} alt="" className="w-[50px]" />
        <div className="flex flex-col">
          <div className="flex items-center gap-2 ">
            <h1 className="font-inter font-[400] text-[14px] ">
              0x5db4...f663
            </h1>

            <div className="bg-[#00A3FF4D] text-[#00A3FF] rounded-md px-2 font-[400] text-[12px] gap-2 py-[2px] flex items-center font-space border border-[#ffffff18]">
              <MdOutlineStarOutline size={18} />Primary
            </div>
          </div>
          <div className="text-[#ACADAE] rounded-md px-2 font-[400] text-[12px] font-space ">
            $ 0.00
          </div>
        </div>
      </div>
    </div>
  );
}
