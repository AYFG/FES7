import { createGlobalStyle } from "styled-components"; // 불러오기
import Example from "./Components/Example";
// 태그드 템플릿 리터럴을 사용하여 함수를 사용하는 기법

const GlobalStyle = createGlobalStyle` // 전역스타일 백틱으로 열고 닫기
span {
  color: red;
  font-size: 12px;
}
.box{
  background-color:blue
}
`;

// const name = "이호준";
// const age = 10;

// function 인사(문구, 이름, 나이) {
//   // console.log(문구)
//   console.log(문구, 이름, 나이);
//   return `${문구[0]}${이름}${문구[1]}${나이 + 나이}${문구[2]}`;
// }

//한글이라 PASCALCASSE가 안되어 여기서 출력은 안되지만 인사옆에 괄호로 여는 것이 아닌 백틱을 여는 것을 보면 되겠다.
// const 인사문구 = 인사`이름은 ${name}이고 나이는 ${age + age}입니다.`;

// console.log(인사문구);

function App() {
  return (
    <>
      <GlobalStyle />
      <h1>hello world 1</h1>
      <span>hello world 2</span>
      <Example />
    </>
  );
}

export default App;
