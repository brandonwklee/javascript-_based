var addButton = document.getElementById('addToList');
var text = ['Edit', 'Remove']; 
var createDiv = document.createElement("div");
var createP = document.createElement("p");
var list = document.getElementById("list"); 

addButton.addEventListener('click', () => { 
    const getContent = document.getElementById('search').value;

    Div = document.createElement("div");
    Div.id = "newDiv";
    li = document.createElement("li");

    li.innerHTML = getContent;

    //document.getElementById("newDiv").appendChild(li);
    for (var i = 0; i < text.length; i++) { 
        var createButton = document.createElement('button');
        createButton.id = "newButtons";
        createButton.innerHTML = text[i];
        li.appendChild(createButton);
    }

    Div.appendChild(li);
    
    document.getElementById("list").appendChild(Div);
});