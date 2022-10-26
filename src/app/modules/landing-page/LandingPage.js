import React, { useState, useEffect, createRef, useRef } from "react";
//import "./LandingPage.scss";
import { Link } from "react-router-dom";
import Helmet from "react-helmet-async";
import LocalStorageUtils, {
  LOCAL_STORAGE_KEY,
} from "@utils/browser/LocalStorage";
import { Button } from "antd";
import { HomeOutlined, GithubOutlined, DownOutlined } from "@ant-design/icons";
import { isMobile, isDesktop } from "react-device-detect";
import { OverPack } from "rc-scroll-anim";
import QueueAnim from "rc-queue-anim";
import MyLayout from "../../layout/Layout";
const listUser = [
  {
    name: "Users",
    text: "390",
    icon: "/assets/images/user_icon.svg",
  },
  {
    name: "Locations",
    text: "Xavalo",
    icon: "/assets/images/location.svg",
  },
  {
    name: "Server",
    text: "50",
    icon: "/assets/images/sever_icon.svg",
  },
];
const features = [
  "Bảo mật thông tin người dùng.",
  "Sân chơi lành mạnh.",
  "Giao lưu, học hỏi",
  "Kết thêm nhiều bạn mới.",
];
const animation = () => {
  const callback = function (entries) {
    entries.forEach(entry => {
      //console.log(entry);

      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fadeIn");
      } else {
        entry.target.classList.remove("animate-fadeIn");
      }
    });
  };
  const observer = new IntersectionObserver(callback, {
    rootMargin: "-100px 0px -100px 0px",
  });

  const targets = document.querySelectorAll(".scroll-section");
  targets.forEach(function (target) {
    target.classList.add("opacity-0");
    observer.observe(target);
  });
};
function LandingPage() {
  const [mode, setMode] = useState(true);

  useEffect(() => {
    if (isDesktop) {
      animation();
    }
  }, []);

  return (
    <MyLayout>
      <Helmet>
        <title>FUHCM.com</title>
      </Helmet>
      <div className="landingPage max-w-screen-xl lg:mt-24 mt-12 px-8 xl:px-16 mx-auto">
        <div className="scroll-section grid grid-flow-row sm:grid-flow-col grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16">
          <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-[#0B132A] leading-normal">
              Cộng đồng FPTU
              <br />
              <br />
              <strong>FPTU HCM Confession</strong>
            </h1>
            <p className="text-[#4F5665] mt-4 mb-6">
              Provide a network for all your needs with ease and fun using
              LaslesVPN discover interesting features from us.
            </p>
            <Link to="/confessions/send">
              <Button
                type="primary"
                danger
                size="large"
                className="py-3 h-fit lg:py-4 px-12 lg:px-16 text-[#fff] font-semibold rounded-lg  button-landing transition-all "
              >
                Gửi confession
              </Button>
            </Link>
          </div>
          <div className="flex w-full">
            <div className="w-full h-full ">
              <img
                src="/assets/images/Illustration1.png"
                alt=""
                className="h-full w-full object-scale-down"
              />
            </div>
          </div>
        </div>

        <div className="scroll-section relative w-full flex">
          <div className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9   divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-[#fff] z-10">
            {listUser.map((listUsers, index) => (
              <div
                className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
                key={index}
              >
                <div className="flex mx-auto w-40 sm:w-auto">
                  <div className="flex items-center justify-center bg-[#FFECEC] w-12 h-12 mr-6 rounded-full">
                    <img src={listUsers.icon} className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xl text-[#0B132A] font-bold">
                      {listUsers.text}+
                    </p>
                    <p className="text-lg text-[#4F5665]">{listUsers.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="scroll-section grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
          <div className="flex w-full justify-end">
            <div className="h-full w-full p-4">
              <img
                src="/assets/images/Illustration2.png"
                alt=""
                className="h-full w-full object-scale-down"
              />
            </div>
          </div>

          <div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12">
            <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-[#0B132A]">
              We Provide Many Features You Can Use
            </h3>
            <p className="my-2 text-[#4F5665]">
              You can explore the features that we provide with fun and have
              their own functions each feature.
            </p>
            <ul className="text-[#4F5665] self-start list-inside ml-8">
              {features.map((feature, index) => (
                <li key={feature} className="relative circle-check custom-list">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="scroll-section home-page page2">
          <div className="home-page-wrapper">
            <div className="title-line-wrapper page2-line">
              <div className="title-line" />
            </div>
            <h2>
              We are looking for <span>Community Developers</span>
              <DownOutlined className="translate-y-[-5px]" />
            </h2>
            <OverPack>
              <QueueAnim
                key="queue"
                type="bottom"
                leaveReverse
                className="page2-content"
              >
                <p key="p" className="page-content">
                  We are looking for developers to maintain and develop this
                  community's non-profit app in the future
                </p>
                <div key="code1" className="home-code">
                  {mode && (
                    <div>
                      <div>
                        $ <span>git clone</span>{" "}
                        git@github.com/fuhcm/fptu-app.git
                      </div>
                      <div>$ cd fptu-app</div>
                      <div>$ docker-compose up</div>
                    </div>
                  )}
                  {!mode && (
                    <div>
                      <div>
                        $ <span>git clone</span>{" "}
                        git@github.com/fuhcm/fptu-go.git
                      </div>
                      <div>$ cd fptu-go</div>
                      <div>$ docker-compose up</div>
                    </div>
                  )}
                </div>
                <p key="p2" className="page-content">
                  This is {mode ? "front-end" : "back-end"} part with{" "}
                  <strong>{mode ? "React" : "Go"}</strong>, if you like
                  {mode ? " back-end" : " front-end"} then click
                  <a href="#!" onClick={() => setMode(!mode)}>
                    {" "}
                    here
                  </a>{" "}
                  to join with
                  <strong> {mode ? "Go" : "React"}</strong>
                </p>
                <div key="button" style={{ marginTop: 10 }}>
                  <a
                    href="https://github.com/fuhcm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      className="py-3 h-fit lg:py-4 px-12 lg:px-16 bg-sky-500 text-[#fff] font-semibold rounded-lg  button-landing transition-all "
                      type="primary"
                      size="large"
                      icon={<GithubOutlined />}
                    >
                      Become a Contributor
                    </Button>
                  </a>
                </div>
              </QueueAnim>
            </OverPack>
          </div>
        </div>
      </div>
    </MyLayout>
  );
}

export default LandingPage;
