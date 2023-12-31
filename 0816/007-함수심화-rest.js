// 함수의 매개변수에 `...`를 붙이면 사용자가 제공한 모든 매개변수를 배열안에 넣도록 지정합니다. 이를 `나머지(rest) 매개변수`라 합니다.

// rest 문법을 이용할 때 주의해야할 점은

// 1. 매개변수에는 "하나"의 `rest`만 존재할 수 있습니다.
// 2. `rest`는 반드시 함수 정의의 "마지막 매개변수"여야 합니다.

// 아래 코드에서는 rest 문법을 이용해 매개변수를 선언했습니다.

function 함수2(a, b, ...c) {
  // function 함수2(a, b, c) { // 출력 : "hello" "world" "10"
  console.log(c);
  return Math.max(...c);
}

함수2("hello", "world", 10, 20, 30, 40); //rest 문법을 사용하면 몇 개의 인자를 더 사용하든 상관없다

function 함수2([a, b], ...c) {
  //매 번 받아야하는 인자의 개수를 신경쓰지 않아도 된다.
  console.log(a);
  console.log(b);
  console.log(c);
}

함수2([1, 2], 10, 20, 30, 40);
// rest 문법이 spread 문법과 비슷해보여요!
// 맞습니다. 두 문법은 똑같이 생겼는데요! 사용하는 위치에 따라 spread와 rest로 나누어집니다.
// 자바스크립트 엔진은 일반적인 객체나 배열안에서 사용되는 … 은 spread, 함수의 마지막 매개변수에 사용되는 … 은 rest 문법으로 인식합니다.

/////////////////////////////////////////////////////////////////
// ### 매개변수의 초기화

// 함수의 매개변수는 선언만 할 수도 있지만, 선언과 동시에 값을 할당하여 초기화도 가능합니다.

// 매개변수의 초기화는 기본적으로 왼쪽에서 오른쪽의 순서로 설정됩니다
function 함수3(a = 10, b = 20, c = 30) {
  return a + b + c;
}

console.log(함수3());
console.log(함수3(100));
console.log(함수3(100, 200));
console.log(함수3(100, 200, 300));

console.log(함수3((c = 1000))); // 1030이 되어야 하는거 아니에요?
// 1050

console.log(함수3((c = 1000), (a = 2000))); // 3020이 되어야 하는거 아니에요?
// 3030

// 값이 순서대로 들어갔습니다.
