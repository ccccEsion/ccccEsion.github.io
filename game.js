let score = 0;
const target = document.getElementById('target');
const scoreDisplay = document.getElementById('score');

// 初始化目标位置
function moveTarget() {
    const x = Math.random() * (600 - 50);
    const y = Math.random() * (400 - 50);
    target.style.left = x + 'px';
    target.style.top = y + 'px';
}

// 点击事件处理
target.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = `得分: ${score}`;
    moveTarget();
});

// 游戏初始化
moveTarget();s
