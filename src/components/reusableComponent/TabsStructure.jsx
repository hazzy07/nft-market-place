import React, { useState } from "react";

export default function TabsStructure({ tabs, defaultTab = 0, onChange, classNames = {} }) {
  const [activeIndex, setActiveIndex] = useState(defaultTab);

  const handleTabClick = (index) => {
    setActiveIndex(index);
    if (onChange) onChange(index);
  };
  return (
    <div>
      <div
        className={`flex lg:flex-nowrap flex-wrap gap-y-2 border-b ${classNames.tabList || "border-[#2D2E31]"}`}
      >
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
              activeIndex === index
                ? classNames.activeTab || "text-white border-b-2 border-white"
                : classNames.inactiveTab || "text-gray-400 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className={`mt-4 ${classNames.content || "text-white"}`}>
        {tabs[activeIndex].content}
      </div>
    </div>
  );
}
