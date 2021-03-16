var a = [1, 2, 3];
var b = 'test';
var c = [...b, ...a];
console.log(c);
///


var a = [1, 2, 3];
var b = ['one', 'two'];
var c = function (a, b) {
    console.log([[...a], ...[...b]][1]);
};
c(a, b);
///


function func1(a = 5, b = a * 2) {
    console.log(a + b);
    return 10;
}
func1(3);
///


function func2(a = 5, b = a * 2) {
    console.log(a + b);
}
func2(undefined, undefined);
//=
func2();
///


function makeArr(...rest) {
    console.log(rest);
    return rest;
}

var newArray = makeArr(1, 2, 3, 4, 5);
console.log(newArray);
///


var numbers = [2, 3, 4, 5, 6, 1, 3, 2, 5, 5, 4, 6, 7];
console.log(Math.max(...numbers));
///


console.log(['b', 'c', 'a'].sort());
function sortFunc(args) {
    console.log([...args].sort());
}

sortFunc('bear');
///

function countChar(args) {
    const input = [...args];
    let result = {};
    input.forEach(x => {
        result[x] = result[x] == null ? 1 : result[x] += 1;
    });
    console.log(result);
    return result;
}
countChar('aabcc');