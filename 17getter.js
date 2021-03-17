let person1 = {
    name: 'lee', age: 30, nextAge() {
        return this.age + 1;
    },
    setAge(age) {
        this.age = parseInt(age);
        //안전장치
    },
    //es5 이후
    set setAge2(age, name) {
        // mandatory parameter 1 only
        this.age = parseInt(age);
    },
    get getAge() {
        return this.age;
        // mandatory return
    }

};

// 구조적으로 실수 없이 데이터 변경위해 getter setter 사용
// 1 복잡자료 접근 2 수정편리 3 실수방지 4 validation
person1.nextAge();
person1.setAge(10);
console.log(person1.age);

// ########################
// es5 이후 문법
// set
person1.setAge2 = 20;
// get
console.log(person1.getAge);
//getAge()는 에러남.


////////// 클래스에도 그대로 적용, getter setter
class person {
    constructor() {
        this.name = 'Park';
        this.age = 20;
    }
    get nextAge() {
        return this.age + 1;
    }
    set setAge(age) {
        this.age = age;
    }
}

var person1 = new person();
