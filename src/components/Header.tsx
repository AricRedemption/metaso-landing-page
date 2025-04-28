import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useTranslation } from 'react-i18next';
import Logo from "@/assets/images/logo.svg?react";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en');
  };

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
          {t('header.home')}
        </Link>
        <Link to="/intro" className={getLinkClass("/intro")}>
          {t('header.intro')}
        </Link>
        <Link to="/install" className={getLinkClass("/install")}>
          {t('header.install')}
        </Link>
        <Link
          to="/explores"
          className={`${getLinkClass("/explores")} flex items-center gap-x-1`}
        >
          <span>{t('header.explore')}</span>
        </Link>
        <a
          href="https://docs.metaso.network"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#303133]"
        >
          {t('header.docs')}
        </a>
      </nav>
      <div className="hidden md:flex items-center gap-4">
        <button
          onClick={toggleLanguage}
          className="px-4 py-1 rounded-full border border-[#002E33] text-[#002E33] focus:outline-none active:outline-none hover:bg-[#002E33] hover:text-white transition-colors duration-200"
        >
          {i18n.language === 'en' ? '中文' : 'EN'}
        </button>
        <a
          href="https://www.show.now/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#002E33] font-semibold text-white text-xs px-3.5 py-2.5 rounded-full focus:outline-none hover:text-white"
        >
          {t('header.experience')}
        </a>
      </div>
      <button
        className="md:hidden text-[#303133]"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? t('header.close') : t('header.menu')}
      </button>
      {isMobileMenuOpen && (
        <nav className="md:hidden absolute top-20 left-0 w-full bg-white flex flex-col items-center space-y-4 py-4">
          <Link to="/intro" className={getLinkClass("/intro")}>
            {t('header.intro')}
          </Link>
          <Link to="/install" className={getLinkClass("/install")}>
            {t('header.install')}
          </Link>
          <Link to="/" className={getLinkClass("/")}>
            $Metaso
          </Link>
          <Link
            to="/explores"
            className={`${getLinkClass("/explores")} flex items-center gap-x-1`}
          >
            <span>{t('header.explore')}</span>
            <ChevronDown className="w-2.5" />
          </Link>
          <a
            href="https://docs.metaso.network"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#303133]"
          >
            {t('header.docs')}
          </a>
          <button
            onClick={toggleLanguage}
            className="px-2 py-1 rounded border border-[#002E33] text-[#002E33] focus:outline-none active:outline-none hover:bg-[#002E33] hover:text-white transition-colors duration-200"
          >
            {i18n.language === 'en' ? '中文' : 'EN'}
          </button>
          <a
            href="https://www.show.now/"
            target="_blank"
            rel="noopener noreferrer" 
            className="bg-[#002E33] font-semibold text-white text-xs px-3.5 py-2.5 rounded-full focus:outline-none"
          >
            {t('header.experience')}
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
