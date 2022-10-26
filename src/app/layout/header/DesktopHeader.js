/* eslint-disable */
import React, { useState, useEffect } from "react";

import { Link, withRouter } from "react-router-dom";
import { Layout, Menu, Button, notification, Drawer, Dropdown } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import LocalStorageUtils, {
  LOCAL_STORAGE_KEY,
} from "@utils/browser/LocalStorage";
import styled from "styled-components";
import { enquireScreen } from "enquire-js";

const { Header } = Layout;

const DesktopHeader = props => {
  // const [desktop, setDesktop] = useState(true);

  // useEffect(() => {
  //   enquireScreen(b => setDesktop(b ? false : true));
  // }, []);
  const { history } = props;
  const [isLogin, setIsLogin] = useState(true);
  const [activeLink, setActiveLink] = useState("");
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    switch (history.location.pathname) {
      case "/":
        setActiveLink("Home");
        break;
      //history.push("/");
      case "/confessions":
        setActiveLink("Confessions");
        break;
      case "/confessions/myconfess":
        setActiveLink("Confessions");
        break;
      case "/confessions/send":
        setActiveLink("Confessions");
        break;
      case "/study":
        setActiveLink("Study");
        break;
      //history.push("/send");
    }
  }, []);
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
  return (
    <header
      className={
        "fixed top-0 w-full z-30 bg-[#fff] transition-all !font-['Rubik',sans-serif]" +
        (scrollActive ? " shadow-md pt-0" : " pt-4")
      }
    >
      <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
        <div className="col-start-1 col-end-2 flex items-center">
          <img
            src="/assets/images/fptuhcm-confessions.png"
            className="h-8 w-auto imageSpin"
          />
        </div>
        <ul className="hidden lg:flex col-start-4 col-end-8 text-[#4F5665]  items-center">
          <div
            onClick={() => {
              history.push("/");
              //setActiveLink("Home");
            }}
            className={
              "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
              (activeLink === "Home"
                ? " text-[#F53855] animation-active "
                : " text-[#4F5665] hover:text-[#F53855] a")
            }
          >
            Trang chủ
          </div>
          <div
            onClick={() => {
              history.push("/confessions");
            }}
            className={
              "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
              (activeLink === "Confessions"
                ? " text-[#F53855] animation-active "
                : " text-[#4F5665] hover:text-[#F53855] ")
            }
          >
            Confessions
          </div>
          <div
            onClick={() => {
              history.push("/study");
            }}
            className={
              "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
              (activeLink === "Study"
                ? " text-[#F53855] animation-active "
                : " text-[#4F5665] hover:text-[#F53855] ")
            }
          >
            Học tập
          </div>
          <div
            onClick={() => {
              setActiveLink("Event");
            }}
            className={
              "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
              (activeLink === "Event"
                ? " text-[#F53855] animation-active "
                : " text-[#4F5665] hover:text-[#F53855] ")
            }
          >
            Sự kiện
          </div>
          <div
            onClick={() => {
              setActiveLink("testimoni");
            }}
            className={
              "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
              (activeLink === "testimoni"
                ? " text-[#F53855] animation-active "
                : " text-[#4F5665] hover:text-[#F53855] ")
            }
          >
            Tìm bạn
          </div>
        </ul>
        <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
          <Link
            to="/login"
            className="h-fit text-[#0B132A] mx-2 sm:mx-4 capitalize tracking-wide hover:text-[#F53855] transition-all"
          >
            Sign In
          </Link>
          <Link to="/register">
            <Button className="h-fit font-medium tracking-wide py-2 px-5 sm:px-8 border !border-[#F53855] text-[#F53855] bg-[#fff] outline-none rounded-l-full rounded-r-full capitalize hover:bg-[#F53855] hover:text-[#fff] transition-all hover:shadow-orange ">
              Sign Up
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default withRouter(DesktopHeader);
