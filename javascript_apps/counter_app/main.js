var decrease = document.getElementById('decrease');
var reset = document.getElementById('reset');
var increase = document.getElementById('increase');
var showCounter = document.getElementById('counter');
var counter = 1;

decrease.addEventListener('click', decreaseCounter);
reset.addEventListener('click', resetCounter);
increase.addEventListener('click', increaseCounter);

function decreaseCounter() { 
    counter -= 1;
    showCounter.textContent = counter;
}


function resetCounter() { 
    counter = 1;
    showCounter.textContent = counter;
}

function increaseCounter() { 
    counter += 1;
    showCounter.textContent = counter;
}