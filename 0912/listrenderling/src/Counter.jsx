import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount((prev) => {
      return prev + 1;
    });
    setCount((prev) => {
      return prev + 1;
    });
    setCount((prev) => {
      return prev + 1;
    });
    setCount((prev) => {
      return prev + 1;
    });
    //여러 개를 적용시키기 위한 콜백함수

    /////////////////////////
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // 추가되도 1씩 증가된다 왜일까?
    // setState 함수가 실행되면 state가 변경된다. state가 변경되면 컴포넌트가 다시 렌더링 되는데 setState 함수는 비동기적으로 실행된다. 그 이유는 상태가 언제 바뀔지 모르기 때문이다.그래서 기다렸다가 맨 마지막에 호출된 setState 함수만 실행시킨다.
    // 이러한 현상이 발생하는 이유은 업데이트는 비용이 큰 작업이고 , state함수는 비동기적으로 동작하기 때문이다 .
  }
  function decrement() {
    setCount(count - 1);
  }
  return (
    <div>
      <h2>Count의 값은 : {count}</h2>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
}
