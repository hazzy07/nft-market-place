import React,{useState} from "react";
import {
  SyncFab,
  Frog,
  Ribbit,
  MasterBOT,
  Daxlab,
  SubQuer,
  BunPoodle,
  NonKyot,
} from "../../assets/Route/HomeRoute";
import Dropdown from "../reusableComponent/Dropdown";
import { MdOutlineTableRows } from "react-icons/md";

const tokenData = [
  //   {
  //     image: SyncFab,
  //     name: "SyncFab Smart Manufacturing Blockchain",
  //     symbol: "MFG",
  //     price: "$0.007178",
  //     change: "+343.6%",
  //   },
  {
    image: Frog,
    name: "FrogToken Blockchain",
    symbol: "FRG",
    price: "$0.015",
    change: "+12.4%",
  },
  //   {
  //     image: Ribbit,
  //     name: "Ribbit Finance",
  //     symbol: "RBBT",
  //     price: "$0.23",
  //     change: "-3.5%",
  //   },
  {
    image: MasterBOT,
    name: "MasterBOT AI Token",
    symbol: "MBOT",
    price: "$1.12",
    change: "+7.8%",
  },
  {
    image: Daxlab,
    name: "Daxlab Labs",
    symbol: "DXL",
    price: "$0.54",
    change: "+21.3%",
  },
  {
    image: SubQuer,
    name: "SubQuer Network",
    symbol: "SUBQ",
    price: "$0.88",
    change: "-2.1%",
  },
  {
    image: BunPoodle,
    name: "BunPoodle Token",
    symbol: "BND",
    price: "$0.009",
    change: "+15.0%",
  },
  {
    image: NonKyot,
    name: "NonKyot Project",
    symbol: "NKY",
    price: "$0.77",
    change: "+0.5%",
  },
  {
    image: SyncFab,
    name: "SyncFab Smart Manufacturing Blockchain",
    symbol: "MFG",
    price: "$0.007178",
    change: "+343.6%",
  },
  {
    image: Frog,
    name: "FrogToken Blockchain",
    symbol: "FRG",
    price: "$0.015",
    change: "+12.4%",
  },
  {
    image: Ribbit,
    name: "Ribbit Finance",
    symbol: "RBBT",
    price: "$0.23",
    change: "-3.5%",
  },
  {
    image: MasterBOT,
    name: "MasterBOT AI Token",
    symbol: "MBOT",
    price: "$1.12",
    change: "+7.8%",
  },
  {
    image: Daxlab,
    name: "Daxlab Labs",
    symbol: "DXL",
    price: "$0.54",
    change: "+21.3%",
  },
  {
    image: SubQuer,
    name: "SubQuer Network",
    symbol: "SUBQ",
    price: "$0.88",
    change: "-2.1%",
  },
  {
    image: BunPoodle,
    name: "BunPoodle Token",
    symbol: "BND",
    price: "$0.009",
    change: "+15.0%",
  },
];

export default function NFTsContent() {
    const [listView, setListView] = useState(false);
  return (
    <>
      <div>
        {tokenData.map((token, index) => (
          <div
            key={index}
            className="grid items-center grid-cols-[1fr_3fr_1fr]"
          >
            <div className="text-center">
              <img
                src={token.image}
                alt=""
                className={listView ? "h-[40px]" : "h-[70px]"}
              />
            </div>
            <div className="text-[13px] font-inter font-[400]">
              <span>
                {token.name}
                <span className="text-[#ACADAE] pl-2">{token.symbol}</span>
              </span>
            </div>
            <div className="text-end">
              <div className="flex flex-col text-[14px] font-[400]">
                <span>{token.price}</span>
                <span
                  className={
                    token.change.startsWith("+")
                      ? "text-[#47BB64]"
                      : "text-red-500"
                  }
                >
                  {token.change}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute top-[24px] right-14 hidden lg:flex items-center gap-2">
       
          <Dropdown
            items={["A", "B", "C"]}
            placeholder="1d"
            className="bg-tranparent  rounded-md cursor-pointer"
            onSelect={(val) => console.log(val)}
            paddingY = "py-[6px]"
          />
    

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
          className={`p-2 rounded-md border border-[#FFFFFF10] cursor-pointer ${
            listView
              ? "bg-[#FFFFFF10] text-white"
              : "text-gray-300 hover:text-yellow-300"
          }`}
          onClick={() => setListView(true)}
        >
          <MdOutlineTableRows size={17} />
        </div>
      </div>
    </>
  );
}
