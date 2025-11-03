import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import DangeonsFortune from "../../assets/Home/DungeonsFortune.png";
import {
  Gaswars,
  HyPurr,
  QuineLarvels,
  PixCat,
} from "../../assets/Route/HomeRoute";

export default function CardsReel() {
  const cards = [
    {
      image: QuineLarvels,
      title: "Pix Cats",
      price: "7.49",
      token: "QTOV",
      change: "+2.7%",
    },
    {
      image: HyPurr,
      title: "Pix Cats",
      price: "1,239.89",
      token: "HYPE",
      change: "+0.4%",
    },
    {
      image: Gaswars,
      title: "Quine by Larva Labs",
      price: "7.49",
      token: "QTOV",
      change: "0%",
    },
    {
      image: PixCat,
      title: "Pix Cats",
      price: "0.0014",
      token: "QTOV",
      change: "+8.3%",
    },
    {
      image: DangeonsFortune,
      title: "Dungeons of Fortune",
      price: "0.0014",
      token: "QTOV",
      change: "+8.3%",
    },
  ];

  // Duplicate slides for smooth loop
  const loopCards = [...cards, ...cards];

  return (
    <div>
      <h1 className="font-inter text-white mt-5 font-[400] text-[20px]">
        Featured Collections
      </h1>
      <p className="font-inter font-[400] text-[14px] text-[#ACADAE]">
        This week's curated collections
      </p>
      <div className="">
        <div className="lg:max-w-[100%] w-100 swapContainer">
          <Swiper
            slidesPerView={1.5}
            spaceBetween={16}
            loop={true}
            speed={4000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay]}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 2,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
          >
            {loopCards.map((card, i) => (
              <SwiperSlide key={i} className="flex-shrink-0 h-40 m-2">
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 p-4 flex items-end bg-black/20">
                    <div className="text-white">
                      <h4 className="font-[400] text-[14px] font-inter ">{card.title}</h4>
                      <div className="flex items-center gap-2">
                        <p className="text-[#ACADAE] text-[14px]">
                          Floor price:
                        </p>
                        <span className="text-[14px]">{card.price}</span>
                        <p className="text-[#ACADAE] text-[14px]">
                          {card.token}
                        </p>
                        <span className="text-[#47BB64] text-[14px]">
                          {card.change}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
