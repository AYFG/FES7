// function HelloProps(props) {
//   console.log(props);

//   return (
//     <>
//       <p>
//         my name is {props.name} and age is {props.age}
//       </p>
//       <strong>you are {props.someFunc()}</strong>
//       <p>this is someArr {[...props.someArr]}</p>
//       <p>this is someObj {props.someObj.one}</p>
//       {props.someJSX}
//     </>
//   );
// }

// function Hello(props) {
//   console.log(props);
//   const name = "라이캣!";
//   const someStyle = { backgroundColor: "black", color: "white" };

//   return (
//     <div>
//       <h1 style={someStyle}>안녕, {props.name} 1호</h1>
//       {/* 이렇게하면 나옵니다. */}
//       <h1>안녕, 라이캣 2호!</h1>
//       <div className="newClass" /> {/* class대신 className=""로 진행! */}
//     </div>
//   );
// }

// function Time(props) {
//   const today = new Date();
//   const year = today.getFullYear();
//   const month = today.getMonth() + 1;
//   const date = today.getDate();
//   const hour = today.getHours();
//   const min = today.getMinutes();
//   const sec = today.getSeconds();

//   return (
//     <div style={{ backgroundColor: "black", color: "white" }}>
//       <h1 style={{ color: "red" }}>년 : {year}</h1>
//       <h1>
//         월/일 : {month}/{date}
//       </h1>
//       <h1>
//         시간 : {hour}시 {min}분 {sec}초
//       </h1>
//     </div>
//   );
// }

// import Hello from "./Components/Hello";
// import HelloProps from "./Components/HelloProps";
// import Time from "./Components/Time";
// function App() {
//   return (
//     <div>
//       <Hello name="gary" />
//       <Time />
//       <HelloProps
//         name="흑구"
//         age={15}
//         someFunc={() => "awesome!!!"}
//         someJSX={<img src="https://picsum.photos/id/237/200/300" />}
//         someArr={[1, 2, 3, 4]}
//         someObj={{ one: 1 }}
//       />
//     </div>
//   );
// }
// import Hello from "./Components/Hello";
// import Time from "./Components/Time";
// import Resume from "./Components/Resume";

// function App() {
//   return (
//     <div>
//       <Hello name="개리" />
//       <Time />
//       <Resume
//         hello="안녕하세요"
//         name="개리"
//         hobby="게임"
//         food="고기"
//         color="blue"
//       />
//     </div>
//   );
// }

// import ColorText from "./Components/ColorText";
// function App() {
//   return (
//     <div>
//       <ColorText color="red" />
//       <ColorText color="green" />
//       <ColorText color="blue" />
//     </div>
//   );
// }

// import Resume from "./Components/Resume";
// import Time from "./Components/Time";
// import Hello from "./Components/Hello";
// import test, { test2 } from "./Components/test";
// // 모듈 문법의 특징 (컴포넌트에서 내가 원하는 function만 꺼내올 수 있다)
// // import test, { test2 } from "./Components/test";
// function App() {
//   test();
//   test2();
//   return (
//     <div>
//       <Hello name="개리" />
//       <Time />
//       <Resume
//         hello="안녕하세요"
//         name="개리"
//         hobby="게임"
//         food="고기"
//         color="blue"
//       />
//     </div>
//   );
// }

// export default App;
