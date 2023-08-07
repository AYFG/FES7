// 중요도 높습니다!

// push - 배열의 뒤에 값을 추가한다
//반환값 : undefined

// pop : 뒤에서 값을 꺼내고 반환
//반환값 : 꺼낸 값

//unshift - 배열의 앞에 값을 추가 한다.
// 반환값 : 배열의 길이

//shift : 앞에서 값을 꺼내고 반환
// 반환값 : 꺼낸 값

// 문제
입력값: [10, 20, 30, 40];
출력값: [10, 100, 20, 30, 50];

// 1.splice
let arr =  [10, 20, 30, 40];
arr pop();
arr.push(50);
arr.shift();
arr.unshift(10,100);

// arr.splice(start , deleteCount , 1tem1 , 1tem2 ...)
let arr2 = [10,20,30];
arr2.splice(1,0,100); // 1번째에 0개를 지우고 ,100을 넣어라

let arr3 = [10,20,30];
arr3.splice(1,1,100,200); // 1번째에 1개를 지우고 , 100과 200을 넣어라
arr3.splice(1,1,[100,200]); // 1번째에 1개를 지우고 , [100, 200]을 넣어라

///////////////////////////////////////
// 같이 풀 문제
let arr4 = [10,20,30,40]
let x = [1,2,3]
//만들고 싶은 값 : [10,1,2,3,20,30,40,1,2,3,100]

// 방법 1
let arr4 = [10,20,30,40];
let x = [1,2,3];
arr4.splice(1,0,...x); // ...전개구문
arr4.splice(7,0,...x); //arr.push(...x) 또는 arr.push(1,2,3) 또는 arr.push(...[100,200,300])
arr4.push(100)

// 방법 2
let arr4 = [10,20,30,40]
let x = [1,2,3]
arr4.splice(1,0,x[0],x[1],x[2])
//생략

/////////////////
// splice에서 인자값을 두개만 넣으면 , 두번째 인자값부터 끝까지 다 지운다.
let arr5 = [10,20,30,40]
arr5.splice(1) //1번째부터 끝까지 다 지워라
arr5.splice(1,2) // 1번째부터 2개를 지워라 (삽입값은 없다)


// 2. slice
// arr.slice (start,end)
// 주의 ! 원본은 수정되지 않는다!
// 비교 ! splice는 원본을 수정한다
let arr = [10,20,30,40]
arr.slice(1,3) // 1번째부터 3번째까지 (2번째까지) 자른다.
arr.slice(1,10000) // index에 없는 값도 오류가 생기지 않는다 // splice도 마찬가지이다.
arr.slice(100,10000) // index에 없는 값도 오류가 생기지 않는다 // splice도 마찬가지이다.
