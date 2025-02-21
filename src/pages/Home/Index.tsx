import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowDown } from "lucide-react";
import Earth from "@/assets/images/earth.png";
import Money from "@/assets/images/money.png";
import Person from "@/assets/images/person.png";
import Intro from "@/assets/images/icons/intro.png";
import Image1 from "@/assets/images/icons/image1.png";
import Image2 from "@/assets/images/icons/image2.png";
import Image3 from "@/assets/images/icons/image3.png";
import Icon1 from "@/assets/images/icons/icon1.svg?react";
import Icon2 from "@/assets/images/icons/icon2.svg?react";
import Icon3 from "@/assets/images/icons/icon3.svg?react";
import { useQueryCoinSummary } from "@/queries";
import AnimatedNumber from "@/components/AnimatedNumber";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { t } = useTranslation();
  const { data } = useQueryCoinSummary();
  return (
    <>
      <div
        className="w-full"
        style={{
          background:
            "linear-gradient(180deg, rgba(223, 250, 255, 1) 0%, rgba(89, 180, 255, 1) 75%)",
        }}
      >
        <div className="w-full max-w-screen-lg mx-auto px-4 lg:px-0 flex flex-col min-h-[800px] items-center">
          <Header />
          <h1 className="font-bold text-center text-[#001F23] xl:mt-[70px] text-xl sm:text-3xl md:text-5xl xl:text-6xl whitespace-pre-line">
            {t("home.hero.title")}
          </h1>
          <div className="flex items-center gap-x-[28.5px] mt-[30px] text-xs font-semibold">
            <Link
              to="/install"
              className="bg-[#002E33] text-white rounded-full px-[34px] py-2.5 flex items-center gap-x-1 h-9 focus:outline-none"
            >
              <span>{t("home.hero.install")}</span>
              <ArrowDown className="w-3.5" />
            </Link>
            <a
              className="bg-white text-[#002E33] rounded-full px-[34px] py-2.5 h-9 focus:outline-none"
              href="https://www.show.now/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("home.hero.experience")}
            </a>
          </div>
          <div className="mt-4 sm:mt-8 lg:mt-16 grid grid-cols-3 gap-5 w-full py-8">
            <div className="flex justify-between bg-white/[0.88] px-8 pt-[30px] w-full h-[181px] rounded-[20px] col-span-3 md:col-span-1">
              <div className="space-y-1">
                <AnimatedNumber value={data?.totalUser || 0} />
                <h6 className="font-medium text-[#002E33]/[0.77]">
                  {t("home.stats.users")}
                </h6>
              </div>
              <img src={Person} alt="Person" className="size-20" />
            </div>
            <div className="flex justify-between bg-white/[0.88] px-8 pt-[30px] w-full h-[181px] rounded-[20px] col-span-3 md:col-span-1">
              <div className="space-y-1">
                <AnimatedNumber value={data?.totalNode || 0} />

                <h6 className="font-medium text-[#002E33]/[0.77]">
                  {t("home.stats.nodes")}
                </h6>
              </div>
              <img src={Earth} alt="Person" className="size-[80px]" />
            </div>
            <div className="flex justify-between bg-white/[0.88] px-8 pt-[30px] w-full h-[181px] rounded-[20px] col-span-3 md:col-span-1">
              <div className="space-y-1">
                <AnimatedNumber value={data?.totalTx || 0} />
                <h6 className="font-medium text-[#002E33]/[0.77]">
                  {t("home.stats.transactions")}
                </h6>
              </div>
              <img src={Money} alt="Person" className="size-[80px]" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full"
        style={{
          background:
            "linear-gradient(180deg, #8FC9FF 0%, rgba(255, 255, 255, 1) 100%)",
        }}
      >
        <div className="w-full max-w-screen-lg mx-auto px-4 lg:px-0 flex flex-col min-h-[1100px] items-center">
          <h1 className="mt-20 font-bold text-xl sm:text-3xl md:text-5xl xl:text-6x text-[#002E33]">
            {t("home.intro.title")}
          </h1>
          <p className="text-lg text-[#001F23]/80 mt-6 font-normal text-center">
            {t("home.intro.description")}
          </p>
          <div className="flex flex-col md:flex-row md:justify-between mt-10 lg:mt-[70px]">
            <div className="flex flex-col items-center gap-[60px]">
              <div className="flex flex-col">
                <Icon1 />
                <h3 className="text-xl font-semibold mt-[27px] text-[#002E33]">
                  {t("home.intro.features.decentralized.title")}
                </h3>
                <p className="text-sm font-medium mt-3 text-[#002E33]/60">
                  {t("home.intro.features.decentralized.description")}
                </p>
              </div>
              <div className="flex flex-col">
                <Icon2 />
                <h3 className="text-xl font-semibold mt-[27px] text-[#002E33]">
                  {t("home.intro.features.crosschain.title")}
                </h3>
                <p className="text-sm font-medium mt-3 text-[#002E33]/60">
                  {t("home.intro.features.crosschain.description")}
                </p>
              </div>
              <div className="flex flex-col">
                <Icon3 />
                <h3 className="text-xl font-semibold mt-[27px] text-[#002E33]">
                  {t("home.intro.features.customization.title")}
                </h3>
                <p className="text-sm font-medium mt-3 text-[#002E33]/60">
                  {t("home.intro.features.customization.description")}
                </p>
              </div>
            </div>
            <img src={Intro} alt="Intro" className="w-1/2 mx-auto" />
          </div>
        </div>
      </div>
      <div className="w-full bg-[#83BBFF]">
        <div className="w-full max-w-screen-lg mx-auto px-4 lg:px-0 flex flex-col min-h-[687px] items-center">
          <h1 className="font-bold text-center text-[#001F23] mt-8 xl:mt-[107px] text-xl sm:text-2xl md:text-3xl xl:text-4xl max-w-screen-md text-balance">
            {t("home.steps.title")}
          </h1>
          <div className="lg:mt-[84px] grid grid-cols-3 xl:gap-12 gap-8 w-full py-8">
            <div className="flex flex-col bg-white/[0.8] px-8 pt-[30px] w-full h-[300px] rounded-2xl col-span-3 md:col-span-1">
              <div className="bg-white rounded-full size-12 p-2">
                <div
                  className="rounded-full size-8 flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(132deg, #9FD1FF 44%, #69B7FF 78%)",
                  }}
                >
                  1
                </div>
              </div>
              <h1 className="text-lg sm:text-xl xl:text-2xl font-bold text-[#002E33] mt-3.5">
                {t("home.steps.step1")}
              </h1>
              <img src={Image1} alt="" className="ml-auto size-[125px]" />
            </div>
            <div className="flex flex-col bg-white/[0.8] px-8 pt-[30px] w-full h-[300px] rounded-2xl col-span-3 md:col-span-1">
              <div className="bg-white rounded-full size-12 p-2">
                <div
                  className="rounded-full size-8 flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(132deg, #9FD1FF 44%, #69B7FF 78%)",
                  }}
                >
                  2
                </div>
              </div>
              <h1 className="text-lg sm:text-xl xl:text-2xl font-bold text-[#002E33] mt-3.5">
                {t("home.steps.step2")}
              </h1>
              <img src={Image2} alt="" className="ml-auto size-[125px]" />
            </div>
            <div className="flex flex-col bg-white/[0.8] px-8 pt-[30px] w-full h-[300px] rounded-2xl col-span-3 md:col-span-1">
              <div className="bg-white rounded-full size-12 p-2">
                <div
                  className="rounded-full size-8 flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(132deg, #9FD1FF 44%, #69B7FF 78%)",
                  }}
                >
                  3
                </div>
              </div>
              <h1 className="text-lg sm:text-xl xl:text-2xl font-bold text-[#002E33] mt-3.5">
                {t("home.steps.step3")}
              </h1>
              <img src={Image3} alt="" className="ml-auto size-[125px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#8CDDFF]">
        <div className="w-full max-w-screen-lg mx-auto px-4 lg:px-0 flex flex-col min-h-[472px] items-center">
          <h1 className="font-bold text-center text-[#001F23] mt-8 xl:mt-[50px] text-xl sm:text-2xl md:text-3xl xl:text-4xl max-w-screen-md text-balance">
            {t("home.faq.title")}
          </h1>
          <div className="lg:mt-[59px] grid grid-cols-3 xl:gap-12 gap-8 w-full py-8">
            <div className="flex flex-col gap-y-4 bg-[#A7F0FF;] px-6 pt-[37px] w-full h-60 rounded-2xl col-span-3 md:col-span-1">
              <h4 className="text-sm sm:text-base xl:text-lg font-semibold text-[#002E33]">
                {t("home.faq.q1.question")}
              </h4>
              <p className="text-sm font-medium text-[#002E33]/60">
                {t("home.faq.q1.answer")}
              </p>
            </div>
            <div className="flex flex-col gap-y-4 bg-[#A7F0FF;] px-6 pt-[37px] w-full h-60 rounded-2xl col-span-3 md:col-span-1">
              <h4 className="text-sm sm:text-base xl:text-lg font-semibold text-[#002E33]">
                {t("home.faq.q2.question")}
              </h4>
              <p className="text-sm font-medium text-[#002E33]/60">
                {t("home.faq.q2.answer")}
              </p>
            </div>
            <div className="flex flex-col gap-y-4 bg-[#A7F0FF;] px-6 pt-[37px] w-full h-60 rounded-2xl col-span-3 md:col-span-1">
              <h4 className="text-sm sm:text-base xl:text-lg font-semibold text-[#002E33]">
                {t("home.faq.q3.question")}
              </h4>
              <p className="text-sm font-medium text-[#002E33]/60">
                {t("home.faq.q3.answer")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
