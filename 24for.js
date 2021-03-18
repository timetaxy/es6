//1. 코드 반복 2.Array, Object자료 추출

//for, forEach : Array
//for in : object
//for of : iterable
var obj1 = { name: 'obj1', age: 10 };
//obj1.name
//obj1['name']

for (const key in obj1) {
    console.log(obj1[key]);
}

//enumerable 객체만 추출해줌
//객체 안 다른 숨김 정보 3개
//{ value: 'obj1', writable: true, enumerable: true, configurable: true }
var hdn = Object.getOwnPropertyDescriptor(obj1, 'name');
console.log(hdn);
console.log('done');
//////


// 부모의 prototype도 출력하는 문제
class Parent { }
Parent.prototype.parent = 'parent';
var obj2 = new Parent();
// obj2.parent = 'nono'; //override 가능
for (const key in obj2) {
    if (Object.hasOwnProperty(key)) {
        //직접가진 속성만 출력
        console.log(obj2[key]);
    }
}
/////

//for of
//array, string, arguments, nodelist, map, set
//iterable
//자료형 마다 내장된 특징형이 존재, 
var arr1 = [1, 2, 3, 4];
console.log(arr1[Symbol.iterator]());
//Array Iterator {} : 이터러블 자료형 이라 한다
for (const iterator of arr1) {
    console.log(iterator);
}
///


//이터러블 브라우저에서, 여러개 속성 선택시
document.getElementsByClassName();//노드리스트 자료형, 대괄호 남는ㄴ다
document.querySelectorAll();
