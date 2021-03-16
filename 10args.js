`use strict`;
//default param
const sum = (a, b = 10 * 2) => { console.log(a + b); };
sum(1);

//default param에 연산, 함수도 가능
const func1 = () => { return 10; };
const sum2 = (a, b = func1()) => { console.log(a + b); };
sum2(1);



// 모든파라미터는 펑션의 arguments 에 배열로 담김
function func3(a, b, c) {
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

func3(2, 3, 4);

// const func2 = (a, b) => {
//     // arguments.forEach(x => console.log(x))
//     console.log(arguments[0])
// }
// func2(1, 2,)
//argumets.forEach 는 에러

function func4(a, b, ...rest) {
    // console.log(`rest param: ${rest}`);
    rest.forEach(x => console.log(x));
}
//... :1.스프레드, 2.레스트 파라메터
// 유연하게 파라메터 선택 가능
//레스트는 마지막에 사용, 한번 만 가능

func4(1, 2, 3, 4, 5, 6, 7);

