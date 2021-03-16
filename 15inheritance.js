//prototype 은 es5 이전, 2009 이전 문법

//es5
// Object.create(objectForPrototype);

let parent = { name: 'kim', age: 50 };
let son = Object.create(parent);
let son2 = Object.create(son);
console.log(son);
console.log(son.name);
console.log(son.__proto__);
console.log(son2.__proto__);
// 상속을 여러번 할 경우, 가장 가까운 속성이 콜(자신-부모-부모의 부모) 됨


//es6
class parent_es6 {
    constructor() {
        this.name = 'Kim';
        this.sayHi = function () { console.log('hi in constructor'); };
        //자식에 직접 추가
    }
    sayHi() {
        console.log('hi in func');
        //부모의 prototype에 injection 
    }
}

let child = new parent_es6();
child.sayHi();
//가까운게 먼저 출력

child.__proto__ = parent_es6.prototype = Object.getPrototypeOf(child);

parent_es6.prototype.sayHi2 = function () { };
//객체지향 문법 이유
// object 여러개 만드려고 사용하는 것