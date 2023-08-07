// 에러가 없는 코드
jsonData.sort((a, b) => (a[key] > b[key] ? -1 : a[key] < b[key] ? 1 : 0));

const data = ["a", "z", "b", "e"];
data.sort();

// 사전식 정렬이어서 아래와 같은 값은 정렬이 되지 않는다.
const data = ["1", "11", "111", "2", "22"];
data.sort();

// 지금 이해할 코드는 아니고 실무 DB로 가지고 있는 코드
data.sort((a, b) => (a > b ? -1 : a < b ? 1 : 0));
data.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));

let test = [13, 9, 10];
// 자주 사용하는 코드
const data = [1, 11, 2, 111, 22];
data.sort((a, b) => a - b); //오름차순
data.sort((a, b) => b - a); //내림차순

// (a,b) => (a-b)가 콜백함수 입니다.
// a-b 값이 0보다 작은 경우 a 를 b보다 낮은 색인으로 정렬한다 . 즉 , a가 먼저온다.
// a-b값이 0보다 큰 경우 , b를 a보다 낮은 인덱스로 소트한다.즉 , b가 먼저 온다.

//원리
let test = [13, 9, 10, 2];
test.sort((a, b) => {
  console.log(a, b);
});
// 출력해보면 a,b의 값이 순차적으로 들어갈 것 같지만 그렇지 않다.
// 9 13
// 10 9
// 2 10

test.sort((a, b) => {
  console.log(a, b);
  console.log(a - b); // 0보다 작은 경우 a를 b보다 낮은 색인으로 정렬한다. 즉 , a가 먼저 온다.
});

let test = [13, 9, 10, 2];
test.sort((a, b) => {
  return a - b; // 작은 값이 앞으로 간다 => 오름차순
});
