import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import Logo from "@/assets/images/logo.svg?react";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full h-20 flex items-center justify-between">
      <Link to="/">
        <Logo />
      </Link>
      <nav className="hidden md:flex space-x-12">
        <Link to="/intro" className="text-[#303133]">
          Intro
        </Link>
        <Link to="/install" className="text-[#303133]">
          Install
        </Link>
        <Link to="#$Metaso" className="text-[#303133]">
          $Metaso
        </Link>
        <Link
          to="/explores"
          className="text-[#303133] flex items-center gap-x-1"
        >
          <span>Explores</span>
          <ChevronDown className="w-2.5" />
        </Link>
      </nav>
      <button className="bg-[#002E33] font-semibold text-white text-xs px-3.5 py-2.5 rounded-full focus:outline-none hidden md:block">
        Go Experience
      </button>
      <button
        className="md:hidden text-[#303133]"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? "Close" : "Menu"}
      </button>
      {isMobileMenuOpen && (
        <nav className="md:hidden absolute top-20 left-0 w-full bg-white flex flex-col items-center space-y-4 py-4">
          <Link to="/intro" className="text-[#303133]">
            Intro
          </Link>
          <Link to="/install" className="text-[#303133]">
            Install
          </Link>
          <Link to="#$Metaso" className="text-[#303133]">
            $Metaso
          </Link>
          <Link to="/explores" className="text-[#303133] flex items-center gap-x-1">
            <span>Explores</span>
            <ChevronDown className="w-2.5" />
          </Link>
          <button className="bg-[#002E33] font-semibold text-white text-xs px-3.5 py-2.5 rounded-full focus:outline-none">
            Go Experience
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
