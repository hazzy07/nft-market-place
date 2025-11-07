// import React, {useState} from "react";

// export default function HelpMail() {
//   return (
//     <div className="bg-black p-8 rounded-lg shadow-lg min-h-screen">
//       <h2 className="text-2xl font-semibold mb-6">Email Notifications</h2>
//       <p className="text-gray-400 mb-4">Manage your notification preferences.</p>

//       <div className="space-y-3">
//         {["Product Updates", "Security Alerts", "Promotions"].map((item) => (
//           <label key={item} className="flex items-center gap-3 text-gray-300">
//             <input type="checkbox" className="accent-purple-600" />
//             {item}
//           </label>
//         ))}
//       </div>

//       <div className="flex justify-end mt-10">
//         <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg">
//           Save
//         </button>
//       </div>
//     </div>
//   );
// }

import { RxCaretDown } from "react-icons/rx";
import Dropdown from "../../components/reusableComponent/Dropdown";

import React, { useState } from "react";

const ToggleSwitch = ({ label }) => {
  const [enabled, setEnabled] = useState(false);
  return (
    <div className="flex items-center  justify-between py-3 px-4 text-white text-sm">
      <span>{label}</span>
      <button
        onClick={() => setEnabled(!enabled)}
        className={`w-10 h-5 rounded-full transition-colors duration-300 
          ${enabled ? "bg-[white]" : "bg-[#3f3f46]"} 
        
        relative`}
      >
        <span
          className={`absolute top-[2px] ${
            enabled ? "left-[22px] bg-[black]" : "left-[2px] bg-white"
          } w-4 h-4 bg-white rounded-full transition-all duration-300`}
        ></span>
      </button>
    </div>
  );
};

export default function HelpMail() {
  return (
    <>
      <div className="flex flex-col bg-black  p-8 shadow-lg  min-h-screen w-full">
        <h2 className="text-[24px] font-[400] font-inte ">
          Email Notifications
        </h2>
        <p className="font-[400] text-[#ACADAE] text-[14px] font-inter mb-6">
          Select the notifications you want to receive emails for
        </p>

        {/* Sidebar Section */}
        <div className="bg-[#222325] rounded-md border border-[#2D2E31] w-full p-3 ">
          <div className=" border-b border-[#2D2E31]">
            <ToggleSwitch
              label={
                <div className="flex  flex-col ">
                  <h className="font-inter font-[400] text-[14px]  ">
                    Item sold
                  </h>
                  <p className="font-inter text-[#ACADAE] font-[400] text-[14px]  ">
                    When someone purchased one of your items
                  </p>
                </div>
              }
            />
          </div>

          <div className=" border-b border-[#2D2E31]">
            <ToggleSwitch
              label={
                <div className="flex  flex-col ">
                  <h className="font-inter font-[400] text-[14px]  ">
                    Successful Purchase
                  </h>
                  <p className="font-inter text-[#ACADAE] font-[400] text-[14px]  ">
                    When you successfully buy an item
                  </p>
                </div>
              }
            />
          </div>

          <ToggleSwitch
            label={
              <div className="flex  flex-col ">
                <h className="font-inter font-[400] text-[14px]  ">
                  Successful Mint
                </h>
                <p className="font-inter text-[#ACADAE] font-[400] text-[14px]  ">
                  When you successfully mint an item
                </p>
              </div>
            }
          />
        </div>

        <div className="flex flex-col gap-10 lg:flex-row mt-5 justify-between items-center">
          <div>
            <h2 className="text-[24px] font-[400] font-inter ">Alerts</h2>
            <p className="font-[400] text-[#ACADAE] text-[14px] font-inter">
              Receive notifications only when you receive offers with a value
              greater than or equal to this amount of QTOV
            </p>
          </div>

          <div className="flex gap-3 flex-col ">
            <p className="font-[400] text-[#ACADAE] text-[14px] font-inter">
              Minimum Offer Threshold
            </p>

            <div className="flex items-center px-3 font-inter text-[14px] font-[400] rounded-md hover:border-gray-500 border border-[#FFFFFF10] justify-between ">
              <input
                type="text"
                placeholder="0.05"
                className="w-[150px] px-2 py-2 bg-transparent text-gray-200  outline-none 
              transition-all placeholder:text-white"
              />

              <p>QTOV</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
