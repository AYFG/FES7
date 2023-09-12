function App() {
  return <Hello name="gary" />;
}

function Hello(props) {
  const name = props.name;
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //1~10호를 만들 것입니다.
  // [{
  //   id : 1,
  //   name: "licat"
  // },
  // {
  //   id : 2,
  //   name: "licat"
  // },
  // {
  //   id : 3,
  //   name: "licat"
  // }]

  // list map을 이용하여 h1 태그들의 리스트를 만듭니다.
  //h1 태그 옆에 key값 i를 넣어줘서 오류는 안나지만 num 배열안에 중복이 있게되면 오류가 나기 때문에 옳은 방법이 아니다
  // index를 넣어주면 에러를 지우지만 소방수일뿐 (의미없는 키)
  // 값을 지웠을 때 키값이 없으면 지우고 생성 ,키값이 있으면 위치를 옮겨줌

  const numComponentsArray = num.map((i, index) => (
    // <h1 key={i}>
    <h1 key={index}>
      안녕, {name} {i}호
    </h1>
  ));

  // forEach 로 리스트 작성해보기
  // const numComponentsArray = [];
  // num.forEach((i, index) => {
  //   numComponentsArray.push(<h1 key={index}>안녕, {name} {i}호</h1>);
  // })

  return <div>{numComponentsArray}</div>;
}

export default App;

////////////////////////////////////////////////

// function One() {
//   return <p>one</p>;
// }

// function Two() {
//   return <p>two</p>;
// }

// function Three() {
//   return <p>three</p>;
// }

// function App() {
//   return (
//     <div>
//       {[<One />, <Two />, <Three />, [<One />, <Two />, [<One />, <Two />]]]}
//     </div>
//   );
// }

// export default App;
