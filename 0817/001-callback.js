// 콜백함수;
// 콜백함수란 함수에 매개변수로 전달되어 실행되는 함수를 의미합니다.
// 함수안에 함수를 넣어 인자로 전달할 수 있다
function sum(x, y, 콜백함수) {
  콜백함수(x + y);
  return x + y;
}
function documentWriter(s) {
  document.write("콜백함수", s);
}

sum(10, 20, documentWriter);

// map 의 사용을 통한 콜백함수
let arr = [1, 2, 3, 4, 5];
arr.map(제곱);

function 제곱(x) {
  return x ** 2;
}

arr.map((x) => x ** 2);

//  forEach의 사용을 통한 콜백함수
let arr = [1, 2, 3, 4, 5];
arr.forEach((e) => console.log(e ** 2));

function 제곱(x) {
  console.log(x ** 2);
}
