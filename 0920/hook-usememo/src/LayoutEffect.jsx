// import React, { useState, useEffect, useLayoutEffect } from "react";

// export default function LayoutEffect() {
//   const [num, setNum] = useState(0);

//   useEffect(() => {
//     for (let i = 0; i < 1000; i++) {}
//     setNum((prev) => prev + 1); //사실은 엄청 오래걸리고 어려운 로직
//   }, []);

//   return <h1>{num}</h1>;

//   // 이는 useEffect는 비동기적으로 동작하지만, useLayoutEffect는 동기적으로 동작하기 때문입니다. 따라서 useLayoutEffect가 오래걸리는 작업이라면 화면도 늦게 렌더링됩니다.

//   // useLayoutEffect(() => {
//   //   for (let i = 0; i < 1000; i++) {}
//   //   setNum((prev) => prev + 1); //사실은 엄청 오래걸리고 어려운 로직
//   // }, []);

//   // return <h1>{num}</h1>;
// }

///////////////////////////////////////////////////////////////////////////////

import { useState, useEffect, useLayoutEffect } from "react";

function LayoutEffect() {
  const [value, setValue] = useState(100);

  useEffect(() => {
    if (value >= 1000) {
      setValue(300);
    }
  }, [value]);

  return (
    <div>
      {/* <div style={{ width: value, height: value, backgroundColor: 'blue', transition: '1s all' }}></div> */}
      <div
        // 깜빡거리는 이유 width가 1000이었다가 update가 끝나면 useEffect가 실행되어 if문에서 value가 300으로 변하는 과정에서 잔상처럼 보인다.(useLayoutEffect를 사용하면 깜빡임은 없음)
        style={{ width: value, height: value, backgroundColor: "blue" }}
      ></div>
      <button
        onClick={() => {
          setValue(1000);
        }}
      >
        커져랏!
      </button>
      <button
        onClick={() => {
          setValue(200);
        }}
      >
        작아져랏!
      </button>
    </div>
  );
}
export default LayoutEffect;
