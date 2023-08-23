// 프로토타입 : 모든 인스턴스들이 공유하는 공간
// 손쉽게 객체를 생산할 수 있게 되었지만 객체의 메서드를 등록할 때마다 새로운 함수를 생성하고 있다. 자원의 낭비를 해결하기 위해 나온 것이 프로토타입
this.sayYourName = function () {
  console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
};
const robot1 = new NewFactory(1);
const robot2 = new NewFactory(2);

function NewFactory2(name) {
  this.name = name;
}

NewFactory2.prototype.sayYourName = function () {
  console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
};
//이렇듯 프로토타입은 모든 인스턴스가 하나의 메서드를 공유하도록 만들어 자원을 더 효율적으로 사용하도록 도와줍니다. 생성된 객체끼리 메서드를 비교하여 같은 곳을 참조하는지 살펴보는것도 이해하는데 도움이 됩니다.

//**프로토타입이란 무엇인가?**

// prototype은 특정 객체에 대한 참조입니다. 즉 어떠한 공간을 가르키고 있습니다.

// 생성자 함수가 인스턴스를 생성하게 되면 그 안에는 숨겨진 프로퍼티인 [[Prototype]] 이 존재하게 됩니다. 코드상에서는 `__proto__`로 표현됩니다. `__proto__` 프로퍼티는 자신을 만든 생성자 함수의 `prototype`을 참조하는 역할을 합니다. 즉, new 키워드를 통해 생성자 함수의 `prototype`과 인스턴스의 `__proto__` 가 연결됩니다.
