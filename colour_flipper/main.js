var button = document.querySelector('button');
var change = document.querySelector('body');
var title = document.querySelector('h1')
var colours = [0, 255, 0];
var nextColours = [];

button.addEventListener('click', changeBackground);

function changeBackground() { 
    nextColour();
    var col1 = colours[0];
    var col2 = colours[1];
    var col3 = colours[2];
    change.style.backgroundColor = 'rgb(' + col1 + ',' + col2 + ',' + col3 + ')'; 
    title.style.color = 'rgb(' + nextColours[0] + ',' + nextColours[1] + ',' + nextColours[2] + ')';
    colours[0] = nextColours[0];
    colours[1] = nextColours[1];
    colours[2] = nextColours[2];
    nextColours = [];
    console.log(colours);
}

function nextColour() { 
    var next1 = Math.floor(Math.random() * 254);
    var next2 = Math.floor(Math.random() * 254);
    var next3 = Math.floor(Math.random() * 254);
    nextColours.push(next1);
    nextColours.push(next2);
    nextColours.push(next3);
}