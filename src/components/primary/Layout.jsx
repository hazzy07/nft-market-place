import React from "react";
import Sidebar from "./Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  const location = useLocation();

  // Pages that should NOT have md:pt-[60px]
  const noPaddingRoutes = ["/funkari"];

  // Check if current page should remove pt
  const removePadding = noPaddingRoutes.includes(location.pathname);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <main
        className={`flex-1  bg-[#111] transition-all lg:mb-7 duration-300 md:ml-[60px] 
          ${!removePadding ? "md:pt-[60px]" : "md:pt-[0px]"}
        `}
      >
        <Header />
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}
