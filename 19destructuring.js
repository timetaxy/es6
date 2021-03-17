let arr1 = [2, 3, 4];
let [a, b, c] = [1, 2, 3];
let [d, e, f, g = 10] = arr1;
// 갯수 일치 하지 않아도 가능
console.log(b);

//default 값 가능
console.log(g);

/////

var obj1 = { name: 'obj1', age: 1 };
var { age = 31, name: nai = 'none' } = { name: 'obj1', age: 1 };
// 순서가 아니라 변수명을 맞춰준다
// 기본값, 재정의 가능
// var { nm, ag } = obj1; //err
console.log(age);
// console.log(name); //err

var { name: named } = { name: 'gogo' };

//////
//변수명 속성명 같을 경우 축약
var a1 = 'a1';
var a2 = 10;
var obj1 = { a1: a1, a2: a2 };
//=
var obj1 = { a1, a2 };

//////
// args 활용
var obj3 = { name: 'obj3', age: 3 };
function func3({ name, age }) {
    console.log(name);
    console.log(age);

}
func3(obj3);

// #### arr 방식 dest는 func args 에서 err
// function func3([arg1, arg2]) {
//     console.log(arg1);
//     console.log(arg2);

// }
// func3([1, 2]);

var [arg1, arg2] = [1, 2];
console.log(arg1);
console.log(arg2);

///////

let sizes = {
    body: {
        height: 190,
        weight: 70
    },
    size: ["Large", "30inch"],
};
let { body: { height, weight }, size: [s1, s2] } = sizes;
console.log(height, weight, s1, s2);