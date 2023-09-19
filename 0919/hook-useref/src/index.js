import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App from "./App";
import App2 from "./App2";
import App3 from "./App3";

const container = document.getElementById("root");
const root = createRoot(container);

{
  /* <React.StrictMode> 개발환경 배포할때는 없어짐 콘솔 두번 찍히는 이유는 

값을 넘겼을 때 항상 같은 결과를 출력(렌더링)해야한다*/
}
// root.render(
//   <React.StrictMode>
//     <App3 />
//   </React.StrictMode>
// );
root.render(<App2 />);
