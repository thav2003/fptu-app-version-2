import { useEffect, useRef, useState } from "react";
export const formatDate = date => {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [day, month, year].join("/");
};
export const formatTime = date => {
  const d = new Date(date);
  const time = d.toTimeString().split(" ")[0];
  return time;
};

export const useBlur = initialIsVisible => {
  const [isComponentVisible, setIsComponentVisible] =
    useState(initialIsVisible);

  const ref = useRef(null);
  const handleHideDropdown = event => {
    if (event.key === "Enter") {
      setIsComponentVisible(false);
    }
  };

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleHideDropdown, true);
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("keydown", handleHideDropdown, true);
      document.removeEventListener("click", handleClickOutside, true);
    };
  });
  return { ref, isComponentVisible, setIsComponentVisible };
};
export const Slider3D = ({ elementOrigin, array, render, onUpdate }) => {
  const A = 450;
  const B = 100;
  const X0_RIGHT = 16;
  const X0_LEFT = -16;
  const DISTANCE = 80;
  const START_Z = 120;
  const SCALE_ORIGIN = 0.25;

  //* CREATE HTML
  let htmlString = array
    .map((elem, index, array) => render(elem, index, array))
    .join("");
  elementOrigin.innerHTML = htmlString;

  //* CREATE LIST DATA
  let elems = elementOrigin.childNodes;
  const dataList = Array.from(elems)
    .reverse()
    .map((elem, index) => {
      //* init style
      //! don't change 'position' and 'transformOrigin' in your code
      elem.style.position = "absolute";
      elem.style.transformOrigin = "100% 0%";
      if (index % 2 !== 0) {
        elem.style.transformOrigin = "0% 0%";
      }

      //* init value
      let y0 = elem.clientHeight / 2;
      let x0 = X0_LEFT;
      if (index % 2 !== 0) {
        x0 = X0_RIGHT;
      }
      let z0 = -index * DISTANCE + START_Z;
      return {
        element: elem,
        y0,
        x0,
        z0,
      };
    });

  let currentZ = 0;

  const update = zMoved => {
    let prevZ = currentZ;
    currentZ = zMoved;
    dataList.forEach((dataObj, index) => {
      let z = dataObj.z0 + zMoved;
      if (A - z <= 0) {
        dataObj.element.style.top = "100vh";
        return;
      }

      let k = A / (A - z);
      let x = (A * dataObj.x0) / (A - z);

      let y = (z * (B - dataObj.y0)) / (A - z) - dataObj.y0;

      //! don't change properties are seted below in your code (top, left, right, scale)
      dataObj.element.style.top = y + "px";
      if (index % 2 === 0) {
        dataObj.element.style.right = -x + "px";
      } else {
        dataObj.element.style.left = x + "px";
      }
      dataObj.element.style.transform = `scale(${k * SCALE_ORIGIN})`;

      if (onUpdate) {
        onUpdate({
          element: dataObj.element,
          x,
          y,
          z,
          deltaZ: currentZ - prevZ,
        });
      }
    });
  };
  update(0);
  return update;
};
