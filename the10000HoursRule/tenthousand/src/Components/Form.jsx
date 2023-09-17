import React from "react";
import "./Form.css";
import Licat from "../img/Licat.png";

function Traning() {
  return (
    <button className="Form_GoGo_btn">
      종료하고 진짜 훈련하러 가기 GO!GO!
    </button>
  );
}

function Fighting() {
  return (
    <div>
      <p className="Form_h1">
        화이팅!!<span>♥♥♥</span>
      </p>
      <p className="Form_h2">당신의 꿈을 응원합니다!</p>
      <img src={Licat} alt="라이캣 이미지" className="Form_Licat" />
    </div>
  );
}

export default function Form() {
  return (
    <div className="Form-backdrop">
      <div className="Form-modal">
        <Fighting />
        <Traning />
      </div>
    </div>
  );
}
