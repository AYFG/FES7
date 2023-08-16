// 함수의 destructuring
// 함수의 디스트럭쳐링은 함수의 매개변수를 분해하여 변수에 할당하는 방법

function myFunc([a, b]) {
  console.log(a);
  console.log(b);
}

const arr = [1, 2];

myFunc(arr);
// myFunc라는 함수를 선언하고, 디스트럭쳐링을 사용하여 함수의 매개변수를 변수 a, b에 할당합니다. 이후 전달인자로 [1, 2] 배열을 전달하여 함수를 호출함
