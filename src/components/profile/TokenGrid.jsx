import React from "react";
import { IoIosStarOutline } from "react-icons/io";
import GridTable from "../reusableComponent/GridTable";
import Sparkline from "../reusableComponent/Sparkline";
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
import { TiStarburst } from "react-icons/ti";
import { RxCaretDown } from "react-icons/rx";
import { RxCaretUp } from "react-icons/rx";

const sparkdata = [
  { value: 0 },
  { value: 30 },
  { value: 42 },
  { value: 68 },
  { value: 0 },
  //   { value: 0 },
];

const sparkdataFirst = [
  { value: 70 },
  { value: 70 },
  { value: 72 },
  { value: 8 },
  { value: 70 },
  //   { value: 0 },
];

const sparkdatasecond = [
  { value: 70 },
  { value: 60 },
  { value: 32 },
  { value: 68 },
  { value: 70 },
  //   { value: 0 },
];

export default function TokenGrid({ listView }) {
  const columns = [
    <div className="text-[14px] font-space font-[400] ml-3 ">Collection</div>,
    <span></span>,
    <div className="flex ">
      <span className="font-space font-[400] text-[11px] xxl:text-[14px] text-[#ACADAE]">
        PRICE
      </span>
      <span className="flex flex-col justify-center items-center gap-0">
        <RxCaretUp className="mb-[-7px]" size={13} />
        <RxCaretDown size={13} />
      </span>
    </div>,
    <div className="flex ">
      <span className="font-space font-[400] text-[12px] xxl:text-[14px] text-[#ACADAE]">
        1H CHANGE
      </span>
      <span className="flex flex-col justify-center items-center gap-0">
        <RxCaretUp className="mb-[-7px]" size={13} />
        <RxCaretDown size={13} />
      </span>
    </div>,
    <div className="flex ">
      <span className="font-space text-[11px] xxl:text-[14px] font-[400]  text-[#ACADAE]">
        1D
      </span>
      <span className="flex flex-col justify-center items-center gap-0">
        <RxCaretUp className="mb-[-7px]" size={13} />
        <RxCaretDown size={13} />
      </span>
    </div>,
    <div className="flex ">
      <span className="font-space text-[11px] xxl:text-[14px] font-[400]  text-[#ACADAE]">
        30D CHANGE
      </span>

      <RxCaretDown size={13} />
    </div>,
    <div className="flex ">
      <span className="font-space font-[400] text-[11px] xxl:text-[14px] text-[#ACADAE]">
        Last 1d
      </span>
      <span className="flex flex-col justify-center items-center gap-0">
        <RxCaretUp className="mb-[-7px]" size={13} />
        <RxCaretDown size={13} />
      </span>
    </div>,
    // <div></div>
  ];

  const nftList = [
    {
      img: CyberKongz,
      data: sparkdataFirst,
      price: "+346.7%",
      DChange: "+277%",
      Offer: "$91.3K",
      VOL: "$6.3M",
      title: "CyberKongz VX",
      color: "#47BB64",
      numberVal: "-10.31",
    },
    {
      img: DXTerminal,
      data: sparkdatasecond,
      price: "+346.7%",
      DChange: "+277%",
      Offer: "$91.3K",
      VOL: "$6.3M",
      title: "CyberKongz VX",
      color: "#47BB64",
      numberVal: "-2.31",
    },

    {
      img: Canidae,
      data: sparkdatasecond,
      price: "+346.7%",
      DChange: "+277%",
      title: "CyberKongz VX",

      Offer: "$91.3K",
      VOL: "$6.3M",
      sparkdata: "",
      color: "#47BB64",
      numberVal: "-10.31",
    },
    {
      img: Azuki,
      data: sparkdata,
      price: "+346.7%",
      title: "CyberKongz VX",

      DChange: "+277%",
      Offer: "$91.3K",
      VOL: "$6.3M",
      sparkdata: "",
      color: "#47BB64",
      numberVal: "+10.31",
    },
    {
      img: BoredApe,
      data: sparkdataFirst,
      price: "+346.7%",
      title: "CyberKongz VX",

      DChange: "+277%",
      Offer: "$91.3K",
      VOL: "$6.3M",
      sparkdata: "",
      color: "#E24756",
      numberVal: "+10.31",
    },

    {
      img: GoodVibes,
      data: sparkdataFirst,
      price: "+346.7%",
      DChange: "+277%",
      Offer: "$91.3K",
      VOL: "$6.3M",
      title: "CyberKongz VX",
      color: "#E24756",
      numberVal: "+6.31",
    },
    {
      img: Gemiesis,
      data: sparkdataFirst,
      price: "+346.7%",
      DChange: "+277%",
      Offer: "$91.3K",
      VOL: "$6.3M",
      title: "CyberKongz VX",
      color: "#47BB64",
      numberVal: "-10.31",
    },
    {
      img: Hypurr,
      data: sparkdataFirst,
      price: "+346.7%",
      DChange: "+277%",
      Offer: "$91.3K",
      VOL: "$6.3M",
      title: "CyberKongz VX",
      color: "#47BB64",
      numberVal: "+10.31",
    },
    {
      img: LilPudgys,
      data: sparkdatasecond,
      price: "+346.7%",
      DChange: "+277%",
      Offer: "$91.3K",
      VOL: "$6.3M",
      title: "CyberKongz VX",
      color: "#E24756",
      numberVal: "+0.31",
    },
    {
      img: Milady,
      data: sparkdataFirst,
      price: "+346.7%",
      DChange: "+277%",
      Offer: "$91.3K",
      VOL: "$6.3M",
      title: "CyberKongz VX",
      color: "#47BB64",
      numberVal: "-8.31",
    },

    {
      img: Moonbirds,
      data: sparkdataFirst,
      price: "+346.7%",
      DChange: "+277%",
      Offer: "$91.3K",
      VOL: "$6.3M",
      title: "CyberKongz VX",
      color: "#47BB64",
      numberVal: "+10.31",
    },

    {
      img: Monnbirds,
      data: sparkdataFirst,
      price: "+346.7%",
      DChange: "+277%",
      Offer: "$91.3K",
      VOL: "$6.3M",
      title: "CyberKongz VX",
      color: "#47BB64",
      numberVal: "-8.31",
    },

    {
      img: MutantApe,
      data: sparkdataFirst,
      price: "+346.7%",
      DChange: "+277%",
      Offer: "$91.3K",
      VOL: "$6.3M",
      title: "CyberKongz VX",
      color: "#47BB64",
      numberVal: "0",
    },

    {
      img: ONtegrity,
      data: sparkdataFirst,
      price: "+346.7%",
      DChange: "+277%",
      Offer: "$91.3K",
      VOL: "$6.3M",
      title: "CyberKongz VX",
      color: "#47BB64",
      numberVal: "+9.01",
    },

    {
      img: PudgyPen,
      data: sparkdataFirst,
      price: "+346.7%",
      DChange: "+277%",
      Offer: "$91.3K",
      VOL: "$6.3M",
      title: "CyberKongz VX",
      color: "#47BB64",
      numberVal: "+8.31",
    },
  ];

  const textClass = listView
    ? "p-0 text-[14px] font-[200] "
    : "text-[14px] font-inter mt-2 font-[400] ";

  const getColorClass = (value) => {
    if (value.startsWith("+")) return "text-green-500";
    if (value.startsWith("-")) return "text-red-500";
    return "text-white";
  };

  const data = nftList.map((item) => [
    <div className="flex justify-between items-center" key={item.img}>
      <div className="flex gap-2 items-center">
        <img
          src={item.img}
          alt=""
          className={listView ? "w-6 h-6" : "w-10 h-10"}
        />
        <p className={`flex h-[100%] items-center justify-center ${textClass}`}>
          {item.title}
        </p>
        <span className={textClass}>MFG</span>
        {/* <TiStarburst fontSize="18px" /> */}
      </div>
      <div className="flex gap-2">
        <p className={`${textClass} flex h-[100%] items-center justify-center`}>
          0.0178
        </p>
      </div>
      <p className={`${textClass} ${getColorClass(item.numberVal)}`}>
        {item.numberVal}%
      </p>
    </div>,

    <div className={`flex h-[100%] items-center justify-center ${textClass}`}>
      -
    </div>,

    <div className="gap-2 flex h-[100%] items-center  ">
      <p
        //   className={textClass}
        className={`${textClass} ${getColorClass(item.price)}`}
      >
        {item.price}
      </p>
     
    </div>,

    <div className={`${{ textClass }} ${getColorClass(item.DChange)} flex h-[100%] items-center `}>
      {item.DChange}
    </div>,
    <div className={`${{ textClass }} flex h-[100%] items-center  `}>
      {" "}
      {item.Offer}{" "}
    </div>,
    <div
      className={`${{ textClass }} flex h-[100%] items-center text-[#ACADAE]`}
    >
      {" "}
      {item.VOL}{" "}
    </div>,

    <Sparkline
      data={item.data}
      height={listView ? 25 : 40}
      color={item.color}
    />,
  ]);

  return (
    <>
      <GridTable columns={columns} data={data} />
    </>
  );
}
