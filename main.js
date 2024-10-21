let ctx = ca.getContext('2d');
let p1 = 200;
let p2 = 200;
let key = {};
let ball = {
    x: 360,
    y: 240,
    speedX: 3,
    speedY: 0
};
let scoreP1 = 0;
let scoreP2 = 0;

document.addEventListener('keydown', e => key[e.keyCode] = true);
document.addEventListener('keyup', e => key[e.keyCode] = false);

draw();
setInterval(loop, 1000 / 60)

function draw() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 720, 480);
    ctx.fillStyle = 'white';
    ctx.fillRect(10, p1, 10, 80);
    ctx.fillRect(700, p2, 10, 80);
    ctx.fillRect(ball.x, ball.y, 10, 10);
    requestAnimationFrame(draw);
}

// Tasten zahlen:
// 38 hoch
// 40 runter 
// 87 w 
// 83 s  

function loop() {
    if (key[38]) {
        p2 = p2 - 5;
    }

    if (key[40]) {
        p2 = p2 + 5;
    }

    if (key[87]) {
        p1 = p1 - 5;
    }

    if (key[83]) {
        p1 = p1 + 5;
    }

    ball.x = ball.x + ball.speedX;
    ball.y = ball.y + ball.speedY;

    if (ball.x < 20 && ball.speedX < 0) {
        if (ball.y > p1 && ball.y < p1 + 80) {
            ball.speedX = -ball.speedX;
            ball.speedY = (ball.y - p1 - 40) * 0.1;
        } else {
            scoreP2++;
            document.getElementById('score-p2').textContent = scoreP2;
            resetBall();
        }
    }

    if (ball.x > 690 && ball.speedX > 0) {
        if (ball.y > p2 && ball.y < p2 + 80) {
            ball.speedX = -ball.speedX;
            ball.speedY = (ball.y - p2 - 40) * 0.1;
        } else {
            scoreP1++;
            document.getElementById('score-p1').textContent = scoreP1;
            resetBall();
        }
    }

    if(ball.y < 0 || ball.y > 480) {
        ball.speedY = -ball.speedY;
    }
}

function resetBall() {
    ball = {
        x: 360,
        y: 240,
        speedX: 3 * (Math.random() > 0.5 ? 1 : -1),
        speedY: 0
    };
}