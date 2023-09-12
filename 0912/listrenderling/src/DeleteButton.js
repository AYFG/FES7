import React, { useState } from "react";
import Counter from "./Counter";
export default function DeleteButton() {
  const [data, setData] = useState([
    {
      title: "개발자 무릎 담요",
      price: 17500,
      id: 101,
    },
    {
      title: "Hack Your Life 개발자 노트북 파우치",
      price: 29000,
      id: 102,
    },
    {
      title: "우당탕탕 라이켓의 실험실 스티커북",
      price: 29000,
      id: 103,
    },
    {
      title: "버그를 Java라 버그잡는 개리씨 키링",
      price: 29000,
      id: 104,
    },
  ]);
  // function deleteFunc(id) {
  //   setData(
  //     data.filter((item) => {
  //       return item.id !== id;
  //     })
  //   );
  // }

  // setState 함수가 작동할 때 인자로 콜백함수를 넣고 변경할 인자를 넣는 방식을 함수형 업데이트라고 한다. 함수형 업데이트의 장점은 콜백함수의 인자에 이전의 상태가 들어가는 것을 리액트가 보장한다.
  function deleteFunc(id) {
    setData((prevData) => {
      return prevData.filter((item) => {
        return item.id !== id;
      });
    });
  }
  // setData의 값이 13으로 들어가는 것을 보장할 수 없다
  // function deleteFunc(id) {
  //   setData(13);
  // }
  // 삭제버튼 구현 고민하기 실습
  // 힌트 : 삭제를 한다는 것은 화면이 업데이트 되야한다
  // useState이용 item.id 와 일치하지 않는 객체만 리턴
  return (
    <ul>
      {data.map((item) => {
        return (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <strong>{item.price}</strong>
            <button onClick={() => deleteFunc(item.id)}>삭제</button>
            {/* JS로 DOM에 직접 접근하여 삭제하는 방법 (버츄얼돔을 이용하지 않아서 리액트에서는 권장하지 않는 방법) 돔 직접 접근 제어는 컴포넌트 관리의 일관성에 위배된다.*/}
            {/* <button onClick={(e) => e.target.closest("li").remove()}>
              삭제
            </button> */}
          </li>
        );
      })}
      <Counter />
    </ul>
  );
}
