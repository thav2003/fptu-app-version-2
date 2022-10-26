import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { SmileOutlined } from "@ant-design/icons";
import { Field, Fields, formValueSelector, reduxForm } from "redux-form";
import Picker, { Emoji, EmojiStyle } from "emoji-picker-react";
import { validate, warn } from "./validate";
import { useBlur } from "../../helpers/helper";
const RenderField = fields => {
  const { content, file } = fields;
  const maxtext = 30;
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [text, setHandleText] = useState(content.input.value);
  const { ref, isComponentVisible, setIsComponentVisible } = useBlur(false);
  const myRef = useRef(null);
  const onEmojiClick = (emojiObject, event) => {
    const box = document.getElementById("BoxContent");
    const div = box.querySelectorAll("div");
    const clone = box.cloneNode(true);
    if (div.length) {
      //lấy textContent parent
      Array.prototype.slice.call(clone.children).forEach(child => {
        child.nodeType !== Node.TEXT_NODE && clone.removeChild(child);
      });
      let te = clone.innerHTML + "\n"; //textContentparent
      for (let i = 0; i < div.length - 1; i++) {
        te += div[i].textContent + "\n";
      }
      te += div[div.length - 1].textContent;
      div[div.length - 1].textContent += emojiObject.emoji;
      content.input.onChange(te + emojiObject.emoji);
      setHandleText(te + emojiObject.emoji);
    } else {
      content.input.onChange(box.textContent + emojiObject.emoji);
      box.textContent += emojiObject.emoji;
      setHandleText(box.textContent + emojiObject.emoji);
    }
    setIsComponentVisible(false);
  };
  const handleFileChange = e => {
    if (!e.target.files || e.target.files.length === 0) {
      setFiles([]);
      return;
    }
    let droppedFiles = e.target.files;
    let array = [];
    [...droppedFiles].forEach(file => {
      //const objectUrl = URL.createObjectURL(file);
      // const reader = new FileReader();
      // reader.onloadend = () => {
      //   const base64data = reader.result;
      //   console.log(base64data);
      //   //setImg(base64data);
      // };
      // reader.readAsDataURL(file);
      array.push(file);
    });
    file.input.onChange(array);
    setFiles(array);
  };
  const showEmojiPicker = () => {
    setIsComponentVisible(!isComponentVisible);
  };
  const handleText = e => {
    const div = e.target.querySelectorAll("div");
    const clone = e.target.cloneNode(true); // use deep
    if (div.length) {
      //lấy textContent parent
      Array.prototype.slice.call(clone.children).forEach(child => {
        child.nodeType !== Node.TEXT_NODE && clone.removeChild(child);
      });
      let te = clone.innerHTML + "\n"; //textContentparent
      for (let i = 0; i < div.length - 1; i++) {
        te += div[i].textContent + "\n";
      }
      te += div[div.length - 1].textContent;

      content.input.onChange(te);
      setHandleText(te);
    } else {
      content.input.onChange(e.target.textContent);
      setHandleText(e.target.textContent);
    }
  };
  useEffect(() => {
    const arrayFile = [],
      fileReaders = [];
    let isCancel = false;
    if (files.length) {
      files.forEach(f => {
        const fileReader = new FileReader();
        fileReaders.push(fileReader);
        fileReader.onload = e => {
          const { result } = e.target;
          if (result) {
            arrayFile.push(result);
          }
          if (arrayFile.length === files.length && !isCancel) {
            setPreviews(arrayFile);
          }
        };
        fileReader.readAsDataURL(f);
      });
    }
    return () => {
      isCancel = true;
      fileReaders.forEach(fileReader => {
        if (fileReader.readyState === 1) {
          fileReader.abort();
        }
      });
    };
  }, [files]);
  console.log(previews);
  return (
    <div className="space-y-1">
      <label className="font-semibold">Nội dung</label>
      {content.meta.touched &&
        ((content.meta.error && <span className="error">*</span>) ||
          (content.meta.warning && <span className="warning">*</span>))}

      {/* <textarea
        {...content.input}
        className="bg-gray-100 p-3 h-60 border border-gray-300 outline-none w-full"
        spellCheck="false"
        placeholder="Viết nội dung confession ở đây..."
        onChange={hanldeContentChange}
        onKeyDown={e => {
          if (e.key === "Backspace") {
            setIsFull(false);
          }
        }}
      /> */}
      <div
        onClick={() => myRef.current.focus()}
        className="formCfs relative w-full min-h-[154px] overflow-x-hidden overflow-y-auto cursor-text pointer-events-auto border-solid border-[2px] border-gray-300 pt-2"
      >
        <div className="px-[16px] border-box h-fit pb-[40px]">
          <div className="flex justify-center">
            <div
              {...content.input}
              className="h-full w-full border-none  px-[0px] pb-[8px] pt-[4px] relative  text-[.9375rem] leading-[1.1667] font-[400] border-box"
            >
              <div
                ref={myRef}
                className="facebook-font whitespace-pre-wrap select-text h-fit outline-none break-words text-[15px]   border-box"
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
                <div className="absolute pointer-events-none select-none z-1 top-[4px] leading-[1.1667] font-[400] text-[.9375rem] whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden text-[#B0B3B8]">
                  Bạn đang nghĩ gì?
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="px-[16px] border-box h-fit pb-[40px]">
          {previews.length > 0 ? (
            <div>
              {previews.map((image, idx) => {
                return (
                  <p key={idx}>
                    {" "}
                    <img src={image} alt="" />{" "}
                  </p>
                );
              })}
            </div>
          ) : null}
        </div>
        <div className="absolute bottom-2 right-[9px] flex flex-row flex-shrink-[0] justify-between items-stretch border-box flex-nowrap">
          <div className="relative flex-shrink-[0] flex flex-col border-box max-w-full">
            <div className="opacity-[0.7]">
              <div>
                <div
                  aria-label="Emoji"
                  className="flex basis-auto p-0 m-0 select-none inline-flex flex-row flex-shrink-[0] border-box items-stretch outline-none cursor-pointer bg-transparent"
                >
                  {isComponentVisible && (
                    <div className="absolute translate-y-[-300px]" ref={ref}>
                      <Picker
                        onEmojiClick={onEmojiClick}
                        width={400}
                        height={300}
                        previewConfig={{ showPreview: false }}
                        emojiStyle={EmojiStyle.FACEBOOK}
                        lazyLoadEmojis={true}
                      />
                    </div>
                  )}
                  <div onClick={showEmojiPicker}>
                    <svg
                      className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <input
                    id="file"
                    type="file"
                    className="hidden"
                    multiple
                    onChange={handleFileChange}
                  />
                  <label htmlFor="file">
                    <svg
                      className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                      />
                    </svg>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const UploadConfessionForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  const [countText, setCountText] = useState(0);

  return (
    <form
      onSubmit={handleSubmit}
      className=" bg-[#fff] sm:mx-auto rounded-xl w-full  sm:w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl custom-shadow:upload"
    >
      <Fields names={["content", "file"]} component={RenderField} />
      <div className="buttons flex mt-2">
        <div className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto">
          Cancel
        </div>
        <div className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500 hover:bg-indigo-300">
          <button type="submit" disabled={submitting}>
            Gửi
          </button>
        </div>
      </div>
    </form>
  );
};
const selector = formValueSelector("uploadConfessionForm");
const mapState = state => ({
  initialValues: {
    content: "",
    file: "",
  },
});
export default connect(mapState)(
  reduxForm({
    form: "uploadConfessionForm", // a unique identifier for this form
    validate, // <--- validation function given to redux-form
    warn, // <--- warning function given to redux-form
    enableReinitialize: true,
  })(UploadConfessionForm)
);
