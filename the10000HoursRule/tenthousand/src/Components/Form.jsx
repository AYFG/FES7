import React from "react";
import "./Form.css";

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
      <p className="Form_h1">화이팅!!♥♥♥</p>
      <p className="Form_h2">당신의 꿈을 응원합니다!</p>
      <img src="../img/Licat.png" alt="라이캣 이미지" className="Form_Licat" />
    </div>
  );
}

export default function Form() {
  return (
    <div>
      <Fighting />
      <Traning />
    </div>
  );
}
