// Destructuring (구조 분해 할당) ES6
// de - 제거하다 , structure - 구조 // 구조를 해체하는 행위 ex) 디톡스

// 수동적 디스트럭쳐링
// 객체안의 값을 하나 하나 빼내어 각각 별개의 변수에 할당하는 모습
let food1, food2, food3;

const categories = { food1: "과일", food2: "채소", food3: "육류" };

food1 = categories.food1;
food2 = categories.food2;
food3 = categories.food3;

console.log(food1, food2, food3);
// 과일 채소 육류
//  n개의 할당을 해주고자 하면 n줄의 코드 작성이 필요

//  디스트럭쳐링의 기본 구조
let obj = { one: 1, two: 2 };
let myNum = obj.one;
console.log(myNum);
// 1

let obj = { one: 1, two: 2 };
let { one: myNum } = obj;
console.log(myNum);
//  디스트럭쳐링 부분( {one: myNum} )

/////////////////////////////////////////////////////////

let { one: myNum } = { one: 1 };
// 단순히 할당연산자( = ) 의 왼쪽에 있으면 디스트럭쳐링, 오른쪽에 있으면 객체 리터럴로 해석
console.log(myNum);
// 1

let { one: one } = { one: 1 };
// 왼쪽이 디스트럭쳐링, 오른쪽이 객체리터럴입니다.
console.log(one);
// 1

// 디스트럭쳐링은 이름과 콜론을 생략할 수 있습니다
let { one } = { one: 1 };
// 왼쪽이 디스트럭쳐링, 오른쪽이 객체리터럴입니다.
console.log(one);

let { one, two, three, four } = { one: 1 };
// 디스트럭쳐링은 콜론을 통해 변수를 추가적으로 생성할 수 있습니다.
console.log(one);
console.log(two);
console.log(three);
console.log(four);

///////////////////////////////////////////////////////////////////////

//처음에 봤던 수동 디스트럭쳐링을 처리

/**
let food1, food2, food3;

const categories = {food1 : '과일', food2 : '채소', food3 : '육류'};

food1 = categories.food1;
food2 = categories.food2;
food3 = categories.food3;
*/

const { food1, food2, food3 } = { food1: "과일", food2: "채소", food3: "육류" };
const {
  food1: f1,
  food2: f2,
  food3: f3,
} = { food1: "과일", food2: "채소", food3: "육류" };
// 5줄의 코드가 단 한 줄로 끝난다
console.log(food1, food2, food3);

//////////////////////////////////////////////////////////////////////

// 만약 객체를 반환하는 함수가 있을 경우, 함수의 반환값을 받는 변수를 굳이 만들 필요도 없다

const obj = { food1: "과일", food2: "채소", food3: "육류" };

function objReturn() {
  return obj;
}

// 반환값을 바로 디스트럭쳐링합니다.
const { food1, food2, food3 } = objReturn();
const { food1, food2, food3 } = { food1: "과일", food2: "채소", food3: "육류" };

console.log(food1, food2, food3);
// 과일 채소 육류
