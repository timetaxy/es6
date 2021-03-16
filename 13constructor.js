// ref type: obj, array 이므로
// 복사시 얕은복사 문제, 새로 생성시 효율성 문제

let stu1 = { name: 'aaa', age: 12 };
function Student(name, age) {
    //첫글자 대문자
    this.name = name;
    this.age = age;
    // this : 새로생성되는 object 지시
    // ##  = 인스턴스 (여기에서 새로생성되는 오브젝트)
    // ## 만드는 기계: 생성자 constructor
    // ## 참고: var 범위는 function (중괄호 아니라)
    this.sayHi = function () {
        console.log(this.name);
    };
}
let stu2 = new Student('new', 10);
stu2.sayHi();

let stu3 = {
    name: 'aaa', age: 12,
    // sayHi(){}
    //같은 문법
    //
    sayHi: function () {
        console.log(this.name);
    }
};
