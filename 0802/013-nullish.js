// https://ko.javascript.info/nullish-coalescing-operator
// 스펙에 추가된 지 얼마 안 된 문법입니다. 구식 브라우저는 폴리필이(최신 문법을 구식 부라우저에서도 사용할 수 있도록 해주는 것) 필요합니다.

let firstName = null;
let lastName = null;
let nickName = "licat";

console.log(firstName ?? nickName);
console.log(firstName ?? lastName ?? nickName);

let firstName = null;
let lastName = "hojun";
let nickName = "licat";

console.log(firstName ?? nickName);
console.log(firstName ?? lastName ?? nickName);
console.log(firstName || nickName);

let a = null;
let b = 10;
let c = null;
console.log(a ?? b ?? c);

let height = 0;
console.log(height ?? 100); //0이 null인가? 아니니까 0을 출력한다. nullish 입장에서는 0도 value이다
console.log(height || 100); //0을 만났을 때 뒤를 봐야 하나요?

let hegiht;
console.log(height ?? 100);
console.log(height || 100);

let height3 = "";
console.log(height ?? "world"); // 0이 null인가? 아니니까 0을 출력한다. nullish 입장에서는 0도 value이다
console.log(height || "hello"); // ''을 만났을 때 뒤를 봐야하나요?

// || : 0 , null , undefined , false , NaN , '',etc...
// ??  : null , undefined

// nullish 문제
// 1번
let username;
let nickname;
console.log(username || nickname || "guest"); // guest
// 2번
let username = "";
let nickname = "";
console.log(username || nickname || "guest"); // guest
// 3번
let username = "";
let nickname = "";
console.log(username ?? nickname ?? "guest"); // ""
//4번
let username;
let nickname;
console.log(username ?? nickname ?? "guest"); // guest
