import React, { createContext } from "react";

// Context API

// provider 제공(Context.Provider는 컴포넌트 계층 구조에서 Context 객체를 전달하는 역할)
// (Context.Consumer는 Context를 구독하는 컴포넌트입니다. Consumer를 사용하여 Provider에서 전달받은 Context 값을 사용할 수 있습니다.)
// props drilling이 두 단계를 초과하지 않는다면 사용하지 말자 "Context는 전역 공간을 사용"
// 전역공간 사용할 경우 : API 주소 , 다크 모드 ,유저 정보 등

// 초기값
const UserInfo = createContext({ name: "gary", id: "garyIsFree" });

// Context를 비워놓고 Provider로 제공해도 문제없다
// const UserInfo = createContext();
const App = () => {
  return (
    <UserInfo.Provider value={{ name: "Licat", id: "LicatIsNotFree" }}>
      <HelloLicat />
    </UserInfo.Provider>
  );
};

const HelloLicat = () => {
  return (
    <UserInfo.Consumer>
      {(value) => (
        <div>
          <h2>{value.name}</h2>
          <strong>{value.id}</strong>
          <HelloLicatTwo />
        </div>
      )}
    </UserInfo.Consumer>
  );
};

const HelloLicatTwo = () => {
  return (
    <UserInfo.Consumer>
      {(value) => (
        <div>
          <h2>Two :{value.name}</h2>
          <strong>Two : {value.id}</strong>
        </div>
      )}
    </UserInfo.Consumer>
  );
};

export default App;
