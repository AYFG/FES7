import React, { useEffect, useState } from "react";

export default function useMouseLocation(initValue) {
  const [mouseLocation, setMouseLocation] = useState(
    initValue || { x: null, y: null }
  );
  // DOM을 이용하여 화면상의 마우스 좌표를 얻어내고 mouseLocation에 업데이트 해보기. 힌트 : 이벤트가 발생했을때 마우스 좌표를 얻어내라 = mousemove
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      // e.x,e.y (clientX,Y의 별명 기능은 같음)
      setMouseLocation({ x: e.clientX, y: e.clientY });
    });
  }, []);

  return mouseLocation;
}
