import React from "react";
import "./Footer.css";
import WenivLogo from "../img/weniv.svg";

function Footer_copyright() {
  return (
    <div>
      <p className="Footer_copyright">
        ※ 본 서비스 내 이미지 및 콘텐츠의 저작권은 주식회사 WeNiv에 있습니다.
        <br />
        수정 및 재배포, 무단 도용 시 법적인 문제가 발생할 수 있습니다.
      </p>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="Footer_wrapper">
      <img src={WenivLogo} alt="" className="Footer_Logo" />
      <Footer_copyright />
    </div>
  );
}
