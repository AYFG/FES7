import React, { useState } from "react";
import useInput from "../Hooks/useInput";
function InputComponent() {
  const [value, onChange] = useInput(""); // 받아오는 방식이 배열이므로 onChange가 아닌 다른 이름도 상관 없다 , 객체는 같은 이름이어야만 한다
  // 똑같이 사용되는 Hook의 양이 많다면 재사용하기 위해 hook 분리하여 사용

  return (
    <>
      <input type="text" onChange={onChange} />
      <div>{value}</div>
    </>
  );
}

export default InputComponent;
