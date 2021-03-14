//모든 내용은  브라우저 콘솔출력 전제

function func1(){
this.name = 'aaa'
}

var obj1 = new func1();
//생성자안에서 쓰면 새로 생성되는 오브젝트(인스턴스)를 뜻함 

///

document.getElementById('a1').addEventListener('click',function(){
})
//html id=a1 요소찾고, 클릭하면, func 실행


document.getElementById('a1').addEventListener('click',function(){
    console.log(this);
    //이벤트리스너 안에서 this 쓸 대
    //e.currentTarget;
})


document.getElementById('a1').addEventListener('click',function(e){
    console.log(e.currentTarget)
    //지금 이벤트 동작하는 곳 ex) <button id="btn">btn</button>
})

var arr1 = [1,2,3]
arr1.forEach(function(a){
    console.log(this) 
})
//함수안에 들어가는 함수 콜백 함수
//여기서는 window
//함수가 쓰인 위치에 따라 this

var obj1 = {names:['a','b'],func1:function(){
    console.log(this)
    //{names:Array(2), func1:f}
    // 이 함수 소유한 오브젝트

    obj1.names.forEach(function(){
        console.log(this)
        //window
    })
}}
//오브젝트 내에서 콜백함수 this 도 window


var obj1 = {names:['a','b'],func1:function(){
    obj1.names.forEach(()=>{
        console.log(this)
        //{names:Array(2), func1:f}
        //this 를 재설정해주지 않는, 상위 this 그대로 받아서 쓰는 함수 arrow function
    })
}}

// this값은 function을 만날 때마다 바뀔 수 있기 때문에
// 내가 원하는 this를 쓰기 힘든 경우가 있습니다. 
// 그럴 땐 함수를 arrow function으로 바꿔보시길 바랍니다. 

