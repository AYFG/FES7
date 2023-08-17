// 클로저(Closure)

클로저란 폐쇠된 공간 안에 데이터에 접근하기 위한 테크닉입니다.

예시로 보는게 이해가 빠릅니다. 아래 예제에서는 add5, add10이 클로저입니다. 

function makeAdder(x) {
    var y = 1;
    return function(z) {
        y = 100;
        return x + y + z;
    };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);
//클로저에 x와 y의 환경이 저장됨

console.log(add5(2));  // 107 (x:5 + y:100 + z:2)
console.log(add10(2)); // 112 (x:10 + y:100 + z:2)
//함수 실행 시 클로저에 저장된 x, y값에 접근하여 값을 계산
//지역스코프에서 값을 찾고, 없으면 그 밖에 있는 스코프에서 찾고, 계속해서 찾아 올라가 전역 스코프까지 찾아보는 것을 스코프체이닝

좀 더 풀어서 얘기하자면, 외부 함수에 대한 접근 권한을 내부 함수에 위임함으로서 폐쇠된 공간 안의 데이터에 접근할 수 있도록 하는 테크닉입니다.

그러면 왜 사용할까요? 클로저를 사용하면 특정 변수나 함수를 외부에서 접근할 수 없도록 숨길 수 있습니다. 이를 통해 private 변수와 메서드를 구현할 수 있습니다.


const person = function(){
    let age= 15;

    return{
        name: "jaehyun",
        getAge:function(){
            return age;
        },
        setAge:function(val){
            age = val
        }
    }
}
    const man = person();
//person이 return되면 person이라는 함수는 사라지지만 age는 메모리의 어딘가에 남아있다 내부 메서드가 age를 참조하고 있기 떄문
//age에 대한 접근 권한은 return 객체만 있다 getAge를 통해 접근하고 setAge를 통해 수정하기 떄문에 age는 안전하다

const outer = function() {
    let a = 1 
    const inner =function(){
        let b= 5 ;
        let c= 6 ; 
        a = a + b + c
        
        console.log(a)
    }
    // inner()
    return inner;
}
// outer()
const newInner = outer();

newInner();