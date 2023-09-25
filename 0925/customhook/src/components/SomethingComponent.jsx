import React, { useState } from "react";
import useInput from "../Hooks/useInput";
function SomethingComponent() {
  const [value, onChange] = useInput("멍멍이!");

  return (
    <>
      <input type="text" onChange={onChange} />
      <div>{value}가 강해졌다 돌격해!</div>
    </>
  );
}

export default SomethingComponent;
