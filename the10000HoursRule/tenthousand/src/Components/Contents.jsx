import React from "react";
import "./Contents.css";

function Contents_h1() {
  return (
    <div className="Contents_h1">
      <span className="Contents_emphasis">1만 시간의 법칙</span>
      <br />
      <span>어떤 분야의 전문가가 되기 위해서는</span>
      <br />
      최소한 1만 시간의 훈련이 필요하다는 법칙이다.
    </div>
  );
}

function Contents_input() {
  return (
    <div className="Contents_group">
      <div className="Contents_group_inner1">
        <span>나는</span>
        <input
          type="text"
          placeholder="예)프로그래밍"
          className="Contents_Input"
        />
        <span>전문가가 될 것이다.</span>
      </div>
      <div className="Contents_group_inner2">
        <br />
        <span>그래서 앞으로 매일 하루에</span>
        <div>
          <input
            type="text"
            placeholder="예)5시간"
            className="Contents_Input"
          />
          <span>시간씩 훈련할 것이다.</span>
        </div>
      </div>
    </div>
  );
}

function Contents_Btn() {
  return (
    <button className="Contents_Btn">
      나는 며칠 동안 훈련을 해야 1만 시간이 될까?
    </button>
  );
}
function Contents_result() {
  return (
    <div className="Contents_result">
      <p>
        당신은 <span className="result_emphasis">프로그래밍</span> 전문가가 되기
        위해서
      </p>
      <p>
        대략 <span className="result_emphasis">5110</span> 일 이상 훈련하셔야
        합니다! :)
      </p>
    </div>
  );
}
function Contents_GoGo_SNS() {
  return (
    <div className="Contents_GoGo_SNS">
      <button type="button" className="Contents_GoGo">
        훈련하러 가기 GO!GO!
      </button>
      <button type="button" className="Contents_SNS">
        공유하기
      </button>
    </div>
  );
}
export default function Contents() {
  return (
    <div className="Contents_Wrapper">
      <Contents_h1 />
      <Contents_input />
      <Contents_Btn />
      <Contents_result />
      <Contents_GoGo_SNS />
    </div>
  );
}
