// Scope
// 스코프란 변수의 접근성과 생존 기간을 제어하는 ‘생존 범위’를 의미합니다.
const func1 = function () {
  var a = 1;
  var b = 2;

  console.log(a + b);
};

var a = 20;
func1();

// 위의 코드에서는 `var` 키워드를 이용해서 전역변수를 선언해 봤습니다.

// 변수 a는 어디서든 접근 가능한 전역 변수임에도 불구하고 함수안의 a 와 함수 밖의 a는 완전히 별개의 변수임을 알 수 있습니다.

// 그리고 함수안의 a변수는 함수가 종료면 함스 스코프가 가비지 컬랙션으로 수거되기 때문에, 메모리상에서 자동으로 제거됩니다.

// 이렇듯 스코프는 이름이 충돌하는 문제를 덜어주고, 자동으로 메모리를 관리합니다.

// **스코프의 종류**

// 1. 전역 스코프
//     - 스크립트의 어디서든 접근이 가능하기 때문에 사용이 쉽습니다.
//     - 타인과의 협업, 라이브러리 사용시 충돌의 가능성이 있습니다.
// 2. 함수 스코프
//     - 함수 내부에서 정의된 변수와 매개변수는 함수 외부에서 접근할 수 없습니다.
//     - 함수 내부에서 정의된 변수라면 함수의 어느 부분에서도 접근 할 수 있습니다.
// 3. 블록 스코프 (ES6)
//     - 중괄호 안에서만 접근 가능합니다.
//     - 블록 내부에 정의된 변수는 블록의 실행이 끝나면 해제됩니다.

// 어떻게든 오류를 내지 않기위해 값을 찾아내려는 것 같다
