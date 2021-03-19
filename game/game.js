// js game
// 3 tips
// 1. html에 네모 원
// js 캔버스 태그
// 2. 1초에 60번 코드실행(프레임마다 코드실행) 브라우저 기본 함수
// 3.collision check 유닛두개 충돌하는지 안하는지 검사

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var dino = {
    x: 10,
    y: 200,
    width: 50,
    height: 50,
    draw() {
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, this.width, this.height);
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

class Cactus {
    constructor() {
        this.x = 600;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(img1, this.x, this.y);

    }
}





var cactus = new Cactus();