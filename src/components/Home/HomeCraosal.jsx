import React, { useState, useRef } from "react";
import { RxCaretRight, RxCaretLeft } from "react-icons/rx";
import { LuBadge } from "react-icons/lu";
import { FaRegCircleCheck } from "react-icons/fa6";
import { ChrisBear, GreenBear, LilPudgys, PurpleBear } from "../../assets/Route/HomeRoute";

export default function HomeCarousel({ slides: externalSlides }) {
  const defaultSlides = 
  [
    {
      id: 1,
      image: LilPudgys,
      title: "goblintown.wtf",
      author: "BY klngofthegoblin",
      floorPrices: [
        { name: "FLOOR PRICE", value: 0.916, currency: "ETH" },
        { name: "ITEMS", value: 21920 },
        { name: "TOTAL VOLUME", value: "62.3k", currency: "ETH" },
        // { name: "LISTED", value: "2.6%" },
      ],
      avatars: [GreenBear, ChrisBear, PurpleBear],
    },
    {
      id: 2,
      image: LilPudgys,
      title: "Doppelgänger by Justin Aversano & Kim Asendorf",
      author: "By Unknown",
      floorPrices: [
        { name: "FLOOR PRICE", value: 0.916, currency: "QTO" },
        { name: "ITEMS", value: 21920 },
        { name: "TOTAL VOLUME", value: 0.85, currency: "QTOV" },
        // { name: "LISTED", value: "3.1%" },
      ],
      avatars: ["https://picsum.photos/id/1011/50/50", "https://picsum.photos/id/1012/50/50"],
    },
    {
      id: 3,
      image: LilPudgys,
      title: "ZOGZ Editions by Matt Furie",
      author: "By ChalnasawCollector",
      floorPrices: [
        { name: "FLOOR PRICE", value: 0.916, currency: "QTO" },
        { name: "ITEMS", value: 21920 },
        { name: "TOTAL VOLUME", value: 0.85, currency: "QTOV" },
        // { name: "LISTED", value: "3.1%" },
      ],
      avatars: ["https://picsum.photos/id/1013/50/50"],
    },
  
     {
      id: 4,
      image: LilPudgys,
      title: "ZOGZ Editions by Matt Furie",
      author: "By ChalnasawCollector",
      floorPrices: [
        { name: "FLOOR PRICE", value: 0.916, currency: "QTO" },
        { name: "ITEMS", value: 21920 },
        { name: "TOTAL VOLUME", value: 0.85, currency: "QTOV" },
        // { name: "LISTED", value: "3.1%" },
      ],
      avatars: ["https://picsum.photos/id/1013/50/50"],
    },
  
     {
      id: 5,
      image: LilPudgys,
      title: "ZOGZ Editions by Matt Furie",
      author: "By ChalnasawCollector",
      floorPrices: [
        { name: "FLOOR PRICE", value: 0.916, currency: "QTO" },
        { name: "ITEMS", value: 21920 },
        { name: "TOTAL VOLUME", value: 0.85, currency: "QTOV" },
        // { name: "LISTED", value: "3.1%" },
      ],
      avatars: ["https://picsum.photos/id/1013/50/50"],
    },
  ];
 
  // Use external slides if provided, otherwise fallback to default
  const slides = externalSlides && externalSlides.length > 0 ? externalSlides : defaultSlides;

  const [current, setCurrent] = useState(0);
  const slideRef = useRef(null);

  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <div className="relative w-full overflow-hidden rounded-lg">
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
        ref={slideRef}
      >
        {slides.map((slide, idx) => (
          <div key={idx} className="w-full flex-shrink-0 relative">
            <img src={slide.image} alt={`slide-${idx}`} className="w-full h-64 md:h-96 object-cover rounded-lg" />

            <div className="absolute w-full bottom-0 flex flex-col md:flex-row justify-between items-end p-4 md:p-6 bg-gradient-to-t from-black/70 to-transparent rounded-lg">
              <div className="md:space-y-3 text-white w-full md:w-2/3">
                <div className="flex items-center gap-2">
                  <p className="md:text-2xl text-[18px]">{slide.title}</p>
                  {slide.id === 1 && <LuBadge fill="white" />}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <span>{slide.author}</span>
                  {slide.id === 1 && <FaRegCircleCheck />}
                </div>

                <div className="bg-[#ffffff23] border-[#FFFFFF29] border flex justify-between flex-wrap gap-3 md:p-3 p-2 rounded-lg text-white text-xs md:text-sm">
                  {slide.floorPrices.map((price, index) => (
                    <div key={index} className="space-y-1">
                      <span className="font-[400] md:text-[14px] text-[12px] text-[#FFFFFF]">{price.name}</span>
                      <div className="flex justify-between font-[400] md:text-[14px] text-[12px] text-[#FFFFFF]">
                        <p>{price.value}</p>
                        {price.currency && <p>{price.currency}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:flex hidden ml-2 gap-2 mt-2 md:mt-0">
                {slide.avatars.map((avatar, i) => (
                  <img key={i} src={avatar} alt={`avatar-${i}`} className="w-50 h-50 rounded-lg object-cover" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white p-2 rounded-full hover:bg-black/50"
      >
        <RxCaretLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white p-2 rounded-full hover:bg-black/50"
      >
        <RxCaretRight size={24} />
      </button>

      <div className="w-full flex justify-center gap-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-9 h-2 rounded-lg ${current === index ? "bg-white" : "bg-gray-400"}`}
          ></button>
        ))}
      </div>
    </div>
  );
}

