import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Shownow from "@/assets/install/shownow.png";
import Earning from "@/assets/install/earning.png";
import QuicklyInstall from "@/assets/install/quickly-install.png";
import {
  Terminal,
  Globe,
  TestTube,
  Settings,
  FileCode,
  Copy,
  ArrowRight,
} from "lucide-react";

const InstallPage: React.FC = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Installation Guide Section */}
      <div className="w-full bg-[#93CBFF] px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 lg:pb-16">
        <Header />
        <div className="w-full max-w-screen-lg mx-auto flex flex-col items-center">
          <h1 className="font-bold text-center text-[#001F23] text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6">
            Installation Guide
          </h1>
          <p className="text-[#001F23]/80 text-base sm:text-lg md:text-xl mb-8 text-center max-w-[800px]">
            To make MetaSo accessible to everyone, all programs are packaged
            into a single installation package, including one-click upgrade
            Installing, ensuring all MetaSo nodes across the network can stay in
            sync.
          </p>
          <p className="text-[#001F23]/80 text-base sm:text-lg mb-12 text-center">
            PS: If you need to view the tutorial on how to purchase a server,
            please refer to the{" "}
            <a
              href="https://github.com/metaid-developers/metaso-deploy?tab=readme-ov-file#how-to-purchase-a-server"
              target="_blank"
              className="text-blue-600 underline"
            >
              Tutorial
            </a>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
                <Terminal className="w-8 h-8 text-[#002E33]" />
              </div>
              <h3 className="font-semibold text-[#001F23]">Server installer</h3>
              <p className="text-sm sm:text-base lg:text-lg text-[#001F23]/70">
                Execute the following command on your server to start the
                installer
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
                <Globe className="w-8 h-8 text-[#002E33]" />
              </div>
              <h3 className="font-semibold text-[#001F23]">
                Access the installation
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-[#001F23]/70">
                Access the installer page at http://[server-IP]:7171
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
                <TestTube className="w-8 h-8 text-[#002E33]" />
              </div>
              <h3 className="font-semibold text-[#001F23]">
                Test the MetaSo service
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-[#001F23]/70">
                Test the MetaSo service at http://[server-IP]:3000
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl mx-auto mt-8">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
                <Settings className="w-8 h-8 text-[#002E33]" />
              </div>
              <h3 className="font-semibold text-[#001F23]">
                Access admin settings
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-[#001F23]/70">
                Access admin settings at http://[server-IP]:3000/dashboard/Login
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
                <FileCode className="w-8 h-8 text-[#002E33]" />
              </div>
              <h3 className="font-semibold text-[#001F23]">
                API documentation
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-[#001F23]/70">
                API documentation available at http://[server-IP]:7172
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Server Installer Section */}
      <div className="w-full bg-[#83BBFF]">
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-center text-[#001F23] mb-4">
            Server installer
          </h2>
          <p className="text-center text-[#001F23]/80 mb-8">
            Execute the following command on your server to start the installer:
          </p>
          <div className="max-w-3xl mx-auto bg-white/80 rounded-xl p-4 flex items-center justify-between">
            <code className="text-sm text-[#001F23] block pr-10">
              wget -qO-
              https://github.com/metaid-developers/metaso/releases/download/v0.1/install_metaso_boot.sh{" "}
              | sudo bash
            </code>
            <button
              onClick={() =>
                copyToClipboard(
                  "wget -qO- https://github.com/metaid-developers/metaso/releases/download/v0.1/installmetaso_boot.sh | sudo bash"
                )
              }
              className="transition-opacity text-[#002E33]"
            >
              <Copy className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Access Installer Section */}
      <div className="w-full bg-[#93CBFF]">
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-center text-[#001F23] mb-4">
            Access the installer
          </h2>
          <p className="text-center text-[#001F23]/80 mb-8">
            Access the installer page at http://[server-IP]:7171 (port 7171
            needs to be opened on your server)
          </p>
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center gap-2">
                Upgrade
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <img
              src={QuicklyInstall}
              alt="Metaso Installer Interface"
              className="w-full rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Test Service Section */}
      <div className="w-full bg-[#76B4FF]">
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-center text-[#001F23] mb-4">
            Test the MetaSo service
          </h2>
          <p className="text-center text-[#001F23]/80 mb-8">
            Test the MetaSo service at http://[server-IP]:3000 (port 3000 needs
            to be opened)
          </p>
          <div className="max-w-3xl mx-auto">
            <img
              src={Earning}
              alt="Test MetaSo Service Interface"
              className="w-full rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Admin Settings Section */}
      <div className="w-full bg-[#93CBFF]">
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-center text-[#001F23] mb-4">
            Access admin settings
          </h2>
          <p className="text-center text-[#001F23]/80 mb-8">
            Access admin settings at http://[server-IP]:3000/dashboard/Login
          </p>
          <div className="max-w-3xl mx-auto">
            <img
              src={Shownow}
              alt="Admin Settings Interface"
              className="w-full rounded-xl"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default InstallPage;
