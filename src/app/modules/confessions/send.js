import React, { useState, useEffect, createRef, useRef } from "react";
import Helmet from "react-helmet-async";
import UploadConfessionForm from "../forms/uploadConfessionForm";
import axioxApi from "./api/axiosApi";
const rules = [
  "Bảo mật thông tin người dùng.",
  "Sân chơi lành mạnh.",
  "Giao lưu, học hỏi",
  "Kết thêm nhiều bạn mới.",
];
const Send = () => {
  const hanldeSubmit = async values => {
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
    // try {
    //   console.log(values);
    //   const res = await axioxApi.send(values);

    //   console.log(res);
    //
    // } catch (e) {
    //   console.log(e);
    // }
  };
  return (
    <>
      <Helmet>
        <title>FUHCM Confessions</title>
      </Helmet>
      <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 sm:grid-rows-1 sm:grid-cols-6 gap-8 pb-6 ">
        <div className=" flex flex-col justify-center items-start  sm:col-span-5">
          <div className="mx-auto  w-10/12 text-2xl text-center font-bold  m-5  text-gray-800">
            Gửi confessions
          </div>
          <UploadConfessionForm onSubmit={hanldeSubmit} />
        </div>
        <div className=" flex flex-col  ">
          <div className="mx-auto  w-10/12 text-2xl text-center sm:text-left font-bold  m-5  text-gray-800">
            Quy định
          </div>
          <div className="mx-auto sm:mx-0">
            <ul className="text-[#4F5665]  self-start list-inside flex flex-col ml-8 w-10/12">
              {rules.map((feature, index) => (
                <li
                  key={feature}
                  className="relative circle-check custom-list items-center px-auto justify-center"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Send;
