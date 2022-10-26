import React, { useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));
const SideBar = () => {
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(_ => {
    const handleScroll = _ => {
      if (window.pageYOffset > 1) {
        setScrollActive(true);
      } else {
        setScrollActive(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return _ => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  //console.log(scrollActive);
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      className=" fixed   box-border overscroll-auto
    shadow-lg scrollbar-thin  scrollbar-thumb-[#febc38] scrollbar-track-white !overflow-y-auto"
      style={{
        left: 0,
        bottom: scrollActive ? "72px" : "6rem",
        minHeight: "100vh",
        top: 0,

        backgroundColor: "rgb(255 250 241)",
      }}
    >
      <div
        className={`pl-5 pt-10 w-full pr-5 flex flex-col h-full justify-between ${
          scrollActive ? "mt-[72px]" : "mt-[6rem]"
        } `}
      >
        <div>
          <div className="mb-4">
            <label className="text-sm text-gray-500 font-semibold" htmlFor="">
              Tìm kiếm bằng từ khoá
            </label>
            <div className="flex items-center mt-2">
              <input
                type="text"
                name="search"
                id="search"
                className="text-sm rounded bg-white outline-none border-2 border-white focus:border-primary  py-2 px-3 w-full transition-all"
                placeholder="Ngôn ngữ, từ khoá..."
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="text-sm text-gray-500 font-semibold" htmlFor="">
              Chọn số lượng câu hỏi
            </label>
            <div className="mt-2 relative">
              <div className=" flex justify-between items-center text-sm rounded bg-white outline-none border-2 border-white  py-2 px-3 w-full transition-all cursor-pointer">
                <span>Chọn số lượng</span>
                <span>
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label
              className="text-sm text-primary-normal font-semibold"
              htmlFor=""
            >
              {" "}
              Thời gian: không giới hạn{" "}
            </label>
            <div className="mt-2">
              <div className="relative slider-container ">
                <span
                  style={{ top: "12px" }}
                  className="bar cursor-pointer absolute left-0 w-full h-1.5 rounded-full overflow-hidden bg-white"
                >
                  <span
                    className="fill block w-0 h-full bg-primary"
                    style={{ width: "0%" }}
                  />
                </span>
                <input
                  type="range"
                  id="slider"
                  min="0"
                  max="60"
                  value="0"
                  className="slider cursor-pointer relative appearance-none w-full h-1 rounded-full outline-none bg-transparent"
                />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="text-sm text-gray-500 font-semibold" htmlFor="">
              Loại câu hỏi
            </label>
            <div className="mt-3">
              <button
                type="button"
                className=" w-full outline-none focus:outline-none cursor-pointer text-gray-700 flex items-center py-1.5"
              >
                <span className="mr-2 text-white text-lg border rounded-full border-black border-opacity-10">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z" />
                      <circle cx="12" cy="12" r="10" />
                    </g>
                  </svg>
                </span>
                <span className="text-base"> C++ </span>
              </button>
              <button
                type="button"
                className=" w-full outline-none focus:outline-none cursor-pointer text-gray-700 flex items-center py-1.5"
              >
                <span className="mr-2 text-white text-lg border rounded-full border-black border-opacity-10">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z" />
                      <circle cx="12" cy="12" r="10" />
                    </g>
                  </svg>
                </span>
                <span className="text-base"> C++ </span>
              </button>
              <button
                type="button"
                className=" w-full outline-none focus:outline-none cursor-pointer text-gray-700 flex items-center py-1.5"
              >
                <span className="mr-2 text-white text-lg border rounded-full border-black border-opacity-10">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z" />
                      <circle cx="12" cy="12" r="10" />
                    </g>
                  </svg>
                </span>
                <span className="text-base"> C++ </span>
              </button>
              <button
                type="button"
                className=" w-full outline-none focus:outline-none cursor-pointer text-gray-700 flex items-center py-1.5"
              >
                <span className="mr-2 text-white text-lg border rounded-full border-black border-opacity-10">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z" />
                      <circle cx="12" cy="12" r="10" />
                    </g>
                  </svg>
                </span>
                <span className="text-base"> C++ </span>
              </button>
              <button
                type="button"
                className=" w-full outline-none focus:outline-none cursor-pointer text-gray-700 flex items-center py-1.5"
              >
                <span className="mr-2 text-white text-lg border rounded-full border-black border-opacity-10">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z" />
                      <circle cx="12" cy="12" r="10" />
                    </g>
                  </svg>
                </span>
                <span className="text-base"> C++ </span>
              </button>
              <button
                type="button"
                className=" w-full outline-none focus:outline-none cursor-pointer text-gray-700 flex items-center py-1.5"
              >
                <span className="mr-2 text-white text-lg border rounded-full border-black border-opacity-10">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z" />
                      <circle cx="12" cy="12" r="10" />
                    </g>
                  </svg>
                </span>
                <span className="text-base"> C++ </span>
              </button>
              <button
                type="button"
                className=" w-full outline-none focus:outline-none cursor-pointer text-gray-700 flex items-center py-1.5"
              >
                <span className="mr-2 text-white text-lg border rounded-full border-black border-opacity-10">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z" />
                      <circle cx="12" cy="12" r="10" />
                    </g>
                  </svg>
                </span>
                <span className="text-base"> C++ </span>
              </button>
              <button
                type="button"
                className=" w-full outline-none focus:outline-none cursor-pointer text-gray-700 flex items-center py-1.5"
              >
                <span className="mr-2 text-white text-lg border rounded-full border-black border-opacity-10">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z" />
                      <circle cx="12" cy="12" r="10" />
                    </g>
                  </svg>
                </span>
                <span className="text-base"> C++ </span>
              </button>
              <button
                type="button"
                className=" w-full outline-none focus:outline-none cursor-pointer text-gray-700 flex items-center py-1.5"
              >
                <span className="mr-2 text-white text-lg border rounded-full border-black border-opacity-10">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z" />
                      <circle cx="12" cy="12" r="10" />
                    </g>
                  </svg>
                </span>
                <span className="text-base"> C++ </span>
              </button>
              <button
                type="button"
                className=" w-full outline-none focus:outline-none cursor-pointer text-gray-700 flex items-center py-1.5"
              >
                <span className="mr-2 text-white text-lg border rounded-full border-black border-opacity-10">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z" />
                      <circle cx="12" cy="12" r="10" />
                    </g>
                  </svg>
                </span>
                <span className="text-base"> C++ </span>
              </button>
              <button
                type="button"
                className=" w-full outline-none focus:outline-none cursor-pointer text-gray-700 flex items-center py-1.5"
              >
                <span className="mr-2 text-white text-lg border rounded-full border-black border-opacity-10">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z" />
                      <circle cx="12" cy="12" r="10" />
                    </g>
                  </svg>
                </span>
                <span className="text-base"> C++ </span>
              </button>
              <button
                type="button"
                className=" w-full outline-none focus:outline-none cursor-pointer text-gray-700 flex items-center py-1.5"
              >
                <span className="mr-2 text-white text-lg border rounded-full border-black border-opacity-10">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z" />
                      <circle cx="12" cy="12" r="10" />
                    </g>
                  </svg>
                </span>
                <span className="text-base"> C++ </span>
              </button>
              <button
                type="button"
                className=" w-full outline-none focus:outline-none cursor-pointer text-gray-700 flex items-center py-1.5"
              >
                <span className="mr-2 text-white text-lg border rounded-full border-black border-opacity-10">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z" />
                      <circle cx="12" cy="12" r="10" />
                    </g>
                  </svg>
                </span>
                <span className="text-base"> C++ </span>
              </button>
              <button
                type="button"
                className=" w-full outline-none focus:outline-none cursor-pointer text-gray-700 flex items-center py-1.5"
              >
                <span className="mr-2 text-white text-lg border rounded-full border-black border-opacity-10">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z" />
                      <circle cx="12" cy="12" r="10" />
                    </g>
                  </svg>
                </span>
                <span className="text-base"> C++ </span>
              </button>
              <button
                type="button"
                className=" w-full outline-none focus:outline-none cursor-pointer text-gray-700 flex items-center py-1.5"
              >
                <span className="mr-2 text-white text-lg border rounded-full border-black border-opacity-10">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z" />
                      <circle cx="12" cy="12" r="10" />
                    </g>
                  </svg>
                </span>
                <span className="text-base"> C++ </span>
              </button>
            </div>
          </div>
          <div className="w-full">
            <button
              type="button"
              className="w-full text-center outline-none focus:outline-none cursor-pointer py-2 
 text-gray-800 bg-primary hover:bg-primary-dark transition-all rounded shadow font-light"
            >
              Tìm đề thi
            </button>
          </div>
        </div>
      </div>
    </Sider>
  );
};
export default SideBar;
