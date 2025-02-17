import React from "react";
import { useTranslation } from 'react-i18next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Globe from "@/assets/intro/Globe.png";
import Wallet from "@/assets/intro/Wallet.png";
import Bitcoin from "@/assets/intro/Bitcoin.png";
import Network from "@/assets/intro/Network.png";
import { Smile, Share2, Shield, Ban } from "lucide-react";
import GlobeNetwork from "@/assets/intro/globe-network.png";
import CompetitorsTable from "@/assets/intro/competitors-table.png";

const IntroPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* What is MetaSo? Section */}
      <div
        className="w-full"
        style={{
          background: "linear-gradient(180deg, #8BEFF9 3%, #49E7F6 100%)",
        }}
      >
        <div className="w-full max-w-screen-lg mx-auto px-4 lg:px-0 flex flex-col min-h-[800px] items-center">
          <Header />
          <h1 className="font-bold text-center text-[#001F23] xl:mt-[70px] text-xl sm:text-3xl md:text-5xl xl:text-6xl">
            {t('intro.hero.title')}
          </h1>
          <p className="text-lg text-[#001F23]/80 mt-6 font-normal text-center max-w-[800px]">
            {t('intro.hero.description')}
          </p>
          <div className="mt-16 w-full max-w-[1200px] mx-auto">
            <img
              src="/metaso-network-diagram.png"
              alt="MetaSo Network Diagram"
              className="w-full h-auto max-w-[600px] mx-auto mt-[60px] mb-[80px]"
            />
          </div>
        </div>
      </div>

      {/* Why do you need Metaso? Section */}
      <div
        className="w-full"
        style={{
          background: "linear-gradient(180deg, #99F5FF 2%, #4ADCEB 100%)",
        }}
      >
        <div className="w-full max-w-screen-lg mx-auto px-4 lg:px-0 py-24">
          <h2 className="text-4xl font-bold text-center text-[#001F23] mb-8">
            {t('intro.why.title')}
          </h2>
          <p className="text-lg text-center text-[#001F23]/80 mb-16">
            {t('intro.why.subtitle')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#A7F0FF] rounded-2xl p-8">
              <Smile className="w-8 h-8 mb-4 text-[#131A29]" />
              <h3 className="text-xl font-semibold text-[#002E33] mb-4">
                {t('intro.why.features.account.title')}
              </h3>
              <p className="text-sm text-[#002E33]/70">
                {t('intro.why.features.account.description')}
              </p>
            </div>
            <div className="bg-[#A7F0FF] rounded-2xl p-8">
              <Share2 className="w-8 h-8 mb-4 text-[#131A29]" />
              <h3 className="text-xl font-semibold text-[#002E33] mb-4">
                {t('intro.why.features.interconnection.title')}
              </h3>
              <p className="text-sm text-[#002E33]/70">
                {t('intro.why.features.interconnection.description')}
              </p>
            </div>
            <div className="bg-[#A7F0FF] rounded-2xl p-8">
              <Shield className="w-8 h-8 mb-4 text-[#131A29]" />
              <h3 className="text-xl font-semibold text-[#002E33] mb-4">
                {t('intro.why.features.security.title')}
              </h3>
              <p className="text-sm text-[#002E33]/70">
                {t('intro.why.features.security.description')}
              </p>
            </div>
            <div className="bg-[#A7F0FF] rounded-2xl p-8">
              <Ban className="w-8 h-8 mb-4 text-[#131A29]" />
              <h3 className="text-xl font-semibold text-[#002E33] mb-4">
                {t('intro.why.features.freedom.title')}
              </h3>
              <p className="text-sm text-[#002E33]/70">
                {t('intro.why.features.freedom.description')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div
        className="w-full"
        style={{
          background: "linear-gradient(180deg, #83E7F1 0%, #7BDDE7 100%)",
        }}
      >
        <div className="w-full max-w-screen-lg mx-auto px-4 lg:px-0 py-24">
          <h2 className="text-4xl font-bold text-center text-[#001F23] mb-16">
            {t('intro.features.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#A7F0FF] rounded-2xl p-8 flex items-center min-h-[200px]">
              <div className="max-w-[70%]">
                <h3 className="text-xl font-semibold text-[#002E33] mb-4">
                  {t('intro.features.bitcoin.title')}
                </h3>
                <p className="text-sm text-[#002E33]/70">
                  {t('intro.features.bitcoin.description')}
                </p>
              </div>
              <div className="flex-shrink-0 ml-auto">
                <img src={Bitcoin} alt="Bitcoin" className="size-[120px]" />
              </div>
            </div>

            <div className="bg-[#A7F0FF] rounded-2xl p-8 flex items-center min-h-[200px]">
              <div className="max-w-[70%]">
                <h3 className="text-xl font-semibold text-[#002E33] mb-4">
                  {t('intro.features.metaid.title')}
                </h3>
                <p className="text-sm text-[#002E33]/70">
                  {t('intro.features.metaid.description')}
                </p>
              </div>
              <div className="flex-shrink-0 ml-auto">
                <img src={Wallet} alt="Wallet" className="size-[120px]" />
              </div>
            </div>

            <div className="bg-[#A7F0FF] rounded-2xl p-8 flex items-center min-h-[200px]">
              <div className="max-w-[70%]">
                <h3 className="text-xl font-semibold text-[#002E33] mb-4">
                  {t('intro.features.integrated.title')}
                </h3>
                <p className="text-sm text-[#002E33]/70">
                  {t('intro.features.integrated.description')}
                </p>
              </div>
              <div className="flex-shrink-0 ml-auto">
                <img src={Globe} alt="Globe" className="size-[120px]" />
              </div>
            </div>

            <div className="bg-[#A7F0FF] rounded-2xl p-8 flex items-center min-h-[200px]">
              <div className="max-w-[70%]">
                <h3 className="text-xl font-semibold text-[#002E33] mb-4">
                  {t('intro.features.incentives.title')}
                </h3>
                <p className="text-sm text-[#002E33]/70">
                  {t('intro.features.incentives.description')}
                </p>
              </div>
              <div className="flex-shrink-0 ml-auto">
                <img src={Network} alt="Network" className="size-[120px]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decentralized Data Storage Section */}
      <div
        className="w-full"
        style={{
          background: "linear-gradient(180deg, #1A737C 0%, #0D5D66 100%)",
        }}
      >
        <div className="w-full max-w-screen-lg mx-auto px-4 lg:px-0 pt-24">
          <h2 className="text-4xl font-bold text-center text-white mb-8">
            {t('intro.storage.title')}
          </h2>
          <p className="text-lg text-center text-white/80 mb-16 max-w-[800px] mx-auto">
            {t('intro.storage.description')}
          </p>
          <div className="w-full max-w-[1200px] mx-auto">
            <img
              src={GlobeNetwork}
              alt="Globe Network Visualization"
              className="w-full h-auto -mt-40"
            />
          </div>
        </div>
      </div>

      {/* Competitors Section */}
      <div className="w-full bg-[#8CDDFF]">
        <div className="w-full max-w-screen-lg mx-auto px-4 lg:px-0 py-24">
          <h2 className="text-4xl font-bold text-center text-[#001F23] mb-16">
            {t('intro.competitors.title')}
          </h2>
          <div className="w-full max-w-[1200px] mx-auto">
            <img
              src={CompetitorsTable}
              alt="Competitors Comparison Table"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default IntroPage;
