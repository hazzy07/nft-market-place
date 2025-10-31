import React, { useState } from "react";
import TabsStructure from "../reusableComponent/TabsStructure";
import { BsGrid1X2 } from "react-icons/bs";
import { StokeToken } from "../../assets/Home/HomeRoute";
import TokenContent from "./TokenContent";
import NFTsContent from "./NFTsContent";


export default function TokenTables({listView}) {
  const [activeTab, setActiveTab] = useState(0);

  const tabData = [
    {
      label: (
        <div className="flex text-[14px] font-inter font-[400] items-center gap-2">
          <BsGrid1X2 size={15} />
          NFTs
        </div>
      ),
      content: <NFTsContent listView={listView} />,
    },
    {
      label: (
        <div className="flex text-[14px] font-inter font-[400] items-center gap-2">
          <StokeToken size={17} />
          Tokens
        </div>
      ),
      content: <TokenContent listView={listView} />,
    },
  ];

  return (
    <div className="py-6 pr-6 pl-6 lg:pl-0">
      <div className="flex items-center justify-between">
        <TabsStructure
          tabs={tabData}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          classNames={{
            tabList: "border-none gap-x-2 flex items-center",
            activeTab:
              "text-white bg-[#FFFFFF10] font-normal font-inter px-2 py-[7px] border border-[#FFFFFF10] rounded-md",
            inactiveTab:
              "text-gray-300 font-normal font-inter border border-[#FFFFFF10] rounded-md px-2 py-1 hover:text-yellow-300 cursor-pointer",
            content: "text-gray-200 rounded-b-md",
          }}
        />
      </div>
    </div>
  );
}
