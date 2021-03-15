`use strict`
var a = [1, 2, 3]
var b = [4, 5]
console.log(...a, ...b)
//... 반드시 괄호안에서만
// array flatten에도 사용 가능

//reference data type : array, object
//deep copy, 참조 분리
var c = [...a]
a[3] = 4
console.log(c)
//c는 변경 없음

var obj1 = { a: 1, b: 2 }
var obj2 = { ...obj1, c: 3 }
//deep copy, modified

var obj3 = { ...a, a: 5 }
// 마지막 값으로 overwrite


function sum(a, b, c) {
    console.log(a + b + c)
}
var vars = [10, 20, 30];
// sum(vars[0],vars[1],vars[3]) //안습방식
//  sum.apply(undefined, arr);  //옛날방식
//  객체 안이 아니므로 undefined 또는 아무값, arr args 전달
//  sum(...arr);  //요즘방식



var person = {
    greet: function () {
        console.log(this.name + 'hi')
    }
}

var person2 = {
    name: 'shm'
}
//=
// var person2 = {
// name: 'shm',
//     greet: function () {
//         console.log(this.name + 'hi')
//     }
// }
//person2.greet() 하고 싶을 때
person.greet.apply(person2);
person.greet.call(person2);

person.greet.apply(person2, 1); //function args injection
//=
//person2.greet(1)
person.greet.call(person2, 1);

// 여러 args
person.greet.apply(person2, [1, 2, 3]);
person.greet.call(person2, 1, 2, 3);
