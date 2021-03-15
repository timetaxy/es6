var person1 = {
    name: 'shm',
    syaHi: () => { console.log(`Hi this is ${person1.name}`) }
}
person1.syaHi();

///

var data1 = { data: [1, 2, 3, 4, 5] }
data1.allSum = () => { let ret = 0; data1.data.forEach(x => ret += x); return ret; }
console.log(data1.allSum());

{/* <button id="버튼">버튼이에요</button>
<script>
  document.getElementById('버튼').addEventListener('click', setTimeout(()=>{
    console.log(this.innerHTML)
  },1000);
</script> */}


/// solve
var person1 = {
    name: 'aaa', sayHi: function () {
        console.log('hi' + this.name)
    }
}
person1.sayHi();
//arrow function은 this.name 추출 불가

//

var data1 = { data: [1, 2, 3, 4, 5] }
data1.allSum = function () {
    var sum = 0
    this.data.forEach(function (a) { sum += a })
    console.log(sum)
}

//

{/* <button id="버튼">버튼이에요</button>
<script>
  document.getElementById('버튼').addEventListener('click', setTimeout(()=>{
    console.log(this.innerHTML)
  },1000);
  //arraow function으로 하지 않을 경우 this = window

  document.getElementById('버튼').addEventListener('click', setTimeout(function(){
      var that = this;
    console.log(that.innerHTML)
  },1000);
  // 예전 방식

</script> */}

