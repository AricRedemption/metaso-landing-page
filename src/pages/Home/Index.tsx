import React from "react";
import Header from "./components/Header";
import { ArrowDown } from "lucide-react";
import Earth from "@/assets/images/earth.png";
import Money from "@/assets/images/money.png";
import Person from "@/assets/images/person.png";
import Logo from "@/assets/images/logo.svg?react";
// import Intro from "@/assets/images/icons/intro.png";
// import Image1 from "@/assets/images/icons/image1.png";
// import Image2 from "@/assets/images/icons/image2.png";
// import Image3 from "@/assets/images/icons/image3.png";
import Icon1 from "@/assets/images/icons/icon1.svg?react";
import Icon2 from "@/assets/images/icons/icon2.svg?react";
import Icon3 from "@/assets/images/icons/icon3.svg?react";
import BookIcon from "@/assets/images/media/book.svg?react";
import XIcon from "@/assets/images/media/x.svg?react";
import MeatIDIcon from "@/assets/images/media/metaid.svg?react";
import TelegramIcon from "@/assets/images/media/telegram.svg?react";

const Home: React.FC = () => {
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
          <h1 className="font-bold text-center text-[#001F23] xl:mt-[70px] text-xl sm:text-3xl md:text-5xl xl:text-6xl">
            Building a Scalable <br />
            Decentralized Social Media <br />
            Network on Bitcoin
          </h1>
          <div className="flex items-center gap-x-[28.5px] mt-[30px] text-xs font-semibold">
            <button className="bg-[#002E33] text-white rounded-full px-[34px] py-2.5 flex items-center gap-x-1 h-9 focus:outline-none">
              <span>Install</span>
              <ArrowDown className="w-3.5" />
            </button>
            <button className="bg-white text-[#002E33] rounded-full px-[34px] py-2.5 h-9 focus:outline-none">
              Go Experience
            </button>
          </div>
          <div className="mt-4 sm:mt-8 lg:mt-16 grid grid-cols-3 gap-5 w-full py-8">
            <div className="flex justify-between bg-white/[0.88] px-8 pt-[30px] w-full h-[181px] rounded-[20px] col-span-3 md:col-span-1">
              <div className="space-y-1">
                <h1 className="text-2xl sm:text-3xl xl:text-5xl font-bold text-[#002E33]">
                  102234
                </h1>
                <h6 className="font-medium text-[#002E33]/[0.77]">Users</h6>
              </div>
              <img src={Person} alt="Person" className="size-20" />
            </div>
            <div className="flex justify-between bg-white/[0.88] px-8 pt-[30px] w-full h-[181px] rounded-[20px] col-span-3 md:col-span-1">
              <div className="space-y-1">
                <h1 className="text-2xl sm:text-3xl xl:text-5xl font-bold text-[#002E33]">
                  12
                </h1>
                <h6 className="font-medium text-[#002E33]/[0.77]">Nodes</h6>
              </div>
              <img src={Earth} alt="Person" className="size-[119px]" />
            </div>
            <div className="flex justify-between bg-white/[0.88] px-8 pt-[30px] w-full h-[181px] rounded-[20px] col-span-3 md:col-span-1">
              <div className="space-y-1">
                <h1 className="text-2xl sm:text-3xl xl:text-5xl font-bold text-[#002E33]">
                  1234456
                </h1>
                <h6 className="font-medium text-[#002E33]/[0.77]">
                  Transactions
                </h6>
              </div>
              <img src={Money} alt="Person" className="size-[93px]" />
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
            What is MetaSo？
          </h1>
          <p className="text-lg text-[#001F23]/80 mt-6 font-normal text-center">
            MetaSo is open-source, social networking, Web3 middleware based on
            MetaID protocol. Developers can deploy new Web3 social applications
            in 20 minutes by simply editing the configuration files.MetaSo was
            launched and operated by DAO and incentivized with tokenomics.Data
            in Different MetaSo applications are interconnected and
            interoperable. MetaSo will bust data silos and build an ultimate
            decentralized Web3 social platform.
          </p>
          <div className="flex flex-col md:flex-row md:justify-between mt-10 lg:mt-[70px]">
            <div className="flex flex-col items-center gap-[60px]">
              <div className="flex flex-col">
                <Icon1 />
                <h3 className="text-xl font-semibold mt-[27px] text-[#002E33]">
                  Total Decentralizd
                </h3>
                <p className="text-sm font-medium mt-3 text-[#002E33]/60">
                  Experience true freedom with our totally decentralized
                  platform. Metaso empowers users to take control of their data
                  and transactions, ensuring maximum security and privacy. Join
                  the future of the decentralized world today.
                </p>
              </div>
              <div className="flex flex-col">
                <Icon2 />
                <h3 className="text-xl font-semibold mt-[27px] text-[#002E33]">
                  Cross-Chain
                </h3>
                <p className="text-sm font-medium mt-3 text-[#002E33]/60">
                  Our innovative platform enables effortless integration and
                  interoperability between multiple blockchains, unlocking
                  endless possibilities and opportunities for users.
                </p>
              </div>
              <div className="flex flex-col">
                <Icon3 />
                <h3 className="text-xl font-semibold mt-[27px] text-[#002E33]">
                  Realtime Interoperable
                </h3>
                <p className="text-sm font-medium mt-3 text-[#002E33]/60">
                  Experience real-time interoperability with Metaso. Our
                  cutting-edge platform allows for instantaneous interactions
                  and transactions across different networks, providing
                  unparalleled convenience and efficiency. With Metaso, you can
                  harness the power of real-time interoperability for a smooth,
                  interconnected blockchain experience.
                </p>
              </div>
            </div>
            {/* <img src={Intro} alt="Intro" className="w-1/2 mx-auto" /> */}
          </div>
        </div>
      </div>
      <div className="w-full bg-[#83BBFF]">
        <div className="w-full max-w-screen-lg mx-auto px-4 lg:px-0 flex flex-col min-h-[687px] items-center">
          <h1 className="font-bold text-center text-[#001F23] mt-8 xl:mt-[107px] text-xl sm:text-2xl md:text-3xl xl:text-4xl max-w-screen-md text-balance">
            Be a Part of the Decentralized Social Network for the World
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
                Download & Install MetaSo Node
              </h1>
              {/* <img src={Image1} alt="" className="ml-auto size-[125px]" /> */}
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
                Config for Your Own Social Media App
              </h1>
              {/* <img src={Image2} alt="" className="ml-auto size-[125px]" /> */}
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
                Promote It And Get $METASO
              </h1>
              {/* <img src={Image3} alt="" className="ml-auto size-[125px]" /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#8CDDFF]">
        <div className="w-full max-w-screen-lg mx-auto px-4 lg:px-0 flex flex-col min-h-[472px] items-center">
          <h1 className="font-bold text-center text-[#001F23] mt-8 xl:mt-[50px] text-xl sm:text-2xl md:text-3xl xl:text-4xl max-w-screen-md text-balance">
            FAQ About MetaSo
          </h1>
          <div className="lg:mt-[59px] grid grid-cols-3 xl:gap-12 gap-8 w-full py-8">
            <div className="flex flex-col gap-y-4 bg-[#A7F0FF;] px-6 pt-[37px] w-full h-60 rounded-2xl col-span-3 md:col-span-1">
              <h4 className="text-sm sm:text-base xl:text-lg font-semibold text-[#002E33]">
                What types of APP can MetaSo nodes be used for?
              </h4>
              <p className="text-sm font-medium text-[#002E33]/60">
                In addition to web3 social applications, MetaSo can also create
                many types of applications such as notes, netbooks, games and
                music.
              </p>
            </div>
            <div className="flex flex-col gap-y-4 bg-[#A7F0FF;] px-6 pt-[37px] w-full h-60 rounded-2xl col-span-3 md:col-span-1">
              <h4 className="text-sm sm:text-base xl:text-lg font-semibold text-[#002E33]">
                What types of APP can MetaSo nodes be used for?
              </h4>
              <p className="text-sm font-medium text-[#002E33]/60">
                In addition to web3 social applications, MetaSo can also create
                many types of applications such as notes, netbooks, games and
                music.
              </p>
            </div>
            <div className="flex flex-col gap-y-4 bg-[#A7F0FF;] px-6 pt-[37px] w-full h-60 rounded-2xl col-span-3 md:col-span-1">
              <h4 className="text-sm sm:text-base xl:text-lg font-semibold text-[#002E33]">
                What types of APP can MetaSo nodes be used for?
              </h4>
              <p className="text-sm font-medium text-[#002E33]/60">
                In addition to web3 social applications, MetaSo can also create
                many types of applications such as notes, netbooks, games and
                music.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#79D0FE] md:pt-[55px]">
        <div className="w-full max-w-screen-lg mx-auto px-4 lg:px-0 flex flex-col md:flex-row md:justify-between md:items-center min-h-40 items-center gap-4 md:gap-0">
          <div className="flex flex-col gap-y-4">
            <Logo />
            <p className="text-black">Building centralization social network</p>
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
    </>
  );
};

export default Home;
