import React from "react";
import "./HeaderLogo.css";
import Logo from "../img/Logo.png";
import ClockSVG from "../img/clock.svg";

function Logo_h1() {
  return (
    <h1 className="Logo_h1">"연습은 어제의 당신보다 당신을 더 낫게 만든다."</h1>
  );
}
export default function HeaderLogo() {
  return (
    <div>
      <div className="Logo">
        <div className="Logo_BackImg">
          <img src={Logo} alt="1만 시간의 법칙" className="Logo_text" />
        </div>
        <Logo_h1 />
      </div>
    </div>
  );
}
