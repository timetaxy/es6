let obj1 = { name: 'a' };
function func1(obj) {
    obj = { name: 'b' };
}
func1(obj1);
console.log(obj1);
//obj1 변하지 않음
//ref type 은 복사시 ref, 할당시에는 새로운 ref