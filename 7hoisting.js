console.log(var1)
//undefined
//호이스팅이 아니라면 에러가 나야함
//node 에서는 err ReferenceError: Cannot access 'var1' before initialization

const var1 = 10
console.log(var1)

///

var a = 1, b = 2, c;
//한번에 선언가능

//브라우저 전역변수
window.test1 = 'a'; //더 권장
//window : js 기본함수르 담은 오브젝트

// solve
// let, const 는 undefined 자동할당 안됨
// temporal deadzone, uninitialized err

// 호이스팅은 선언만, 할당은 아님

// 전역 선언시 var는 window.과 같지만, let은 아님
// let a != window.a

// for 반복문의 var는 {} 넘어서 전역임

// var 경우 반복문 선언시점, 실행(버튼. settimeout) 시점 차이에 따라 다른 결과. let 으로 수정

for (var i = 0; i < 5; i++) {
    setTimeout(function () { console.log(i); }, i * 1000);
}

//=>

for (let i = 0; i < 5; i++) {
    setTimeout(function () { console.log(i); }, i * 1000);
}

///
for (var i = 0; i < 3; i++) {
    버튼들[i].addEventListener('click', function () {
        모달창들[i].style.display = 'block';
    });
}
//근데 내부 코드는 addEventListener 어쩌구 입니다. 클릭 되면 콜백함수 내의 모달창들[i].style.display = 'block'; 을 실행해주세요~ 라는 코드입니다. 
//그래서 그 부분은 반복문과 동시에 실행되지 않습니다
//=>
//
for (let i = 0; i < 3; i++) {
    버튼들[i].addEventListener('click', function () {
        모달창들[i].style.display = 'block';
    });
}
