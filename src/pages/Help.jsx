import React from "react";
import { Outlet } from "react-router-dom";
import HelpSidebar from "../components/help/Helpsidbar";
import HelpContent from "../components/help/HelpContent"

export default function Help() {

 
  return (
    <div className="bg-[#222325] grid lg:grid-cols-[1fr_3fr] xl:grid-cols-[350px_3fr] min-h-screen text-white">
      <HelpSidebar />
    
      <div className="pt-6">
        <Outlet />
      </div>
    </div>
  );
}
