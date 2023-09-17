import React, { useState } from "react";
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

function Contents_input_pro({ data, setData }) {
  // 인풋 밸류 받아오기
  let onChange = (e) => {
    // console.log(e.target.value);
    setData(e.target.value);
  };
  return (
    <div className="Contents_group_inner1">
      <span>나는</span>
      <input
        type="text"
        placeholder="예)프로그래밍"
        className="Contents_Input"
        value={data}
        onChange={onChange}
      />
      <span>전문가가 될 것이다.</span>
    </div>
  );
}
function Contents_input_time({ training, setTraining }) {
  let onChange2 = (e) => {
    // console.log(e.target.value);
    setTraining(e.target.value);
  };
  return (
    <div className="Contents_group_inner2">
      <br />
      <span>그래서 앞으로 매일 하루에</span>
      <div>
        <input
          type="number"
          placeholder="예)5시간"
          className="Contents_Input"
          value={training}
          onChange={onChange2}
        />
        <span>시간씩 훈련할 것이다.</span>
      </div>
    </div>
  );
}
function Contents_input({ data, setData, training, setTraining }) {
  return (
    <div className="Contents_group">
      <Contents_input_pro data={data} setData={setData} />
      <Contents_input_time training={training} setTraining={setTraining} />
    </div>
  );
}
function Contents_Btn({ onClick, training }) {
  return (
    <button className="Contents_Btn" onClick={onClick}>
      나는 며칠 동안 훈련을 해야 1만 시간이 될까?
    </button>
  );
}
function Contents_result({ changeText, setChangeText, training }) {
  let TrainingEvent = () => {
    if (training > 24) {
      return alert("24이하의 숫자를 입력해주세요.");
    } else if (training < 0) {
      return alert("0이상의 숫자를 입력해주세요.");
    } else {
      return 10000 / training;
    }
  };
  return (
    <div className="Contents_result">
      <p>
        당신은 <span className="result_emphasis">{changeText}</span> 전문가가
        되기 위해서
      </p>
      <p>
        대략 <span className="result_emphasis">{TrainingEvent()}</span> 일 이상
        훈련하셔야 합니다! :)
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
  const [data, setData] = useState("");
  const [changeText, setChangeText] = useState("프로그래머");
  const [training, setTraining] = useState(1);
  const btnEvent = () => {
    setChangeText(data);
  };
  return (
    <div className="Contents_Wrapper">
      <Contents_h1 />
      <Contents_input
        data={data}
        setData={setData}
        training={training}
        setTraining={setTraining}
      />
      <Contents_Btn onClick={btnEvent} />
      <Contents_result changeText={changeText} />
      <Contents_GoGo_SNS />
    </div>
  );
}
