import React from 'react';
import { useTranslation } from 'react-i18next';
import Logo from "@/assets/images/logo.svg?react";
import BookIcon from "@/assets/images/media/book.svg?react";
import XIcon from "@/assets/images/media/x.svg?react";
import MeatIDIcon from "@/assets/images/media/metaid.svg?react";
import TelegramIcon from "@/assets/images/media/telegram.svg?react";

interface FooterProps {
  background?: string;
}

const Footer: React.FC<FooterProps> = ({ background = "bg-[#79D0FE]" }) => {
  const { t } = useTranslation();

  return (
    <div className={`w-full ${background} md:pt-[55px] pt-4`}>
      <div className="w-full max-w-screen-lg mx-auto px-4 lg:px-0 flex flex-col md:flex-row md:justify-between md:items-center min-h-40 items-center gap-4 md:gap-0">
        <div className="flex flex-col gap-y-4 items-center md:items-start">
          <Logo />
          <p className="text-black text-center md:text-left">{t('footer.slogan')}</p>
        </div>
        <div className="flex items-center gap-x-4">
          <div className="size-10 bg-[#002E33]/20 flex items-center justify-center rounded-full">
            <TelegramIcon />
          </div>
          <div className="size-10 bg-[#002E33]/20 flex items-center justify-center rounded-full">
            <XIcon />
          </div>
          <div className="size-10 bg-[#002E33]/20 flex items-center justify-center rounded-full">
            <MeatIDIcon />
          </div>
          <div className="size-10 bg-[#002E33]/20 flex items-center justify-center rounded-full">
            <BookIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;