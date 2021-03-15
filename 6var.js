// 변수 : 선언 할당 범위
//var 재선언 재할당 function, 일반중괄호는 아님
//let x o {}
//const x x(오브젝트 값 변경은 가능) {}
//Object.freeze(person) 값 변경 불가 객체
`use strict`
const var1 = { name: 'aaa' }
var1.name = 'bbb'
//ok
console.log(var1)

Object.freeze(var1)
var1.name = 'ccc'
//unchangable
console.log(var1)
//`use strict` 시 브라우저 에러

if (true) {
    var2 = 'this is var2'
}
console.log(var2)





