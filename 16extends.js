class hal {
    constructor(name) {
        this.surname = 'kim';
        this.name = name;
    }
    sayHi() {
        console.log('hi hal');
    }
}
let hal1 = new hal('1');

class far extends hal {
    constructor(name) {
        super(name);
        //상위 constructor의 내용 그대로 가져옴
        // super 매개변수 가능
        // super 부모 constructor

        this.age = 50;
        //err
        // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor


    }
    sayHi() {
        console.log('hi far');
        super.sayHi();
        // super 부모 prototype
    }
}
let far1 = new far('iamfar');
console.log(far1);
far1.sayHi();
//가까운 프로토타입을 출력


