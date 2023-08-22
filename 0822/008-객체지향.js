// 객체지향 패러다임
// 객체는 우리가 표현하고자 하는 구체적인 사물을 추상적으로 표현한 것
const me = {
  name: "한재현",
  address: "제주도 제주시 인다 1길",
  phoneNum: "010-8000-0000",
  canWalk: function () {
    console.log("재현이가 걷는다.");
  },
  teaching: function (student) {
    student.levelUp();
  },
};
//
const lion = {
  level: 1,
  levelUp: function () {
    this.level++;
  },
};
me.teaching(lion);
///////////////////
const jaeWoong = {
  name: "jaeWoong",
  heroName: "fireMan",
  attack: function (monster) {
    monster.dead();
  },
};
const monster = {
  dead: function () {
    console.log("꿱");
  },
};
jaeWoong.attack(monster);

// 한 번 생성하고 나면 끝.
// 좀 더 효율적인 방법으로 객체 만들기.
////////////////////////////////////////
// 생성자 (constructor) : 객체를 만들 때 new 연산자와 함께 사용하는 함수
// (생성자 함수는 암묵적으로 대문자)
// 생성자의 장점은 생성자를 통해 생성된 객체는 같은 프로퍼티와 메서드를 공유할 수 있다 // const arr = new Array(1, 2, 3);

// 커스텀 생성자 만들어보기
function Factory(name) {
  this.myName = name; //생성자의 함수의 this는 생성자를 통해 만들어진 인스턴스를 참조한다.
  this.sayYourName = () => {
    console.log(`빠방 나는 ${this.myName}이다`);
  };
}
let robot1_1 = new Factory("재웅"); // new가 없다면 factory의 반환값이 robot1에 들어감
robot1_1 instanceof Factory; // true
robot1_1.myName; // "재웅"
