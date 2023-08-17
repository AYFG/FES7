// 즉시 실행함수

// 1. 즉시 실행하고 외부에서 컨트롤 할 필요가 없는 함수
// 2. function scope를 이용하기 때문에  메모리 효율적입니다.
(function () {
  console.log("hello");
})();

// 익명 즉시 실행 함수
(function () {
  let a = 1;
  let b = 2;
  return a + b;
})();

// 기명 즉시 실행 함수
(function foo() {
  let a = 3;
  let b = 5;
  return a * b;
})();

foo(); // ReferenceError: foo is not defined
// 어차피 실행하지 못해서 의미가 없음.
// 메모리 효율적으로 관리하기 위해 바로 실행해야 하는 것들을 즉시 실행함수로 관리
