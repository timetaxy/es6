//2017 es8 async, await

//1.callback
function sum(callback) {
    var a = 1 + 1;//too heavy work
    callback();
}
sum(() => console.log('complete'));
// sum(function () { console.log('complete'); });


//2.promise
var sum2 = () => {
    return new Promise((res, rej) => {
        if (1 + 1) { res(1); } else { rej(0); }
    });
};
sum2().then(x => console.log(x));


//3.async
// 단점, 성공 판정만 가능
//async function 함수 실행후 Promise object가 결과로 남음
async function sum3() {
    return 1 + 1;//too heavy work
}
sum3().then(x => console.log(x));

//async 에서 실패 리턴하기
async function sumsum() {
    return new Promise.reject('fail');
}


//4.await
//async 내에서만 가능, then 등 후처리 불필요
//
async function sum4() {
    var promise = new Promise(function (res, rej) {
        var calc = 1 + 1;
        // res(100);
        rej();
    });
    try {
        var result = await promise;//실패시 멈춤
        console.log(result);
    } catch {
        console.log('fail catch phrase');
    }
    //then 다음 catch는 Promise.reject가 될 때
    // =
    //promise.then(x=>console.log(x)).catch(()=>console.log('fail'))
}
sum4();
///////


//버튼 누를 때 프로미스 리턴으로 성공 출력
// await 은 promise에 대해서만 대기함.
// 버튼 누를 때 특정값 리턴은 await 없이 undefined 처리되어 실행 됨

{/* <button id="test">button</button>

<script>
  var promise = new Promise(function(res, rej){
      document.getElementById('test').addEventListener('click', function(){
        res();
      });
  })
  async function pushbtn(){
    var result = await promise;
    console.log('success!')
  }

  pushbtn();
</script> */}
