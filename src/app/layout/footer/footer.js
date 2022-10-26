import React from "react";
const Footer = () => {
  return (
    <div className="bg-[#F8F8F8] pt-10 pb-10 z-[5] mt-auto">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <img
            alt=""
            src="/assets/images/fptuhcm-confessions.png"
            className="h-8 w-auto mb-6 imageSpin"
          />
          <p className="mb-4">
            <strong className="font-medium">FPTU HCM</strong> là một dự án phi
            lợi nhuận dành cho cộng đồng FPT.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <img
                alt=""
                src="/assets/images/facebook.svg"
                className="h-6 w-6"
              />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <img
                alt=""
                src="/assets/images/twitter.svg"
                className="h-6 w-6"
              />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <img
                alt=""
                src="/assets/images/instagram.svg"
                className="h-6 w-6"
              />
            </div>
          </div>
          <p className="text-gray-400">
            ©{new Date().getFullYear()} - Ynnub2804
          </p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-[#0B132A] mb-4 font-medium text-lg">Product</p>
          <ul className="text-[#4F5665] ">
            <li className="my-2 hover:text-[#F53855] cursor-pointer transition-all">
              Download{" "}
            </li>
            <li className="my-2 hover:text-[#F53855] cursor-pointer transition-all">
              Pricing{" "}
            </li>
            <li className="my-2 hover:text-[#F53855] cursor-pointer transition-all">
              Locations{" "}
            </li>
            <li className="my-2 hover:text-[#F53855] cursor-pointer transition-all">
              Server{" "}
            </li>
            <li className="my-2 hover:text-[#F53855] cursor-pointer transition-all">
              Countries{" "}
            </li>
            <li className="my-2 hover:text-[#F53855] cursor-pointer transition-all">
              Blog{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-[#0B132A] mb-4 font-medium text-lg">Engage</p>
          <ul className="text-[#4F5665]">
            <li className="my-2 hover:text-[#F53855] cursor-pointer transition-all">
              LaslesVPN ?{" "}
            </li>
            <li className="my-2 hover:text-[#F53855] cursor-pointer transition-all">
              FAQ{" "}
            </li>
            <li className="my-2 hover:text-[#F53855] cursor-pointer transition-all">
              Tutorials{" "}
            </li>
            <li className="my-2 hover:text-[#F53855] cursor-pointer transition-all">
              About Us{" "}
            </li>
            <li className="my-2 hover:text-[#F53855] cursor-pointer transition-all">
              Privacy Policy{" "}
            </li>
            <li className="my-2 hover:text-[#F53855] cursor-pointer transition-all">
              Terms of Service{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-[#0B132A] mb-4 font-medium text-lg">Earn Money</p>
          <ul className="text-[#4F5665]">
            <li className="my-2 hover:text-[#F53855] cursor-pointer transition-all">
              Affiliate{" "}
            </li>
            <li className="my-2 hover:text-[#F53855] cursor-pointer transition-all">
              Become Partner{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
