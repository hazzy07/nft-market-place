import React from "react";

import GridTable from "../reusableComponent/GridTable";
import { IoArrowUpSharp } from "react-icons/io5";
import { AiOutlineShopping } from "react-icons/ai";
import { TiStarburst } from "react-icons/ti";
import {
  Azuki,
  BoredApe,
  Canidae,
  CyberKongz,
  DXTerminal,
  GoodVibes,
  Gemiesis,
  Hypurr,
  LilPudgys,
  Milady,
  Monnbirds,
  Moonbirds,
  MutantApe,
  ONtegrity,
  PudgyPen,
} from "../../assets/Route/ProfileRoute";
import { GiSailboat } from "react-icons/gi";

import { TfiMedall } from "react-icons/tfi";
import { MdLocalFireDepartment } from "react-icons/md";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { MdOutlineTableRows } from "react-icons/md";
import { BsGrid1X2 } from "react-icons/bs";

export default function Filter({
  listView,
  setListView,
  showLeft,
  setShowLeft,
  activeCategory,
}) {
  // const columns = [
  //   <div className="text-[14px] font-space font-[400] ml-3"></div>,
  //   <div className="text-[14px] font-space font-[400] text-[#ACADAE]">
  //     EVENT
  //   </div>,

  //   <span className="font-space font-[400] text-[14px] text-[#ACADAE]">
  //     ITEM
  //   </span>,

  //   <span className="font-space font-[400] text-[14px] text-[#ACADAE]">
  //     PRICE
  //   </span>,

  //   <span className="font-space text-[14px] font-[400] text-[#ACADAE]">
  //     QTY
  //   </span>,

  //   <span className="font-space text-[14px] font-[400] text-[#ACADAE]">
  //     PARITY
  //   </span>,

  //   <span className="font-space font-[400] text-[14px] text-[#ACADAE]">
  //     FROM
  //   </span>,
  // ];

  // const nftList = [
  //   {
  //     icon: <GiSailboat size={23} />,
  //     img: CyberKongz,
  //     data: "24s ago",
  //     price: "+346.7%",
  //     DChange: "+277%",
  //     Offer: "$91.3K",
  //     VOL: "$6.3M",
  //     title: "CyberKongz VX",

  //     numberVal: "-10.31",
  //     category: "Sale",
  //   },
  //   {
  //     icon: <AiOutlineShopping size={23} />,
  //     img: DXTerminal,
  //     data: "20s ago",
  //     price: "+346.7%",
  //     DChange: "+277%",
  //     Offer: "$91.3K",
  //     VOL: "$6.3M",
  //     title: "CyberKongz VX",

  //     numberVal: "-2.31",
  //     category: "Mint",
  //   },
  //   {
  //     icon: <GiSailboat size={23} />,
  //     img: Canidae,
  //     data: "20s ago",
  //     price: "+346.7%",
  //     DChange: "+277%",
  //     title: "CyberKongz VX",
  //     category: "Sale",
  //     Offer: "$91.3K",
  //     VOL: "$6.3M",

  //     numberVal: "-10.31",
  //   },
  //   {
  //     icon: <AiOutlineShopping size={23} />,
  //     img: Azuki,
  //     data: "19s ago",
  //     price: "+346.7%",
  //     title: "CyberKongz VX",
  //     category: "Sale",
  //     DChange: "+277%",
  //     Offer: "$91.3K",
  //     VOL: "$6.3M",

  //     numberVal: "+10.31",
  //   },
  //   {
  //     icon: <GiSailboat size={23} />,
  //     img: BoredApe,
  //     data: "24s ago",
  //     price: "+346.7%",
  //     title: "CyberKongz VX",
  //     category: "Transfer",
  //     DChange: "+277%",
  //     Offer: "$91.3K",
  //     VOL: "$6.3M",

  //     numberVal: "+10.31",
  //   },
  //   {
  //     icon: <GiSailboat size={23} />,
  //     img: GoodVibes,
  //     data: "24s ago",
  //     price: "+346.7%",
  //     DChange: "+277%",
  //     Offer: "$91.3K",
  //     VOL: "$6.3M",
  //     title: "CyberKongz VX",

  //     numberVal: "+6.31",
  //     category: "Mint",
  //   },
  //   {
  //     icon: <AiOutlineShopping size={23} />,
  //     img: Gemiesis,
  //     data: "24s ago",
  //     price: "+346.7%",
  //     DChange: "+277%",
  //     Offer: "$91.3K",
  //     VOL: "$6.3M",
  //     title: "CyberKongz VX",

  //     numberVal: "-10.31",
  //     category: "Mint",
  //   },
  //   {
  //     icon: <AiOutlineShopping size={23} />,
  //     img: Hypurr,
  //     data: "24s ago",
  //     price: "+346.7%",
  //     DChange: "+277%",
  //     Offer: "$91.3K",
  //     VOL: "$6.3M",
  //     title: "CyberKongz VX",

  //     numberVal: "+10.31",
  //     category: "Mint",
  //   },
  //   {
  //     icon: <AiOutlineShopping size={23} />,
  //     img: LilPudgys,
  //     data: "20s ago",
  //     price: "+346.7%",
  //     DChange: "+277%",
  //     Offer: "$91.3K",
  //     VOL: "$6.3M",
  //     title: "CyberKongz VX",

  //     numberVal: "+0.31",
  //     category: "Listing",
  //   },
  //   {
  //     icon: <AiOutlineShopping size={23} />,
  //     img: Milady,
  //     data: "24s ago",
  //     price: "+346.7%",
  //     DChange: "+277%",
  //     Offer: "$91.3K",
  //     VOL: "$6.3M",
  //     title: "CyberKongz VX",

  //     numberVal: "-8.31",
  //     category: "Listing",
  //   },
  //   {
  //     icon: <AiOutlineShopping size={23} />,
  //     img: Moonbirds,
  //     data: "24s ago",
  //     price: "+346.7%",
  //     DChange: "+277%",
  //     Offer: "$91.3K",
  //     VOL: "$6.3M",
  //     title: "CyberKongz VX",

  //     numberVal: "+10.31",
  //     category: "Item Offer",
  //   },
  //   {
  //     icon: <AiOutlineShopping size={23} />,
  //     img: Monnbirds,
  //     data: "24s ago",
  //     price: "+346.7%",
  //     DChange: "+277%",
  //     Offer: "$91.3K",
  //     VOL: "$6.3M",
  //     title: "CyberKongz VX",

  //     numberVal: "-8.31",
  //     category: "Collection Offer",
  //   },
  //   {
  //     icon: <AiOutlineShopping size={23} />,
  //     img: MutantApe,
  //     data: "24s ago",
  //     price: "+346.7%",
  //     DChange: "+277%",
  //     Offer: "$91.3K",
  //     VOL: "$6.3M",
  //     title: "CyberKongz VX",

  //     numberVal: "0",
  //     category: "Collection Offer",
  //   },
  //   {
  //     icon: <AiOutlineShopping size={23} />,
  //     img: ONtegrity,
  //     data: "24s ago",
  //     price: "+346.7%",
  //     DChange: "+277%",
  //     Offer: "$91.3K",
  //     VOL: "$6.3M",
  //     title: "CyberKongz VX",

  //     numberVal: "+9.01",
  //     category: "Trait Offer",
  //   },

  //   {
  //     icon: <AiOutlineShopping size={23} />,
  //     img: Hypurr,
  //     data: "24s ago",
  //     price: "+346.7%",
  //     DChange: "+277%",
  //     Offer: "$91.3K",
  //     VOL: "$6.3M",
  //     title: "CyberKongz VX",

  //     numberVal: "+10.31",
  //     category: "Mint",
  //   },
  //   {
  //     icon: <AiOutlineShopping size={23} />,
  //     img: LilPudgys,
  //     data: "20s ago",
  //     price: "+346.7%",
  //     DChange: "+277%",
  //     Offer: "$91.3K",
  //     VOL: "$6.3M",
  //     title: "CyberKongz VX",

  //     numberVal: "+0.31",
  //     category: "Listing",
  //   },
  //   {
  //     icon: <AiOutlineShopping size={23} />,
  //     img: Milady,
  //     data: "24s ago",
  //     price: "+346.7%",
  //     DChange: "+277%",
  //     Offer: "$91.3K",
  //     VOL: "$6.3M",
  //     title: "CyberKongz VX",

  //     numberVal: "-8.31",
  //     category: "Listing",
  //   },
  //   {
  //     icon: <AiOutlineShopping size={23} />,
  //     img: Moonbirds,
  //     data: "24s ago",
  //     price: "+346.7%",
  //     DChange: "+277%",
  //     Offer: "$91.3K",
  //     VOL: "$6.3M",
  //     title: "CyberKongz VX",

  //     numberVal: "+10.31",
  //     category: "Item Offer",
  //   },
  //   {
  //     icon: <AiOutlineShopping size={23} />,
  //     img: Monnbirds,
  //     data: "24s ago",
  //     price: "+346.7%",
  //     DChange: "+277%",
  //     Offer: "$91.3K",
  //     VOL: "$6.3M",
  //     title: "CyberKongz VX",

  //     numberVal: "-8.31",
  //     category: "Collection Offer",
  //   },
  // ];

  // const filteredNFTs =
  //   activeCategory === "All"
  //     ? nftList
  //     : nftList.filter(
  //         (item) =>
  //           item.category.trim().toLowerCase() ===
  //           activeCategory.trim().toLowerCase()
  //       );

  // const textClass = listView
  //   ? "p-0 text-[14px] font-[200] "
  //   : "text-[14px] font-inter font-[400]";

  // const data = filteredNFTs.map((item) => [
  //   <div className="flex gap-3 items-center" key={item.img}>
  //     <div className="flex gap-2 items-center ">
  //       {item.icon}
  //       <span className="text-[14px]  font-inter font-[400] ">Sale</span>
  //     </div>

  //     <div className="flex gap-2 items-center">
  //       <img
  //         src={item.img}
  //         alt=""
  //         className={listView ? "w-6 h-6" : "w-12 h-12"}
  //       />
  //       <div className={listView ? "flex gap-2 " : ""}>
  //         <p
  //           className={`flex h-[100%] items-center justify-center ${textClass}`}
  //         >
  //           {item.title}
  //         </p>
  //         <span
  //           className={`${textClass} flex items-center gap-2 text-[#ACADAE] font-inter text-[14px] font-[400] `}
  //         >
  //           MFG
  //           <TiStarburst fill="white" />
  //         </span>
  //       </div>
  //     </div>
  //   </div>,

  //   <div className={`flex h-[100%] items-center  gap-3 ${textClass}`}>
  //     0.0044
  //     <span className=" text-[#ACADAE] ">QTOV</span>
  //   </div>,
  //   <div className={`gap-2 flex h-[100%] items-center ${textClass}`}>
  //     {item.price}
  //   </div>,
  //   <div className={`${textClass} flex h-[100%] items-center`}>
  //     {item.DChange}
  //   </div>,
  //   <div className={`${textClass} flex h-[100%] items-center`}>
  //     {item.Offer}
  //   </div>,
  //   <div className={`${textClass} flex h-[100%] items-center text-[#ACADAE]`}>
  //     {item.VOL}
  //   </div>,
  //   <div className="flex justify-between gap-2 items-center h-[100%]">
  //     <div>467234</div>
  //     <div className="flex gap-2">
  //       {item.data}

  //       <IoArrowUpSharp
  //         size={19}
  //         className="transition-transform duration-300 hover:rotate-45 mt-1 cursor-pointer"
  //       />
  //     </div>
  //   </div>,
  // ]);

  return (
    <>
      <div className="bg-black">
        <div className="p-[10px] flex items-center justify-between gap-3 flex-wrap">
          {/* Toggle Sidebar */}
          <div
            className="p-2 border border-[#FFFFFF10] rounded-md cursor-pointer"
            onClick={() => setShowLeft(!showLeft)}
          >
            <FaAngleDoubleLeft
              className={`transition-transform duration-300 ${
                !showLeft ? "rotate-180" : ""
              }`}
            />
          </div>

          {/* Toggle View */}
          <div className="flex gap-3">
            <div
              className={`p-2 border border-[#FFFFFF10] rounded-md cursor-pointer ${
                !listView
                  ? "bg-[#FFFFFF10] text-white"
                  : "text-gray-300 hover:text-yellow-300"
              }`}
              onClick={() => setListView(false)}
            >
              <MdOutlineTableRows size={17} />
            </div>

            <div
              className={`p-2 border border-[#FFFFFF10] rounded-md cursor-pointer ${
                listView
                  ? "bg-[#FFFFFF10] text-white"
                  : "text-gray-300 hover:text-yellow-300"
              }`}
              onClick={() => setListView(true)}
            >
              <BsGrid1X2 size={17} />
            </div>
          </div>
        </div>

        {/* Table Area */}
        <div className={`transition-all duration-500 ease-in-out `}>
          {/* <GridTable columns={columns} data={data} /> */}
        </div>
      </div>
    </>
  );
}
