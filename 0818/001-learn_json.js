// JSON 이란?

// JSON(JavaScript Object Notation)은 자바스크립트 객체 형식으로 데이터를 표현하는 문자 기반의 표준 포맷입니다. 다른 방식에 비해 가볍고 자바스크립트와 호환성이 높아 널리 사용됩니다. 쉽게 말해 텍스트로 표현된 정보의 덩어리라고 생각하시면 됩니다.

// JSON 의 기본적인 형태
{
  "squadName": "슈퍼히어로",
  "members": [
    {
      "name": "아이언맨",
      "age": 29,
      "본명": "토니 스타크"
    },
    {
      "name": "헐크",
      "age": 39,
      "본명": "부르스 배너"
    }
  ]
}

// 언어마다 다른 표현방식으로 정보를 전달하는 것이 어려웠다
// 대표적 데이터 폼은 xml이고 복잡한 구조를 단순하게 만든 JSON이 나온다

//  JSON 메서드

//  JSON.parse(): "JSON 문자열"을 자바스크립트 *객체*로 변환
//  JSON.stringify() : 자바스크립트 *객체*를 "JSON문자열"로 변환


const json = "{result : true, "count": 42}";
const obj = JSON.parse(json);
console.log(JSON);

const json2 = '[1,2,3]'
const arr = JSON.parse(json2);
console.log(arr);
arr instanceof Array //

const json2 = '[1,2,3[1,2,3]]'
const arr = JSON.parse(json2);
console.log(arr);
arr instanceof Array //

const obj2 = {result : true , count: 42};
const json3 = JSON.stringify(obj);

// 깊은 복사 데이터 자체를 복사
// 얕은 복사는 주소값 복사

// 객체를 문자열화 했다가 다시 객체로 변환하기 때문에 새로운 객체를 생성하는것과 동일합니다. 하지만 함수는 제대로 복사가 불가능하다는 단점이 있습니다. 제대로된 깊은 복사를 위해서는 structuredClone 메소드를 사용해야합니다.
let l = [ten : 10, twenty : 20, thirty : {forty: 40}];
let a = JSON.parse(JSON.stringify(l));
// let a = structuredClone(l);
a[0] = 1000;

console.log(l);
