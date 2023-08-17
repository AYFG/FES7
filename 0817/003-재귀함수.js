// ## 재귀함수

// 재귀함수(Recursive function)는 함수가 자기 자신을 호출하는 것을 말합니다.

// 1. 재귀함수는 무한히 반복될 수 있기 때문에 보통 재귀 호출이 멈출 수 있는 종료조건을 체크해야합니다.
// 2. 반복문으로 구현할 수 있는 것은 재귀함수로 모두 구현 가능합니다. 그 반대로 재귀함수로 구현 가능한 것은 반복문으로 대부분 구현(복잡도를 증가시키면 모두) 가능합니다.

// 팩토리얼은 1부터 n까지의 곱을 구하는 함수를 의미합니다.
function factorial(n) {
  if (n <= 1) {
    return n;
  }
  return n * factorial(n - 1);
}
// n = 5

// factorial(5) == 5 * factorial(4) == 5 * 24
// factorial(4) == 4 * factorial(3) == 4 * 6
// factorial(3) == 3 * factorial(2) == 3 * 2
// factorial(2) == 2 * factorial(1) == 2 * 1
// factorial(1) == 1

// sigma는 1부터 n까지의 합을 계산하는 함수를 의미합니다.
function sigma(n) {
  if (n <= 1) {
    return n;
  }
  return n + sigma(n - 1);
}

// sigma(5) == 5 + sigma(4) == 5 + 10
// sigma(4) == 4 + sigma(3) == 4 + 6
// sigma(3) == 3 + sigma(2) == 3 + 3
// sigma(2) == 2 + sigma(1) == 2 + 1
// sigma(1) == 1

// 문자를 거꾸로 만들어주는 재귀함수
function reverse(text) {
  if (text.length <= 1) {
    return text;
  }
  return reverse(text.slice(1)) + text[0];
}

// reverse('hello') == reverse('ello') + 'h' == 'olle' + 'h'
// reverse('ello') == reverse('llo') + 'e' == 'oll' + 'e'
// reverse('llo') == reverse('lo') + 'l' == 'ol' + 'l'
// reverse('lo') == reverse('o') + 'l' == 'o' + 'l'
// reverse('o') == 'o'

///////////
// 문제 재귀 함수를 사용하여 숫자를 원소로하는 배열의 모든 요소를 합하는 함수를 만들어 보세요! ex) [1,2,3]
let arr = [1, 2, 3, 4];
function addElements(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + addElements(arr.slice(1));
}
addElements([1, 2, 3, 4]);
// 1 + 2 + 3 + 4 + addElements([])
