
// class Dog {
//     constructor(typ, clr) {
//         this.type = typ;
//         this.color = clr;
//     }
//     moreAge() {
//         if (this instanceof Cat) {
//             this.age++;
//         }
//     }
// }

// class Cat extends Dog {
//     constructor(typ, clr, age) {
//         super(typ, clr);
//         this.age = age;
//     }
// }

// var cat = new Cat('just kitty', 'white', 5);

////////

class Dog {
    constructor(typ, clr) {
        this.type = typ;
        this.color = clr;
    }
    moreAge() {
        if (this instanceof Cat) {
            this.age++;
        }
    }
}

class Cat extends Dog {
    constructor(typ, clr, age) {
        super(typ, clr);
        this.age = age;
    }
}

var cat = new Cat('just kitty', 'white', 5);
cat.moreAge();
console.log(cat.age);

var dog = new Dog('dog1', 'br');
dog.moreAge();
console.log(dog.age);
//undefined

///

var data = {
    odd: [1, 3],
    even: [2, 4, 6],
    setterFunc: function (...rest) {
        rest.forEach((a) => {
            if (a % 2 == 1) {
                this.odd.push(a);
            } else {
                this.even.push(a);
            }
        });
    },
    getterFunc() {
        return [...this.odd, ...this.even].sort();
    }
};

console.log(data.getterFunc);


