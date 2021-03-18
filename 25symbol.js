// import util from 'util';
const util = require('util');
var symbol1 = Symbol('desc');
//object의 키값으로 쓰기 위한 심볼
//원래 오브젝트 키값은 문자만 가능, es6부터 심볼도 가능
// 반복문에는 뜨지 않기 때문에 반복문 영향없이 값 이입 가능

// var person = { name: 'name', [height]: 123 };
var person = { name: 'name' };
person.weight = 100;
// person[weight] = 50;//반복문 출력 안됨 enumerablea x
// person[name] = 'new'; //node 에서는 에러 발생?

for (var k in person) {
    console.log(person[k]);
}
//심볼은 레퍼런스 객체
var b = Symbol('aa');
var c = Symbol('aa');
var d = c;
if (b === c) console.log('bc same');//다름
//= true
//== false
//=== false
if (c === d) console.log('cd same');//같음

var arr1 = [1, 2, 3];
console.log(arr1[util.inspect(Symbol.iterator)]);
//브라우저에서 기본객체이나 출력은 안됨


