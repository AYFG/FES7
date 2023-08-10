// forEach(콜백함수)
let arr = [10, 20, 30, 40, 50];
arr.forEach((value, index, array) => {
  console.log(value, index, array);
});

// 문제 1. forEach를 사용해서 배열의 모든 요소를 더하는 코드를 작성하세요
let arr = [10, 20, 30, 40, 50];
let sum = 0;
arr.forEach((v) => {
  sum += v;
});
console.log(sum);

// 문제 2. forEach를 사용해서 배열의 모든 요소를 더하는 코드를 작성하세요
let arr = [10, "20", 30, "40", 50];
let sum = 0;
arr.forEach((v) => {
  sum += parseInt(v);
});
console.log(sum);

// 문제 3. forEach를 사용해서 짝수 "인덱스"의 값을 모두 더하세요.
// 풀이1
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
arr.forEach((v, i) => {
  if (i % 2 == 0) {
    sum += parseInt(v);
  }
});
console.log(sum);
// 풀이2
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
arr.forEach((v, i) => {
  i % 2 == 0 ? (sum += v) : null;
});
console.log(sum);

// Array(100).fill(0)와 같은 코드 대신 뒤에서 배울 map을 더 많이 사용합니다.
// 문제 4. 1부터 100까지 숫자를 다 더해주세요
Array(100)
  .fill(0)
  .forEach((v, i) => {
    console.log(i + 1);
  });

let sum = 0;
Array(100)
  .fill(0)
  .forEach((v, i) => {
    sum += i + 1;
  });
sum; // 5050,이 코드는 좋은 코드는 아닙니다 수학수식으로 계산되는 코드는 이렇게 순회를 돌면서 풀지 않아도 된다.
let n = 100;
(n * (n + 1)) / 2;

// https://school.programmers.co.kr/learn/courses/30/lessons/120835
let userInput = [3, 76, 24];
let sortValue = [userInput].sort((a, b) => b - a);

let userInput = [3, 76, 24];
let sortValue = [userInput].sort((a, b) => b - a);

// //한글 풀이
// let userInput = [3, 76, 24];라면 정렬된 후의 값은 [76,24,3]이 된다 그렇다면 정렬된 후의 값에 3이 위치한 인덱스는 2가 된다. 76이 위치한 인덱스는 0이 된다. 24가 위치한 인덱스는 1이 된다.
// 그렇다면 userInput에 이 인덱스를 하나씩 지정한다.
// 그러면 userInput은 [2,0,1]이 된다
// 결과값을 보니 0번째는 없다 따라서 여기에 1씩 더해준다 [3,1,2]
let userInput = [3, 76, 24];
let sortValue = [userInput].sort((a, b) => b - a);
userInput.forEach((v, i) => {
  userInput[i] = sortValue.indexOf(v) + 1;
});
// step1 = [3,76,24]
// step2 = [76,24,3] //정렬된 값
// step3 = [2,0,1]
// step4 = [3,1,2] // 정답
[10, 20, 30, 40].indexOf(30); // 2


// 문제 5. 1부터 100까지의 숫자 중 3의 배수만 더해주세요
나:
let sum = 0;
Array(100).fill(0).forEach((v,i)=>{
  i % 3 == 0 ? (sum += v) :null;
})
console.log(sum);
정답 :
Array(101).fill(0).forEach((v,i)=>{
  if (i % 3 === 0){
    sum += i
  }
})
Array(101).fill(0).forEach((v,i)=>{
 i % 3 === 0 ? sum += i : null
  }
)


// 문제6. 아래와 같이 출력되게 해주세요.
// input = ['hojun', 'dongjun', 'dongwook', 'donggeun']
// output = ['hojun is good', 'dongjun is good', 'dongwook is good', 'donggeun is good']
let input = ['hojun', 'dongjun', 'dongwook', 'donggeun']
let output = []
input.forEach(v => {
  output.push(`${v} is good`)
})

// 문제 7. 010-5044-2093 번호가 있었을 때 아래와 같이 출력되게 해주세요 뒤에  2자리를 x로 바꿔주세요
//output = '0xx-50xx-29xx'
'010-5044-2903'.split("-").forEach((v,i)=>{
  console.log(v.replace(v.slice(-2),"xx"))
})

'hello world hello'.replace('hello','hojun')

'010-4444-2903'.split("-").forEach((v,i)=>{
  if (v.length===4){
  console.log(v.replace(v.slice(-2),"xx"))}
  else{
    console.log(v.replace(v.slice(-2),"xx"))}
  }
)
'010-4444-2903'.split('-').forEach((v, i) => {
    v.length === 4 ? console.log(v[0] + v[1] + 'xx') : console.log('0xx')
})

'010-4444-2903'.split('-').forEach((v, i) => {
    v.length === 4 ? console.log(v.slice(0, 2) + 'xx') : console.log('0xx')
})

// 주의사항
// forEach는 return을 사용할 수 없습니다.
[1,2,3].forEach(v=>{
  console.log(v)
  return //리턴했는데 멈추지않는다!
})
[1,2,3].forEach(v=>{
  return // 뒤에 코드를 무시하는 코드로 사용할 수는 있다
  console.log(v)
})
// forEach는 break, continue를 사용할 수 없습니다.
[1,2,3].forEach(v=>{
  console.log(v)
  break // break는 error 입니다
})
[1,2,3].forEach(v=>{
  console.log(v)
  continue // continue는 error입니다 
})
// ElementNodeList는 forEach는 익스플로러를 지원하지 않습니다.
// 기억해야 할 문구 : forEach라고 닥 같은 forEach가 아니다!
document.querySelectorAll('div').forEach((v)=>{
  console.log(v)
})