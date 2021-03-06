// js game
// 3 tips
// 1. html에 네모 원
// js 캔버스 태그
// 2. 1초에 60번 코드실행(프레임마다 코드실행) 브라우저 기본 함수
// 3.collision check 유닛두개 충돌하는지 안하는지 검사

//todo :
// score, running animation, random object, background

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var dino = {
    x: 10,
    y: 200,
    width: 50,
    height: 50,
    draw() {
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, this.width, this.height);
        // ctx.drawImage(img2, this.x, this.y);
    },
    jump() {
        this.y -= 1;
    },
    fall() {
        if (this.y < 200) {
            this.y += 1;
        }
    }
};


// var img1 = new Image();
// img1.src = 'cactus.png';
// var img2 = new Image();
// img2.src = 'dino.png';
class Cactus {
    constructor() {
        this.x = 600;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height); //hit box
        // ctx.drawImage(img1, this.x, this.y);

    }
}

var timer = 0;
var cactuses = [];
var animate;
var jumpTimer = 0;

function timeStream() {
    animate = requestAnimationFrame(timeStream);

    //canvas reset
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //60fps
    if (timer % 60 == 0) {
        var cactus = new Cactus();
        cactuses.push(cactus);
    }
    timer++;

    cactuses.forEach((a, i, object) => {
        if (a.x < 0) {
            object.splice(i, 1);
        }
    });



    cactuses.forEach((a) => {
        a.x -= 2;
        a.draw();
        isCollison(dino, a);
    });

    if (isJumping == true) {
        dino.jump();
        jumpTimer++;
    } else if (isJumping == false) {
        jumpTimer = 0;
        dino.fall();
    }

    if (jumpTimer > 100) {
        isJumping = false;
    }


    dino.draw();


}


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var cactus = new Cactus();

timeStream();

function isCollison(dino, cactus) {

    var stateX = cactus.x - (dino.x + dino.width);
    var stateY = cactus.y - (dino.y + dino.height);

    if (stateX < 0 && stateY < 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        cancelAnimationFrame(animate);
    }
}

var isJumping = false;

//스페이스바 누르면 
document.addEventListener('keydown', function (e) {
    if (e.code === 'Space') {
        isJumping = true;
    }
});