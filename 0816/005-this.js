// this는 객체를 가리키는 참조 변수
// 호출되는 위치에 따라 다른 값을 출력

//  window
function a() {
  console.log(this);
}
a();
// window.a();
// window 객체 :브라우저 환경의 전역공간 (global)

/////////////////////////

// myObj
let myObj = {
  val1: 100,
  func1: function () {
    console.log(this);
  },
};

myObj.func1();

//////////////////////////////
let myObj = {
  val1: 100,
  func1: function () {
    console.log(this);
  },
};

let test = myObj.func1;
test();
// 전역공간에서 호출하여 window가 출력됨

/////////////////////////
/ * this */;
function sayName() {
  console.log(this.name);
}

var name = "Hero";
// 전역으로 선언한 name 변수의 앞에는 window 가 생략되어 있습니다.
// 때문에 window.name === "Hero" 가 성립합니다.
let peter = {
  name: "Peter Parker",
  callMyName: sayName,
  //   소괄호가 있으면 실행 // 함수명만 써있으면 선언
};

let bruce = {
  name: "Bruce Wayne",
  callMyName: sayName,
};

sayName();
peter.callMyName();
bruce.callMyName();

/* sayName() 함수를 실행했을 때와 
peter, bruce 객체의 sayName 함수를 호출했을 때의 결과를 비교해 보세요 */

// this라는 키워드를 가진 함수를 호출하는 "객체"

//////////////////////////////////////////////////////////
/* this 사용 예시 */

let 호텔 = [
  {
    이름: "하나호텔",
    위치: "제주도 제주시 001",
    가격: { A: 50000, B: 30000, C: 15000 },
    방의개수: 50,
    예약자수: 25,
    남은방의개수: function () {
      return this.방의개수 - this.예약자수;
    },
  },
  {
    이름: "둘호텔",
    위치: "제주도 제주시 002",
    가격: { A: 100000, B: 60000, C: 30000 },
    방의개수: 100,
    예약자수: 30,
    남은방의개수: function () {
      return this.방의개수 - this.예약자수;
    },
  },
  {
    이름: "셋호텔",
    위치: "제주도 제주시 003",
    가격: { A: 80000, B: 50000, C: 30000 },
    방의개수: 120,
    예약자수: 80,
    남은방의개수: function () {
      return this.방의개수 - this.예약자수;
    },
  },
];
console.log(호텔[0].남은방의개수());
console.log(호텔[1].남은방의개수());
console.log(호텔[2].남은방의개수());

/////////////////////////////////////////
// this는 함수가 만들어질 때가 아닌 '실행'될 때 그 값이 결정됩니다.
function sayName() {
  console.log(this.name);
}
var name = "Hero";

let peter = {
  name: "Peter Parker",
  callMyName: sayName,
};

let bruce = {
  name: "Bruce Wayne",
  callMyName: peter.callMyName,
};

bruce.callMyName();

/////////////////////////////////////////////////
// this 값을 사용자의 의도대로 조작하기

// 함수의 apply(), call(), bind() 메소드를 사용하면 this를 조작하거나 고정해 둘 수 있습니다. 이는 사용자가 원하는 의도대로 binding을 통한 컨트롤을 할 수 있게 합니다.

// call();
var peter = {
  name: "Peter Parker",
  sayName: function () {
    console.log(this.name);
  },
};
var bruce = {
  name: "Bruce Wayne",
};
peter.sayName.call(bruce);

// peter.sayName.call(bruce) 의 결과는 무엇이 될지 생각해 봅시다.

// 아규먼트를 전달해줄 수 있습니다.
var peter = {
  name: "Peter Parker",
  sayName: function (감탄사) {
    console.log(this.name + 감탄사);
  },
};

var bruce = {
  name: "Bruce Wayne",
};
peter.sayName.call(bruce, "!");

/////////////////////////////
//apply()

// apply() 메서드의 인수에 this 로 사용할 값을 전달할 수 있으며, 아규먼트를 단일한 배열로 전달한다는것이 call과의 유일한 차이점입니다. 위에서 `!`의 값이 들어가는 자리가 아래에서는 `['batman', 'richman']`이 된 것이라 이해해주시면 됩니다.
var peter = {
  name: "Peter Parker",
  sayName: function (is, is2) {
    console.log(this.name + " is " + is + " or " + is2);
    // console.log(`${this.name} is ${is} or ${is2}`);
  },
};

var bruce = {
  name: "Bruce Wayne",
};

