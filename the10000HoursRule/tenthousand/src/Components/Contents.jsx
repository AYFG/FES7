import React, { useState } from "react";
import "./Contents.css";

export default function Contents() {
  const [data, setData] = useState("");
  const [training, setTraining] = useState("");
  const [changeText, setChangeText] = useState("프로그래머");
  const [changeNumber, setChangeNumber] = useState(true);
  // const [changeText, setChangeText] = useState({
  //   data_name: "",
  //   job_num: "",
  // });
  // const [obj, setObj] = useState({
  //   job: "",
  //   num: "",
  // });

  // const onClick = () => {
  //   setChangeText({ ...changeText, data_name: obj.job });
  //   setChangeText({ ...changeText, job_num: obj.num });
  // };
  const onClick = () => {
    setChangeText(data);
    setChangeNumber(training);
  };

  return (
    <div className="Contents_Wrapper">
      {/* <Contents_h1 />
      <Contents_input
        data={data}
        setData={setData}
        training={training}
        setTraining={setTraining}
      />
      <Contents_Btn setData={setData} />
      <Contents_result changeText={changeText} />
      <Contents_GoGo_SNS /> */}
      <div className="Contents_h1">
        <span className="Contents_emphasis">1만 시간의 법칙</span>
        <br />
        <span>어떤 분야의 전문가가 되기 위해서는</span>
        <br />
        최소한 1만 시간의 훈련이 필요하다는 법칙이다.
      </div>
      <div className="Contents_group_inner1">
        <span>나는</span>
        <input
          type="text"
          placeholder="예)프로그래밍"
          className="Contents_Input"
          onChange={(e) => {
            // setData(e.target.value);
            setData(e.target.value);
          }}
        />
        <span>전문가가 될 것이다.</span>
      </div>
      <div className="Contents_group_inner2">
        <br />
        <span>그래서 앞으로 매일 하루에</span>
        <div>
          <input
            type="number"
            placeholder="예)5시간"
            className="Contents_Input"
            // value={training}
            onChange={(e) => {
              // setTraining(e.target.value);
              setTraining(e.target.value);
            }}
          />
          <span>시간씩 훈련할 것이다.</span>
        </div>
      </div>
      <div className="Contents_group">
        <button className="Contents_Btn" onClick={onClick}>
          나는 며칠 동안 훈련을 해야 1만 시간이 될까?
        </button>
        <div className="Contents_result">
          <p>
            당신은 <span className="result_emphasis">{changeText}</span>
            전문가가 되기 위해서
          </p>
          <p>
            대략
            <span className="result_emphasis">
              {changeNumber > 24
                ? alert("24이하의 숫자를 입력하세요.")
                : changeNumber <= 0
                ? alert("0 이상의 숫자를 입력하세요")
                : parseInt(10000 / changeNumber)}
            </span>
            일 이상 훈련하셔야 합니다! :)
          </p>
        </div>
      </div>
    </div>
  );
}
