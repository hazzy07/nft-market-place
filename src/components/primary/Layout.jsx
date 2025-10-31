import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="flex flex-col md:flex-row h-[100vh]">
      <Sidebar />
      <main className="flex-1 bg-[#2D2E31] overflow-y-auto transition-all duration-300 md:ml-[52px]">
        <Header />
        <Outlet />
      </main>
    </div>
  );
}

