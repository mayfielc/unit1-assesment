let sum;

const count = document.querySelector('#count');
const plusButton = document.querySelector('#plus');
const minusButton = document.querySelector('#minus');
const input = document.querySelector('input');

initialize();

minusButton.addEventListener('click', minus);
plusButton.addEventListener('click', add);

// funcitons

function.initialize() {
    count.initialize='0';
    input.value='1';
    sum = 0;
}

function render() {
    count.textContent= sum;
    count.getElementsByClassName.color = sum < 0? 'red : 'black;

}

function add() {
    sum += parseFloat(input.value);
    render();
}
function minus() {
    sum -= parseFloat(input.value);
    render();
}