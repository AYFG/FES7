// 전개구문 spread syntax

const 과일들 = ["사과", "파인애플", "수박"];
const 생선들 = ["조기", "갈치", "다금바리"];
const 합치면 = [...과일들, ...생선들];
console.log(합치면);
// (6) ['사과', '파인애플', '수박', '조기', '갈치', '다금바리']

const 과일들 = ["사과", "파인애플", "수박"];
const 과일들2 = [...과일들];

과일들2.push("키위");
console.log(`${과일들2} & ${과일들}`);
//  사과,파인애플,수박,키위 & 사과,파인애플,수박
// 위의 코드처럼 기존의 전개 구문을 이용하면 배열을 복사해 새로운 배열을 만들 수도 있습니다. 그리고 이렇게 생성된 배열은 기존의 객체 자료형처럼 참조를 공유하지 않고 완전히 별개인 새로운 값이 할당됩니다.

// 객체의 전개 구문 //중괄호( { } ) 안에서 세 개의 점(...)을 사용
const 위니브1 = { 개리: 1, 빙키: 2 };
const 위니브2 = { 라이캣: 3 };
const 위니브3 = { ...위니브1, ...위니브2 };
// 위 코드에서는 위니브1과 위니브2라는 두 개의 객체를 선언하고, 전개 구문을 사용하여 두 객체를 확장한 위니브3 객체를 생성합니다

console.log(위니브3);
// {개리: 1, 빙키: 2, 라이캣: 3}
const me = { name: "재현", address: "제주" };

const clonedMe = { ...me };
// 전개구문을 사용하여 주소를 향하는 것이 아닌 새로운 값을 할당하여 클론

clonedMe.age = 22;

console.log(`${Object.keys(me)} & ${Object.keys(clonedMe)}`);
// name,address & name,address,age

const me = { name: "재현", address: "제주" };
const newAddress = { address: "서귀포시" };
const newMe = { ...me, ...newAddress };

console.log(newMe);
// {name: '재현', address: '서귀포시'}
// me의 address 키 값은 원래 제주였지만 나중에 오는 address인 서귀포시가 address의 키 값이 된다
