let count = 1;
let displayEl = document.querySelector('h1 span');
let countEl = document.getElementById('count');
let number = countEl.innerHTML;
number++;
number--;
countEl.innerHTML = number;


function init() {
    sum = 0;
    render();
}
function render() {
  displayEl.textContent = (number = 0 ? '++' : '');  
}
document.querySelector('button').addEventListener('click', function() {
    sum += parseFloat(countEl.value);
    inp1El.value = '';
    render();
  });
  
  function plus(){
    count++;
    countEl.value = count;
}
function minus(){
  if (count > 1) {
    count--;
    countEl.value = count;
  }  
}

init();