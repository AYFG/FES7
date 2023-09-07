import "./App.css";

function App() {
  // JSX 속성 이름은 카멜 케이스 대문자 구분을 따른다.
  // 문자를 제외한 속성은 중괄호를 써야한다. (문자열은 생략 가능)
  // true값을 갖는 속성은 속성 이름만으로 표현할 수 있다.만약 false라면
  // class는 className
  // 인라인 스타일은 객체 형태로 사용한다.
  // jsx에선 하이픈 - 을 쓰지 않는다
  // const name = "라이캣";
  // const someStyle = { backgroundColor: "black", color: "white" };
  // const time = new Date();
  // const year = time.getFullYear();
  // const month = time.getMonth();
  // const day = time.getDate();
  // const hour = time.getHours();
  // const minute = time.getMinutes();
  // const sec = time.getSeconds();

  // function 함수() {
  //   return "함수";
  // }

  return (
    <div className="App" tabIndex="">
      {/* 주석 사용법
      <h1>
        hello {name}
        {함수() ? "함수" : "JSX"}!
      </h1>
      <h1>hello {[1, 2, 3].map((x) => x ** 2)}</h1>
      <h1 className="newClass">hello react!2</h1>
      <input type="text" disabled={true} style={{ backgroundColor: "blue" }} />
      <input type="text" disabled={true} style={someStyle} /> */}
      {/* <h1 style={someStyle}>안녕,{name}! 1호</h1>
      <h1>안녕,{name} 2호!</h1>
      <p style={someStyle}>.</p>
      <div style={someStyle}>
        <h1 style={{ color: "red" }}>년: {year}</h1>
        <h1>
          월/일: {month + 1}/{day}
        </h1>
        <h1>
          시간: {hour}시 {minute}분 {sec}초
        </h1>
      </div> */}
    </div>
  );
}

export default App;
