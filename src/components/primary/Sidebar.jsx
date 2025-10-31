import { NavLink } from "react-router-dom";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import { useState, useEffect } from "react";
import { MdOutlineExplore } from "react-icons/md";
import { BsGrid1X2 } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";
import { TfiMenuAlt } from "react-icons/tfi";
import {
  StokeToken,
  Rewards,
  Studio,
  HelpIcon,
  Logo,
} from "../../assets/Home/HomeRoute";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const menuItems = [
    { path: "/", icon: <MdOutlineExplore size={20} />, label: "Discover" },
    { path: "/profile", icon: <BsGrid1X2 size={18} />, label: "Collection" },
    { path: "/Tokens", icon: <StokeToken size={20} />, label: "Tokens" },
    { path: "/calender", icon: <CiCalendar size={20} />, label: "Drop" },
    { path: "/activity", icon: <TfiMenuAlt size={20} />, label: "Activity" },
    { path: "/reward", icon: <Rewards size={20} />, label: "Rewards" },
    { path: "/studio", icon: <Studio size={20} />, label: "Studio" },
    { divider: true },
    { path: "/Help", icon: <HelpIcon size={22} />, label: "Support" },
  ];

  return (
    <>
      {/* Top Navbar (Mobile) */}
      <div className="md:hidden w-full h-[60px] flex items-center justify-between bg-black text-white px-4 font-inter">
        <button
          onClick={() => setOpen(true)}
          aria-label="Open sidebar"
          className="focus:outline-none"
        >
          <FiMenu size={26} />
        </button>

        <div className="flex items-center">
          <FiSearch />
          <NavLink to="/" end>
            <span className="text-[14px] font-[400] text-black rounded-md py-1 px-3 ml-3 bg-white">
              Connect
            </span>
          </NavLink>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 border-r border-[#2D2E31] h-screen bg-black text-white flex flex-col transition-all duration-300 z-50 group ${
          open
            ? "translate-x-0 w-full overflow-auto"
            : "-translate-x-full md:translate-x-0 md:w-[60px] md:hover:w-[220px]"
        }`}
        role="navigation"
      >
        {/* Close button on small screens */}
        <div className="md:hidden flex items-center justify-between px-4 py-4 border-b border-slate-700 font-inter">
          <h2 className="text-lg font-semibold">QSEA</h2>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close sidebar"
            className="focus:outline-none"
          >
            <FiX size={26} />
          </button>
        </div>

        <div className="flex flex-col flex-grow p-2 overflow-y-auto no-scrollbar">
          <div className="hidden md:flex items-center  hover:justify-start  gap-3 pt-3 mb-6 font-inter text-2xl font-[500] text-center">
            <img src={Logo} alt="Logo" className="w-8 h-8" />
            <span className="hidden md:group-hover:block">QSEA</span>
          </div>

          <nav className="flex flex-col gap-1 font-inter text-sm">
            {menuItems.map((item, index) =>
              item.divider ? (
                <div
                  key={`divider-${index}`}
                  className="border-t border-slate-700 my-2"
                ></div>
              ) : (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end
                  className={({ isActive }) =>
                    `flex items-center p-3 rounded-md transition-all duration-300 ${
                      isActive
                        ? "bg-[#2D2E31] text-white border-l-4 border-white md:border-l-0"
                        : "text-slate-300 hover:bg-[#2D2E31]"
                    }`
                  }
                  onClick={() => setOpen(false)}
                >
                  <div className="flex justify-center">{item.icon}</div>
                  <span className="ml-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-inter text-[14px]">
                    {item.label}
                  </span>
                </NavLink>
              )
            )}
          </nav>
        </div>
      </div>
    </>
  );
}
