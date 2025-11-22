const canvas = document.getElementById('canvas');
const output = document.getElementById('output');
const button = document.getElementById('button');
button.addEventListener('click', createlist);
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;
let list = [];
function createlist() {
    let list = [];
    for (let i = 0; i < 24; i++) {
        let item = Math.floor(Math.random() * (50 - 0 + 1)) + 0;
        list.push(item);
    }
    output.innerHTML = list;
}