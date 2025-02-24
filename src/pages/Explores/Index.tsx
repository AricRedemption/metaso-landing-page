import React from "react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image1 from "@/assets/explore/image1.png";
import Image2 from "@/assets/explore/image2.png";
import Image3 from "@/assets/explore/image3.png";
import Image4 from "@/assets/explore/image4.png";
import Image5 from "@/assets/explore/image5.png";
import Image6 from "@/assets/explore/image6.png";
import { useQueryCoinSummary, useQueryTxList } from "@/queries";
import AnimatedNumber from "@/components/AnimatedNumber";
import dayjs from "dayjs";

const Home: React.FC = () => {
  const { t } = useTranslation();
  const { data: summaryData } = useQueryCoinSummary();
  const { data: txListData } = useQueryTxList();
  const metaidManUrl = import.meta.env.VITE_METAID_MAN_URL;

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
            {t("explores.hero.title")}
          </h1>
          <div className="mt-4 sm:mt-8 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full py-8">
            <div className="flex justify-between bg-white/[0.88] px-8 py-[30px] w-full rounded-[20px] col-span-1">
              <div className="space-y-1">
                <AnimatedNumber value={summaryData?.totalUser} />
                <h6 className="font-medium text-[#002E33]/[0.77]">
                  {t("explores.stats.total_users.title")}
                </h6>
              </div>
              <img
                src={Image1}
                alt="Total Users"
                className="size-[80px] md:size-[100px]"
              />
            </div>
            <div className="flex justify-between bg-white/[0.88] px-8 py-[30px] w-full rounded-[20px] col-span-1">
              <div className="space-y-1">
                <AnimatedNumber value={summaryData?.totalMetaSo} />
                <h6 className="font-medium text-[#002E33]/[0.77]">
                  {t("explores.stats.total_instances.title")}
                </h6>
              </div>
              <img
                src={Image2}
                alt="MetaSo Instances"
                className="size-[63px] md:size-[90px]"
              />
            </div>
            <div className="flex justify-between bg-white/[0.88] px-8 py-[30px] w-full rounded-[20px] col-span-1">
              <div className="space-y-1">
                <AnimatedNumber value={summaryData?.totalTx} />
                <h6 className="font-medium text-[#002E33]/[0.77]">
                  {t("explores.stats.total_transactions.title")}
                </h6>
              </div>
              <img
                src={Image3}
                alt="Transactions"
                className="size-[80px] md:size-[90px]"
              />
            </div>
            <div className="flex justify-between bg-white/[0.88] px-8 py-[30px] w-full rounded-[20px] col-span-1">
              <div className="space-y-1">
                <AnimatedNumber value={summaryData?.totalIdCoins} />
                <h6 className="font-medium text-[#002E33]/[0.77]">
                  {t("explores.stats.id_coins.title")}
                </h6>
              </div>
              <img
                src={Image4}
                alt="ID Coins"
                className="size-[80px] md:size-[100px]"
              />
            </div>
            <div className="flex justify-between bg-white/[0.88] px-8 py-[30px] w-full rounded-[20px] col-span-1">
              <div className="space-y-1">
                <AnimatedNumber value={summaryData?.price} />
                <h6 className="font-medium text-[#002E33]/[0.77]">
                  {t("explores.stats.metaso_price.title")}
                </h6>
              </div>
              <img
                src={Image5}
                alt="MetaSo Price"
                className="size-[80px] md:size-[100px]"
              />
            </div>
            <div className="flex justify-between bg-white/[0.88] px-8 py-[30px] w-full rounded-[20px] col-span-1">
              <div className="space-y-1">
                <AnimatedNumber value={summaryData?.marketCap} />

                <h6 className="font-medium text-[#002E33]/[0.77]">
                  {t("explores.stats.market_cap.title")}
                </h6>
              </div>
              <img
                src={Image6}
                alt="Market Cap"
                className="size-[70px] md:size-[90px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#78DAE4]">
        <div className="w-full max-w-screen-lg mx-auto px-4 lg:px-0 py-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#001F23] mb-16">
            {t("explores.metablock.title")}
          </h2>
          <div className="w-full max-w-[1200px] mx-auto">
            <div className="bg-[#C1F2F7] rounded-2xl overflow-hidden">
              <div className="grid grid-cols-5 bg-[#80CBD3] px-6 py-4 text-[#001F23] font-medium">
                <div>Height of block</div>
                <div>User ID</div>
                <div>Time</div>
                <div>Protocol</div>
                <div>TXID</div>
              </div>

              <div>
                {txListData?.list.map((tx) => (
                  <div
                    key={tx.id}
                    className="grid grid-cols-5 px-6 py-4 text-[#002E33] hover:bg-[#78DAE4]/10 transition-colors"
                  >
                    <div>{tx.height ?? "--"}</div>
                    <div className="truncate">{tx.creator.slice(0, 4)}...{tx.creator.slice(-4)}</div>
                    <div>
                      {tx.timestamp
                        ? dayjs(tx.timestamp).format("YYYY-MM-DD HH:mm:ss")
                        : "--"}
                    </div>
                    <div>{tx.path.split("/")[2] || "--"}</div>
                    <div className="truncate">
                      <a
                        href={`${metaidManUrl}/search/${tx.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#002E33] hover:text-[#004F59] hover:underline"
                        title={tx.id}
                      >
                        {tx.id.slice(0, 8)}...{tx.id.slice(-4)}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer background={"bg-[#7DCED6]"} />
    </>
  );
};

export default Home;
