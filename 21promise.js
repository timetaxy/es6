//stack
//싱글스레드
// 동기함수는 queue > stack, stack이 비었을 때만

//자바스크립트는 어려운 연산 중 다른 작동이 안 됨
// 브라우저 프리징, stack 항상 비워둘 것, queue도 최대한 비울 것

// 자바스크립트 자체는 동기적, 비동기적 실행되는 부분이 있을 뿐
// 동기 비동기는 자바스크립트가 아니라 작동 브라우저 구동 방식 임

//오래 걸리는 작업 > 브라우저 web API 공간에서 처리

//콜백함수, 유일하게 비동기 만드는 함수
//setTimeout(function(){},1000)
//addEventListener('click',func)

function func1(arg) {
    console.log(1);
    arg();
}
function func2() {
    console.log(2);
}
function func3() {
    console.log(3);
}

// 더 안전하게 순서보장, 단 콜백함수는 디자인 패턴일 뿐
func1(func2);
func1(function () {
    func2(function () {
        func3;
    });
});
//콜백 늪
//////////////
// 뎁스가 깊어지지 않는다 / catch 가능 (실패했을 경우 실행/ finally
var func1 = new Promise();
// 프로미스: 성공실패 판정 기계
func1.then(function () {
    //프로미스가 성공했을 경우 실행 코드
});

////
var func2 = new Promise(function (success, fail) {
    // 연산 작업
    success(10);
    //성공판정
    //동기식
    // 결과 전송
});

func2.then(function (result) {
    console.log(result);
    console.log('success');
}).catch(function () {
    console.log('fail');

});

//////////

var promiFunc = new Promise(function (res, rej) {
    setTimeout(function () { rej(); }, 1000);
});

promiFunc.then(() => { }).catch(() => {
    //실패시 실행
});;
// 상태
// resolved pending rejected

// 프로미스는 동기를 비동기로 바꿔주는건 아님
// 쓰이는 곳 : fetch().then().catch()
// fetch 프로미스 리턴


// Promise의 몇가지 특징

// 1. 일단 new Promise()로 생성된 변수를 콘솔창에 출력해보시면 현재 상태를 알 수 있습니다. 
// 성공/실패 판정 전에는 <pending> 이라고 나오며
// 성공 후엔  <resolved>
// 실패 후엔 <rejected> 이런 식으로 나옵니다.
// 이렇게 프로미스 오브젝트들은 3개 상태가 있습니다.
// 그리고 성공을 실패나 대기상태로 다시 되돌릴 순 없습니다.

 // 2. Promise는 동기를 비동기로 만들어주는 코드가 아님
// (그냥 원래 자바스크립트는 평상시엔 동기적으로 실행이 되며 비동기 실행을 지원하는 특수한 함수들 덕분에 가끔 비동기적 실행이 될 뿐) 
