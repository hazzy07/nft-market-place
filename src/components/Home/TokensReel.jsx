import React, { useRef } from "react";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
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
import Sparkline from "../reusableComponent/Sparkline";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const data = [
  { value: 0 },
  { value: 95 },
  { value: 12 },
  { value: 78 },
  { value: 39 },
  { value: 0 },
];
const sampledata = [
  { value: 10 },
  { value: 35 },
  { value: 12 },
  { value: 8 },
  { value: 59 },
  { value: 0 },
];
const BunPood = [
  { value: 10 },
  { value: 25 },
  { value: 32 },
  { value: 58 },
  { value: 49 },
  { value: 0 },
];

const tokenCards = [
  {
    img: SyncFab,
    name: "SyncFab",
    symbol: "MFG",
    price: "$0.007",
    change: "+343.6%",
    data: data,
  },
  {
    img: Frog,
    name: "FroG",
    symbol: "FGM",
    price: "$0.007",
    change: "+343.6%",
    data: sampledata,
  },
  {
    img: BunPoodle,
    name: "BunPoodle",
    symbol: "BUN",
    price: "$0.017",
    change: "+70.6%",
    data: BunPood,
  },
  {
    img: NonKyot,
    name: "NonKyot",
    symbol: "NKT",
    price: "$0.017",
    change: "+70.6%",
    data: data,
  },
  {
    img: MasterBOT,
    name: "MasterBOT",
    symbol: "BOT",
    price: "$0.013",
    change: "+50.6%",
    data: sampledata,
  },
  {
    img: SubQuer,
    name: "SubQuer",
    symbol: "SQT",
    price: "$0.001",
    change: "+38.8%",
    data: BunPood,
  },
  {
    img: Ribbit,
    name: "Ribbit",
    symbol: "TIBBIR",
    price: "$0.276",
    change: "+37.8%",
    data: data,
  },
  {
    img: Daxlab,
    name: "Dexlab",
    symbol: "XLAB",
    price: "$0.001",
    change: "+36.8%",
    data: BunPood,
  },
  {
    img: SyncFab,
    name: "SyncFab",
    symbol: "MFG",
    price: "$0.007",
    change: "+343.6%",
    data: data,
  },
  {
    img: Frog,
    name: "FroG",
    symbol: "FGM",
    price: "$0.007",
    change: "+343.6%",
    data: sampledata,
  },
];

function TokenCard({ img, name, symbol, price, change, data }) {
  return (
    <div className="bg-[#2a2a2a] cursor-pointer token flex justify-between items-center border border-[#494848ab] rounded-lg text-white transition-transform transform hover:scale-95 duration-300">
      <img src={img} alt={name} className="riddit "/>
      <div className="flex items-center justify-between py-5 pr-5 gap-3 w-full">
        <div className="flex gap-3 text-sm">
          <div>
            <span className="block">{name}</span>
            <p className="text-gray-400">{price}</p>
          </div>
          <div>
            <span className="block">{symbol}</span>
            <p className="text-green-500">{change}</p>
          </div>
        </div>
       <div className="spark">
         <Sparkline data={data} color="#22c55e" />
       </div>
      </div>
    </div>
  );
}

export default function TokenReel({
  heading = "Featured Collections",
  subHeading = "This week's curated collections",
}) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const groupedCards = [];
  for (let i = 0; i < tokenCards.length; i += 2) {
    groupedCards.push(tokenCards.slice(i, i + 2));
  }

  return (
    <div className="py-[15px]">
      <h1 className="font-inter text-white font-[400] text-[20px]">
        {heading}
      </h1>
      <p className="font-inter mb-[15px] font-[400] text-[14px] text-[#ACADAE]">
        {subHeading}
      </p>

      <div className="max-w-[900px] lg:max-w-[100%]  relative swapContainer  group">
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          modules={[Navigation]}
          onSwiper={(swiper) => {
           
            setTimeout(() => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
          breakpoints={{
            320: { slidesPerView: 1 }, // mobile
            640: { slidesPerView: 2 }, // small tablets
            1000: { slidesPerView: 2 }, // medium screens
            1024: { slidesPerView: 2.3 }, // larger screens (add one more)
          }}
        >
          {groupedCards.map((pair, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col gap-4">
                {pair.map((card, i) => (
                  <TokenCard key={i} {...card} />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          ref={prevRef}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white h-full w-10 hidden group-hover:flex items-center justify-center cursor-pointer"
        >
          <RxCaretLeft size={24} />
        </div>

        <div
          ref={nextRef}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white h-full w-10 hidden group-hover:flex items-center justify-center cursor-pointer"
        >
          <RxCaretRight size={24} />
        </div>
      </div>
    </div>
  );
}
