import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import Logo from "@/assets/images/logo.svg?react";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const getLinkClass = (path: string) => {
    return location.pathname === path
      ? "text-[#303133] underline underline-offset-[12px] decoration-[#002E33] decoration-2"
      : "text-[#303133]";
  };

  return (
    <header className="w-full h-20 flex items-center justify-between mb-3">
      <Logo />
      <nav className="hidden md:flex space-x-12">
        <Link to="/" className={getLinkClass("/")}>
          Home
        </Link>
        <Link to="/intro" className={getLinkClass("/intro")}>
          Intro
        </Link>
        <Link to="/install" className={getLinkClass("/install")}>
          Install
        </Link>
        <Link
          to="/explores"
          className={`${getLinkClass("/explores")} flex items-center gap-x-1`}
        >
          <span>Explore</span>
          <ChevronDown className="w-2.5" />
        </Link>
      </nav>
      <a
        href="https://www.show.now/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#002E33] font-semibold text-white text-xs px-3.5 py-2.5 rounded-full focus:outline-none hidden md:block hover:text-white"
      >
        Go Experience
      </a>
      <button
        className="md:hidden text-[#303133]"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? "Close" : "Menu"}
      </button>
      {isMobileMenuOpen && (
        <nav className="md:hidden absolute top-20 left-0 w-full bg-white flex flex-col items-center space-y-4 py-4">
          <Link to="/intro" className={getLinkClass("/intro")}>
            Intro
          </Link>
          <Link to="/install" className={getLinkClass("/install")}>
            Install
          </Link>
          <Link to="/" className={getLinkClass("/")}>
            $Metaso
          </Link>
          <Link
            to="/explores"
            className={`${getLinkClass("/explores")} flex items-center gap-x-1`}
          >
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
