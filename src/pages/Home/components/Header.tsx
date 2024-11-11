import React from "react";
import { ChevronDown } from "lucide-react";
import Logo from "@/assets/images/logo.svg?react";

const Header: React.FC = () => {
  return (
    <header className="w-full h-20 flex items-center justify-between">
      <Logo />
      <nav className="hidden md:flex space-x-12">
        <a href="#Intro" className="text-[#303133]">
          Intro
        </a>
        <a href="#Install" className="text-[#303133]">
          Install
        </a>
        <a href="#$Metaso" className="text-[#303133]">
          $Metaso
        </a>
        <a
          href="#Explores"
          className="text-[#303133] flex items-center gap-x-1"
        >
          <span>Explores</span>
          <ChevronDown className="w-2.5" />
        </a>
      </nav>
      <button className="bg-[#002E33] font-semibold text-white text-xs px-3.5 py-2.5 rounded-full focus:outline-none">
        Go Experience
      </button>
    </header>
  );
};

export default Header;
