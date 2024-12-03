import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Globe from "@/assets/intro/Globe.png";
import Wallet from "@/assets/intro/Wallet.png";
import Bitcoin from "@/assets/intro/Bitcoin.png";
import Network from "@/assets/intro/Network.png";
import { Smile, Share2, Shield, Ban } from "lucide-react";
import GlobeNetwork from "@/assets/intro/globe-network.png";
import CompetitorsTable from "@/assets/intro/competitors-table.png";
import MetaSoNetworkDiagram from "@/assets/intro/metaso-network-diagram.png";

const IntroPage: React.FC = () => {
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
            What is MetaSo?
          </h1>
          <p className="text-lg text-[#001F23]/80 mt-6 font-normal text-center max-w-[800px]">
            MetaSo is an open-source, social networking, Web3 middleware based
            on MetaID protocol. Developers can deploy new Web3 social
            applications in 20 minutes by simply editing the configuration
            files. MetaSo was launched and operated by DAO and incentivized with
            tokenomics. Data in Different MetaSo applications are interconnected
            and interoperable. MetaSo will bust data silos and build an ultimate
            decentralized Web3 social platform.
          </p>
          <div className="mt-16 w-full max-w-[1200px] mx-auto">
            <img
              src={MetaSoNetworkDiagram}
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
            Why do you need Metaso?
          </h2>
          <p className="text-lg text-center text-[#001F23]/80 mb-16">
            Metaso is a platform designed to provide safer, more convenient and
            more open social nodes
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#A7F0FF] rounded-2xl p-8">
              <Smile className="w-8 h-8 mb-4 text-[#131A29]" />
              <h3 className="text-xl font-semibold text-[#002E33] mb-4">
                One account / mnemonic phrase to use all social apps
              </h3>
              <p className="text-sm text-[#002E33]/70">
                Metaso achieves account portability through the MetaID protocol.
                Users can use an account or mnemonic phrase to log in to all
                social applications that support Metaso.
              </p>
            </div>
            <div className="bg-[#A7F0FF] rounded-2xl p-8">
              <Share2 className="w-8 h-8 mb-4 text-[#131A29]" />
              <h3 className="text-xl font-semibold text-[#002E33] mb-4">
                Data interconnection between all social platforms
              </h3>
              <p className="text-sm text-[#002E33]/70">
                This means that users' data on different social platforms can be
                circulated and shared with each other, improving the
                availability and connectivity of data.
              </p>
            </div>
            <div className="bg-[#A7F0FF] rounded-2xl p-8">
              <Shield className="w-8 h-8 mb-4 text-[#131A29]" />
              <h3 className="text-xl font-semibold text-[#002E33] mb-4">
                Users don't have to worry about being deleted or tampered with
                by social platforms
              </h3>
              <p className="text-sm text-[#002E33]/70">
                Metaso ensures the decentralization and non-tampering of data by
                uploading all data to the chain, and the security of user data
                is protected.
              </p>
            </div>
            <div className="bg-[#A7F0FF] rounded-2xl p-8">
              <Ban className="w-8 h-8 mb-4 text-[#131A29]" />
              <h3 className="text-xl font-semibold text-[#002E33] mb-4">
                Users don't have to worry about their accounts being banned by
                social platforms
              </h3>
              <p className="text-sm text-[#002E33]/70">
                Metaso provides independence between accounts and social
                platform accounts.
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
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#A7F0FF] rounded-2xl p-8 flex items-center min-h-[200px]">
              <div className="max-w-[70%]">
                <h3 className="text-xl font-semibold text-[#002E33] mb-4">
                  Completely based on Bitcoin
                </h3>
                <p className="text-sm text-[#002E33]/70">
                  Completely based on Bitcoin and Bitcoin-related ecology, data
                  security cannot be tampered with and belongs to the user
                  himself
                </p>
              </div>
              <div className="flex-shrink-0 ml-auto">
                <img src={Bitcoin} alt="Bitcoin" className="size-[120px]" />
              </div>
            </div>

            <div className="bg-[#A7F0FF] rounded-2xl p-8 flex items-center min-h-[200px]">
              <div className="max-w-[70%]">
                <h3 className="text-xl font-semibold text-[#002E33] mb-4">
                  Built based on MetaID protocol
                </h3>
                <p className="text-sm text-[#002E33]/70">
                  Built based on the MetaID protocol, one wallet uses all MetaSo
                  social applications, and data interconnection between
                  different applications
                </p>
              </div>
              <div className="flex-shrink-0 ml-auto">
                <img src={Wallet} alt="Wallet" className="size-[120px]" />
              </div>
            </div>

            <div className="bg-[#A7F0FF] rounded-2xl p-8 flex items-center min-h-[200px]">
              <div className="max-w-[70%]">
                <h3 className="text-xl font-semibold text-[#002E33] mb-4">
                  Highly integrated software
                </h3>
                <p className="text-sm text-[#002E33]/70">
                  The MetaSo software package is highly integrated and ordinary
                  users can install it and become a node in the network within
                  30 minutes.
                </p>
              </div>
              <div className="flex-shrink-0 ml-auto">
                <img src={Globe} alt="Wallet" className="size-[120px]" />
              </div>
            </div>

            <div className="bg-[#A7F0FF] rounded-2xl p-8 flex items-center min-h-[200px]">
              <div className="max-w-[70%]">
                <h3 className="text-xl font-semibold text-[#002E33] mb-4">
                  Receive $MetaSo incentives
                </h3>
                <p className="text-sm text-[#002E33]/70">
                  By operating MetaSo, you can receive $MetaSo incentives and
                  contribute to the global decentralized network.
                </p>
              </div>
              <div className="flex-shrink-0 ml-auto">
                <img src={Network} alt="Wallet" className="size-[120px]" />
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
            Decentralized Data Storage
          </h2>
          <p className="text-lg text-center text-white/80 mb-16 max-w-[800px] mx-auto">
            Decentralized storage of data is one of the most important features
            of MetaSo. Thanks to the mechanisms of Bitcoin and Metaso, we can
            obtain a social network that belongs to humans around the world,
            where data is completely distributed and stored. This network is not
            controlled by any party, and the data belongs to the user himself.
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
            Competitors
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
