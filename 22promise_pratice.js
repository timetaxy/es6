// promise는 디자인 패턴
// promise 리턴 함수를 디자인하고,
// 사용할 때는 콜백 반복 없이 프로미스 패턴으로

var promise = new Promise((res, rej) => {
    if (true) res('success');
});
var promise2 = new Promise((res, rej) => {
    if (true) res('success');
});
promise.then(function (result) {
    return new Promise2();
}).then(function (result) { });

//////////

var promise = new Promise(function (res, rej) {
    $.get('https://codingapple1.github.io/hello.txt').done(function (result) {
        res(result);
    });
});

promise.then(function (result) {
    console.log(result);

    var promise2 = new Promise(function (res, rej) {
        $.get('https://codingapple1.github.io/hello2.txt').done(function (result) {
            res(result);
        });
    });

    return promise2;

}).then(function (result) {
    console.log(result);
});

//////////// 함수로 묶어서 축약

// var promise = new Promise(function(res, rej) {
//     $.get('https://codingapple1.github.io/hello.txt').done(function(result){
//       res(result)
//     });
// });

var promise = (url) => {
    return new Promise((res, rej) => {
        $.get(url).done(function (result) {
            res(result);
        });
    });
};

promise.then(function (result) {
    console.log(result);

    // var promise2 = new Promise(function (res, rej) {
    //     $.get('https://codingapple1.github.io/hello2.txt').done(function (result) {
    //         res(result);
    //     });
    // });

    // return promise2;
    return promise('https://codingapple1.github.io/hello2.txt');

}).then(function (result) {
    console.log(result);
});
