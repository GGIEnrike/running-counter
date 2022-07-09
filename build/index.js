"use strict";
if (localStorage.getItem('total') === null) {
    localStorage.setItem('total', '0.00');
}
var total = parseFloat(localStorage.getItem('total'));
var goal = 100;
var totalEl = document.getElementById('total');
var goalEl = document.getElementById('goal');
totalEl.innerText = total.toString();
goalEl.innerText = goal.toString();
var input = document.getElementById('input');
function add_total() {
    input.blur();
    if (!(!isNaN(parseFloat(input.value)))) {
        return;
    }
    total += +input.value;
    localStorage.setItem('total', total.toFixed(2));
    input.value = '';
    if (+localStorage.getItem('total') === goal) {
        totalEl.innerText = goal.toString();
    }
    else {
        totalEl.innerText = localStorage.getItem('total');
    }
}
input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        add_total();
    }
});
var add = document.getElementById('add');
var reset = document.getElementById('reset');
add.addEventListener('click', add_total);
reset.addEventListener('click', function () {
    total = 0;
    localStorage.setItem('total', '0.00');
    totalEl.innerText = '0.00';
});
