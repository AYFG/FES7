import React, { useState } from "react";

export default function AnimalList() {
  const [data, setData] = useState([
    { name: "벨라", species: "고양이", age: "5", id: 111 },
    { name: "루시", species: "강아지", age: "3", id: 112 },
    { name: "데이지", species: "토끼", age: "2", id: 113 },
    { name: "몰리", species: "고양이", age: "1", id: 114 },
    { name: "매기", species: "강아지", age: "6", id: 115 },
  ]);
  function updateList() {
    setData();
  }
  return (
    <div>
      <h1>애완동물 리스트</h1>
      <form>
        <p>새로운 애완동물을 추가하세요</p>
        <input placeholder="이름"></input>
        <input placeholder="species"></input>
        <input placeholder="나이 "></input>
        <button
          onClick={() => {
            updateList();
          }}
        >
          추가하기
        </button>
      </form>
      <ul>
        {data.map((data) => {
          return (
            <li>
              {data.name}는 {data.species}입니다. 그리고 {data.age}살 입니다.
            </li>
          );
        })}
      </ul>
    </div>
  );
}
