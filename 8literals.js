`use strict`
// template literals
//backtick, backquote
//줄바꿈 가능, 변수${}표기 가능

//tagged literal
//기존 정규식 or char arr 해체로 해야 했던 작업을 쉽게
//첫번째 문자 arr, 두번째 변수 - 변수는 1개씩만, 배열이 아님

var var1 = 'brian'
var var2 = 'againbrian'
charAnalyze = (x, y, z) => {
    console.log(x)
    console.log(y)
    console.log(z)

}

charAnalyze`hi i am ${var1}, this is cool ${var2}`
// [ 'hi i am ', ', this is cool' ]
// brian

