import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image1 from "@/assets/explore/image1.png";
import Image2 from "@/assets/explore/image2.png";
import Image3 from "@/assets/explore/image3.png";
import Image4 from "@/assets/explore/image4.png";
import Image5 from "@/assets/explore/image5.png";
import Image6 from "@/assets/explore/image6.png";
import MetaBlockData from "@/assets/explore/MetaBlockData.png";

const Home: React.FC = () => {
  return (
    <>
      <div
        className="w-full"
        style={{
          background: "linear-gradient(235deg, #D8FBFF 10%, #A4F0F7 80%)",
        }}
      >
        <div className="w-full max-w-screen-lg mx-auto px-4 lg:px-0 flex flex-col min-h-[800px] items-center">
          <Header />
          <h1 className="font-bold text-center text-[#001F23] xl:mt-[70px] text-xl sm:text-3xl md:text-4xl xl:text-6xl">
            MetaID Overview
          </h1>
          <div className="mt-4 sm:mt-8 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full py-8">
            <div className="flex justify-between bg-white/[0.88] px-8 py-[30px] w-full rounded-[20px] col-span-1">
              <div className="space-y-1">
                <h1 className="text-xl sm:text-2xl xl:text-2xl font-bold text-[#002E33]">
                  102234
                </h1>
                <h6 className="font-medium text-[#002E33]/[0.77]">
                  Total number of
                </h6>
              </div>
              <img
                src={Image1}
                alt="Person"
                className="size-[80px] md:size-[100px]"
              />
            </div>
            <div className="flex justify-between bg-white/[0.88] px-8 py-[30px] w-full rounded-[20px] col-span-1">
              <div className="space-y-1">
                <h1 className="text-xl sm:text-2xl xl:text-2xl font-bold text-[#002E33]">
                  12988
                </h1>
                <h6 className="font-medium text-[#002E33]/[0.77]">
                  MetaSo instances
                </h6>
              </div>
              <img
                src={Image2}
                alt="Person"
                className="size-[63px] md:size-[90px]"
              />
            </div>
            <div className="flex justify-between bg-white/[0.88] px-8 py-[30px] w-full rounded-[20px] col-span-1">
              <div className="space-y-1">
                <h1 className="text-xl sm:text-2xl xl:text-2xl font-bold text-[#002E33]">
                  1234456
                </h1>
                <h6 className="font-medium text-[#002E33]/[0.77]">
                  Transactions
                </h6>
              </div>
              <img
                src={Image3}
                alt="Person"
                className="size-[80px] md:size-[90px]"
              />
            </div>
            <div className="flex justify-between bg-white/[0.88] px-8 py-[30px] w-full rounded-[20px] col-span-1">
              <div className="space-y-1">
                <h1 className="text-xl sm:text-2xl xl:text-2xl font-bold text-[#002E33]">
                  102234
                </h1>
                <h6 className="font-medium text-[#002E33]/[0.77]">
                  Number of ID coins
                </h6>
              </div>
              <img
                src={Image4}
                alt="Person"
                className="size-[80px] md:size-[100px]"
              />
            </div>
            <div className="flex justify-between bg-white/[0.88] px-8 py-[30px] w-full rounded-[20px] col-span-1">
              <div className="space-y-1">
                <h1 className="text-xl sm:text-2xl xl:text-2xl font-bold text-[#002E33]">
                  0.03
                </h1>
                <h6 className="font-medium text-[#002E33]/[0.77]">
                  $MetaSo price
                </h6>
              </div>
              <img
                src={Image5}
                alt="Person"
                className="size-[80px] md:size-[100px]"
              />
            </div>
            <div className="flex justify-between bg-white/[0.88] px-8 py-[30px] w-full rounded-[20px] col-span-1">
              <div className="space-y-1">
                <h1 className="text-xl sm:text-2xl xl:text-2xl font-bold text-[#002E33]">
                  203334
                </h1>
                <h6 className="font-medium text-[#002E33]/[0.77]">
                  $MetaSo Market Cap
                </h6>
              </div>
              <img
                src={Image6}
                alt="Person"
                className="size-[70px] md:size-[90px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#78DAE4]">
        <div className="w-full max-w-screen-lg mx-auto px-4 lg:px-0 py-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#001F23] mb-16">
            Latest MetaBlock Data
          </h2>
          <div className="w-full max-w-[1200px] mx-auto">
            <img
              src={MetaBlockData}
              alt="Latest MetaBlock Data"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
      <Footer background={"bg-[#7DCED6]"} />
    </>
  );
};

export default Home;
