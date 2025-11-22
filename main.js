const canvas = document.getElementById('canvas');
const output = document.getElementById('output');
const button = document.getElementById('button');
button.addEventListener('click', createlist);
const ctx = canvas.getContext('2d');
canvas.width = 485;
canvas.height = 500;
let list = [];
function createlist() {
    list = [];
    for (let i = 0; i < 24; i++) {
        let item = Math.floor(Math.random() * (50 - 0 + 1)) + 0;
        list.push(item);
    }
    output.innerHTML = list;
}
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < list.length; i++) {
        const x = i * 20;
        const y = canvas.height - list[i] * 10;
        const width = 15;
        const height = list[i] * 10;
        ctx.fillStyle = 'black';
        ctx.fillRect(x, y, width, height);
    }
    requestAnimationFrame(draw);
}
draw();