import React from "react";
import { NavLink } from "react-router-dom";
import { IoMdCode } from "react-icons/io";
import { MdAccountCircle, MdWallet, MdOutlineVerified } from "react-icons/md";
import { CiMail } from "react-icons/ci";

const navItems = [
  { name: "Profile", href: "/help", icon: <MdAccountCircle size={21} /> },
  {
    name: "Linked Wallets",
    href: "/help/wallet",
    icon: <MdWallet size={21} />,
  },
  {
    name: "Email Notifications",
    href: "/help/mail",
    icon: <CiMail size={21} />,
  },
  { name: "Developer", href: "/help/developer", icon: <IoMdCode size={21} /> },
  {
    name: "Verification",
    href: "/help/verification",
    icon: <MdOutlineVerified size={21} />,
  },
];

export default function HelpSidebar() {
  return (
    <aside className="bg-[#222325] lg:min-h-screen pt-6 lg:py-6">
      <h1 className="font-medium text-[#ACADAE] text-[16px] mb-4 sidebar-title hidden custom:block">
        Settings
      </h1>

      <nav className="flex flex-wrap sm:flex-nowrap lg:flex-col justify-between gap-3">
        {navItems.map((item) => (
          <div
            key={item.name}
            className="relative group flex items-center justify-center lg:justify-start"
          >
            <NavLink
              to={item.href}
              end={item.href === "/help"} // This line fixes the double-active issue
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 lg:w-[252px] py-2 rounded-md transition-colors duration-200 ${
                  isActive
                    ? "bg-[#1B1D1F] text-white"
                    : "text-[#ACADAE] hover:text-gray-200 hover:bg-[#1B1D1F]"
                }`
              }
            >
              <span className="text-lg">{item.icon}</span>
              <span className="hidden lg:block">{item.name}</span>
            </NavLink>

            
            <span className="absolute left-full top-11 border border-[#35373a7e] bg-[#1B1D1F] text-white sm:text-xs text-[9px] py-1 px-2 ml-[-65px] rounded opacity-0 group-hover:opacity-100 transition-opacity lg:hidden whitespace-nowrap z-50">
              {item.name}
            </span>
          </div>
        ))}
      </nav>
    </aside>
  );
}
