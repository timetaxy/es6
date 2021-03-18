var map1 = new Map();
map1.set('k1', 'v1');
map1.set([1, 2], 'v2');
console.log(map1);
// { 'k1' => 'v1' }
// 자료의 연관성을 표현하기 위한 자료형
// 이름 값 모든 자료형 가능

var arr1 = [1];
var arr2 = [2];
var arr3 = [3];
var map2 = new Map();
map2.set(arr1, arr2);
console.log(map2.get(arr1));
console.log(map2.get(arr3));
console.log(map2.delete(arr3));//없는 원소 삭제시 false, 있으면 삭제되고 true
console.log(map2.get(arr3));

console.log(map1.size);

for (var k of map1.keys()) {
    console.log(k);
}

for (var k of map1.keys()) {
    // console.log(map1.k); //err
    // console.log(map1[k]); //err
    console.log(map1.get(k));
}
///////////
//중복없는 자료형
var set1 = new Set([1, 2, 3, 3, 3]);
console.log(set1);
set1.add(4);
console.log(set1);
set1.has(4);
set1.delete(4);
// set1.size(4);//err


// arr 중복자료 제거
var arr2 = [1, 1, 1, 2];
var set2 = new Set(arr2);
console.log(set2);
var arr3 = [...set2];
console.log(arr3);