peter.sayName.apply(bruce, ["batman", "richman"]);
peter.sayName.call(bruce, "batman", "richman");

/* peter.sayName.apply(bruce, ['batman', 'richman']) 의 결과가 무엇이 될지 생각해보고 
apply 를 call로 바꾸어 호출했을 때와 비교해 봅시다. */
///////////////////////////////////////////

// bind()

// bind() 는 **this가 고정된 새로운 함수를 반환**합니다.
function sayName() {
  console.log(this.name);
}

var bruce = {
  name: "bruce",
  sayName: sayName,
};

var peter = {
  name: "peter",
  sayName: sayName.bind(bruce),
};

peter.sayName();
bruce.sayName();

/* peter.sayName() 과 bruce.sayName() 의 결과 값이 무엇이 될지 생각해봅시다. */
// this에 바인딩되는 객체가 동적으로 결정되는 기명함수와 달리 화살표 함수의 경우 상위 스코프의 this를 가리킵니다. 이러한 방식을 렉시컬(Lexical) 스코프라고 부릅니다.

const person = {
  name: "hojun",
  age: 25,
  a() {
    console.log(this);
    console.log(this.name);
    function b() {
      console.log(this);
      console.log(this.name);
      function c() {
        console.log(this);
        console.log(this.name);
      }
      c();
    }
    b();
    // 어떤 객체의 메소드가 아닌 단독 호출되는 함수의 this는 전역공간을 참조하게됩니다.
  },
};
person.a(); // 객체의 메소드로 실행

//출력
// {name: 'hojun', age: 25, a: ƒ}
// hojun

// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// ''

// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// ''

//////////////////////////////////////////////////////
// a에서 this = person
// b에서 this = 상위스코프(상위에서 person을 보고있음) 즉 person
// c에서 this = 상위스코프(상위에서 person을 보고있음) 즉 person
const person = {
  name: "hojun",
  age: 25,
  a() {
    console.log(this);
    console.log(this.name);
    let b = () => {
      console.log(this);
      console.log(this.name);
      let c = () => {
        console.log(this);
        console.log(this.name);
      };
      c();
    };
    b();
  },
};
person
  .a()

  [
    //출력
    // {name: 'hojun', age: 25, a: ƒ}
    // hojun

    // {name: 'hojun', age: 25, a: ƒ}
    // hojun

    // {name: 'hojun', age: 25, a: ƒ}
    // hojun

    /////////////////////////////////
    // 다음과 같이 콜백함수의 this가 무엇을 바라보는지 살펴보는것도 재미있습니다.
    (1, 2, 3)
  ].forEach(
    function () {
      console.log(this);
    },
    [10, 20, 30]
  );

///////////////////////

// 활용 예제
let 인세규정 = {
  책: 10,
  영상콘텐츠: 50,
};

function 인세계산함수(e) {
  return e * (this.책 / 100);
}

[100, 200, 300].map(인세계산함수, 인세규정); // 인세규정 : thisarg
//   arr.map(callback(currentValue[, index[, array]])[, thisArg])


let 인세규정 = {
    책:10,
    영상콘텐츠:50
};
    
[100, 200, 300].map(e => e *(this.책/100), 인세규정); // [NaN, NaN, NaN]
[100, 200, 300].map(e => this, 인세규정); // [Window, Window, Window]
//thisarg로 인세규정을 정해줬지만 화살표 함수 사용으로 window를 가리키게 된다

////////////////////////////////////////
function attackBeam() {
  // 레이저 공격
  this.hp -= 20;
}

function attackKnife() {
  // 칼공격
  if (this.name === "thanos") {
    this.hp -= 1;
    return;
  }
  this.hp -= 5;
}

let jombi = {
  name: "jombi",
  damaged1: attackBeam,
  damaged2: attackKnife,
  hp: 10000,
  power: 2,
};

let thanos = {
  name: "thanos",
  damaged1: attackBeam,
  damaged2: attackKnife,
  hp: 1000,
  power: 100,
};

jombi.damaged1(); // Beam
jombi.damaged2(); // Knife
jombi.hp;

// ### 정리

1. 메서드로 호출한 경우 this는 멤버접근연산자 앞의 객체를 가르킵니다.
2. 함수로 호출할 경우 this는 window(node는 global)를 가르킵니다.
3. 화살표 함수의 경우 this는 상위스코프를 가르킵니다.
4. 생성자 함수 혹은 class의 경우 this는 인스턴스를 가르킵니다.