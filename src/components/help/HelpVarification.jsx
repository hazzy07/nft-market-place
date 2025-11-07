import React from "react";

export default function HelpVerification() {
  return (
    <div className="bg-black p-8 shadow-lg min-h-screen">
      <h2 className="text-[24px] font-[400] font-inte ">Email Notifications</h2>
      <p className="font-[400] text-[#ACADAE] mt-2 text-[14px] font-inter mb-3">
        A verified account has a badge that appears next to the account name.
        Below are the minimum requirements to apply for verification and
        badging. Approval is not guaranteed. 
        <span className="text-[#2092FF]">Learn more</span>
      </p>
      <p className="font-[400] mt-5 text-[#ACADAE] text-[14px] font-inter">
        Applying for account verification will also send any eligible
        collections for badge review. Creators don't need to separately apply
        for account verification and collection badging. To be eligible to
        apply, your account must meet the following requirements.
      </p>

      <div className="bg-[#222325] px-6 py-3 mt-6 rounded-md border border-[#2D2E31]">
        <div className="flex font-[400] text-[14px] font-inter justify-between items-center  w-full py-3 rounded-md border-b border-[#2D2E31] ">
          <p>A username</p>

          <p className="text-[#ACADAE] font-space">Not Met</p>
        </div>

        <div className="flex justify-between items-center  w-full py-3 rounded-md border-b border-[#2D2E31] font-[400]  text-[14px] font-inter">
          <p>Add a profile picture and banner image</p>

          <p className="text-[#ACADAE] font-space ">Not Met</p>
        </div>

        <div className="flex justify-between items-center  w-full py-3 rounded-md border-b border-[#2D2E31] font-[400]  text-[14px] font-inter">
          <p>Verify your email address</p>

          <p className="text-[#ACADAE] font-space">Not Met</p>
        </div>

        <div className="flex justify-between items-center  w-full py-3 rounded-md  font-[400]  text-[14px] font-inter">
          <div className="flex font-[400] text-[#ACADAE] text-[14px] font-inter flex-col">
            <p>You must meet all criteria below:</p>
            <ul className="list-disc list-inside">
              <li>
                Own at least one collection with at minimum 25 QTOV (or
                equivalent) of secondary volume sold
              </li>

              <li>A username</li>

              <li>A banner image and logo</li>
            </ul>
          </div>

          <p className="text-[#ACADAE] font-space ">Not Met</p>
        </div>
      </div>
    </div>
  );
}
