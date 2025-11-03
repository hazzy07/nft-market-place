import React, { useState } from "react";
import ActivitySidesection from "../components/Activity/ActivitySidesection";
import Filter from "../components/Activity/Filter";

export default function Activity() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showLeft, setShowLeft] = useState(true);
  const [listView, setListView] = useState(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] min-h-screen">
      {/* Left Section */}
      {showLeft && (
        <div className="bg-[#111] border-r border-[#222] transition-all duration-300">
          <ActivitySidesection
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>
      )}

      {/* Right Section */}
      <div
        className={`transition-all duration-300 ${
          showLeft ? "w-full" : "col-span-2 w-full"
        }`}
      >
        <Filter
          listView={listView}
          setListView={setListView}
          showLeft={showLeft}
          setShowLeft={setShowLeft}
          activeCategory={activeCategory}
        />
      </div>
    </div>
  );
}
