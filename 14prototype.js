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
console.log(Student);
// 생성자 속성과 생성된 객체 속성에서 받은 속성 : 상속
// ## prototype은 유전자 (뜻은 원형)
// prototype에 값 추가하면 자식들이 값 물려받기 가능
// 함수에만 존재 ( [].sort() 는 생성된 최초 Array funnction에 있는 prototype)
Student.prototype.gender = 'male';
let stu1 = new Student('kim', 12);
console.log(stu1.gender);
console.log(stu1);
//속성에는 없으나, 속성 처럼 사용할 수 있음
// 자바스크립트 처리 : 속성 출력시 1. 속성 2.prototype 에서 검색, 더 상위 prototype 검색 순
///

let arr = [1, 2, 3];
let arr2 = new Array(1, 2, 3);
//실제 처리
console.log(Array.prototype);
//sort() = Array.prototype.sort()

let obj1 = { name: 'obj1' };
let obj11 = new Object();
//오브젝트로 부터 생성된다


//__proto__
//부모의 prototype
stu1.__proto__;
// = 
Student.prototype;

//임의로 상속관계 등록하기
let obj2 = { name: 'obj2' };
let obj22 = {};
obj22.__proto__ = obj2;
console.log(obj22.name);
//


// prototype에 추가하여 객체에서 function 사용
Array.prototype.remove3 = function () {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === 3) {
            this.splice(i, 1);
        }
    }
};

var arr = [1, 2, 3, 4];
arr.remove3();
console.log(arr); //[1,2,4]