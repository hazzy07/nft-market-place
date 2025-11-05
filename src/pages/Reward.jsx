import React from "react";



import Treasure from "../components/Reward/Treasure";
import Foundation from "../components/Reward/Foundation"

export default function Reward() {
  return (
    <>
    <div className="grid p-5 grid-cols-1 lg:grid-cols-[3fr_1fr] gap-5">
  <div className="">
    <Treasure />
  </div>
  <div className="">
    <Foundation/>
  </div>
</div>

    </>
  );
}
