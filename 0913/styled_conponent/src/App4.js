import React from "react";
import styled from "styled-components";

const ContentOne = styled.div`
  margin: 40px;
`;

const ContentTwo = styled.div`
  color: red;
`;

//컴포넌트는 하나만 받을 수 있다
const ContentThree = styled(ContentTwo)`
  border: 1px solid black;
`;
//내가 만든 컴포넌트
function MyComponent(props) {
  return <div className={props.className}>이것은 새로운 컴포넌트</div>;
}
//내가 만든 컴포넌트 확장하기
const MyComponentTwo = styled(MyComponent)`
  background-color: tomato;
`;

function App4() {
  return (
    <div>
      <ContentOne>hello world</ContentOne>
      <ContentTwo>hello world</ContentTwo>
      <ContentThree>hello world</ContentThree>
      <MyComponentTwo></MyComponentTwo>
    </div>
  );
}

export default App4;
