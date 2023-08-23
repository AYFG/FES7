// 실습 : 음식 이름의 배열을 전달하면 배열안에서 랜덤하게 메뉴를 뽑아내는 로봇객체의 생성자를 만들어보세요.

// function RobotFactory(foodNames) {
//   this.menu = foodNames;
//   this.sayMenu = function () {
//     // 배열의 길이에 해당하는 범위의 랜덤한 값을 뽑아낸다
//     const index = parseInt(Math.random() * foodNames.length);
//     console.log(`삐비비 오늘의 메뉴는 ${foodNames[index]}를 먹자`);
//   };
// }
// const robot = new RobotFactory(["닭", "소", "돼지"]);
// const robot2 = new RobotFactory(["오이", "호박", "당근"]);

function ChatFoodAI(foodArr) {
  this.menu = foodArr;
  this.메뉴랜덤뽑기 = function () {
    const randomIndex = parseInt(Math.random() * this.menu.length);
    alert(`랜덤으로 뽑은 메뉴 ${this.menu[randomIndex]}`);
  };
}
const me = new ChatFoodAI(["짜장면", "짬뽕", "볶음밥", "탕수육"]);
