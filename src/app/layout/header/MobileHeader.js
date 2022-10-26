/* eslint-disable */
import React, { useState, useEffect } from "react";

import { Link, withRouter } from "react-router-dom";
import { Layout, Menu, Button, notification, Drawer } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import LocalStorageUtils, {
  LOCAL_STORAGE_KEY,
} from "@utils/browser/LocalStorage";
import styled from "styled-components";
import { enquireScreen } from "enquire-js";

const { Header } = Layout;

const MobilbeHeader = ({ history }) => {
  // const [desktop, setDesktop] = useState(true);

  // useEffect(() => {
  //   enquireScreen(b => setDesktop(b ? false : true));
  // }, []);
  const [activeLink, setActiveLink] = useState("");
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    switch (history.location.pathname) {
      case "/":
        setActiveLink("Home");
        break;
      //history.push("/");
      case "/send":
        setActiveLink("Confessions");
        break;
      //history.push("/send");
    }
  }, []);
  return (
    <React.Fragment>
      {/* Mobile Navigation */}

      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20  shadow-t w-full ">
        <div className="bg-[#fff] ">
          <ul className="flex w-full justify-between items-center text-[#4F5665]">
            <div
              onClick={() => {
                setActiveLink("Trang chủ");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-solid border-0 border-t-2 transition-all " +
                (activeLink === "Trang chủ"
                  ? "  border-[#F53855] text-[#F53855]"
                  : " border-transparent")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Trang chủ
            </div>
            <div
              onClick={() => {
                setActiveLink("feature");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-solid border-0 border-t-2 transition-all " +
                (activeLink === "feature"
                  ? "  border-[#F53855] text-[#F53855]"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              Confessions
            </div>
            <div
              onClick={() => {
                setActiveLink("pricing");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-solid border-0 border-t-2 transition-all " +
                (activeLink === "pricing"
                  ? "  border-[#F53855] text-[#F53855]"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Học tập
            </div>
            <div
              onClick={() => {
                setActiveLink("testimoni");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-solid border-0 border-t-2 transition-all " +
                (activeLink === "testimoni"
                  ? "  border-[#F53855] text-[#F53855]"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Tìm bạn
            </div>
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </React.Fragment>
  );
};

export default withRouter(MobilbeHeader);
