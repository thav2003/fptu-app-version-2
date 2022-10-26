import React, { useState } from "react";
import { SmileOutlined } from "@ant-design/icons";
const TrangThai: React.FC = () => {
  const [text, setHandleText] = useState<string>("");

  const handleText = (e: any) => {
    const div = e.target.querySelectorAll("div");
    const clone = e.target.cloneNode(true); // use deep
    if (div.length) {
      //lấy textContent parent
      Array.prototype.slice.call(clone.children).forEach((child) => {
        child.nodeType !== Node.TEXT_NODE && clone.removeChild(child);
      });
      let te = clone.innerHTML + "\n"; //textContentparent
      div.forEach((item: any) => {
        te += item.textContent + "\n";
      });
      setHandleText(te);
    } else {
      setHandleText(e.target.textContent);
    }
  };
  return (
    <div className="relative w-full min-h-[154px]  cursor-text pointer-events-auto border-solid border-[2px] border-gray-300 pt-2">
      <div className="px-[16px] border-box h-fit pb-[40px]">
        <div className="flex justify-center">
          <div className="h-full w-full border-none  px-[0px] pb-[8px] pt-[4px] relative  text-[1.5rem] leading-[1.1667] font-[400] border-box">
            <div
              className="whitespace-pre-wrap select-text h-fit outline-none break-words text-[24px]   border-box"
              contentEditable="true"
              suppressContentEditableWarning={true}
              role="textbox"
              id="BoxContent"
              spellCheck={true}
              onInput={handleText}
              onBlur={handleText}
            >
              <br />
            </div>
            {!text && (
              <div className="absolute pointer-events-none select-none z-1 top-[4px] leading-[1.1667] font-[400] text-[1.5rem] whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-[#B0B3B8]">
                Bạn đang nghĩ gì?
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="absolute right-[36px] left-0 bottom-1 pl-[16px] pr-[12px] border-box">
        <div className="flex items-stretch w-full">
          <div
            aria-label="Hiển thị các tùy chọn phông nền"
            className="inline-flex cursor-pointer flex-row items-stretch flex-shrink border-box border-solid  basis-auto p-0 relative "
          >
            <span className="ml-[-4px] mt-[-2px] select-none">
              <img className="h-[38px]" alt="" src="/select-font.png" />
            </span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-2 right-[9px] flex flex-row flex-shrink-[0] justify-between items-stretch border-box flex-nowrap">
        <div className="relative flex-shrink-[0] flex flex-col border-box max-w-full">
          <div className="opacity-[0.7]">
            <div>
              <span>
                <div
                  aria-label="Emoji"
                  className="flex basis-auto p-0 m-0 select-none inline-flex flex-row flex-shrink-[0] border-box items-stretch outline-none cursor-pointer bg-transparent"
                >
                  <div className="h-full w-full relative flex justify-center items-cenetr">
                    <SmileOutlined className="h-[24px] w-[24px] text-[24px] i-emoji2 object-cover" />
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TrangThai;
