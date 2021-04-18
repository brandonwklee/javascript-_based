var list = document.getElementById("list"); 
var search = document.getElementById('search');;
var addButton = document.getElementById('addToList');
var position = 1

addButton.addEventListener('click', () => { 

    const getContent = document.getElementById('search').value;
    var p = document.createElement("p");
    let li = document.createElement("li");
    li.id = "newList";
    li.value = position;

    p.innerHTML = getContent;
    li.appendChild(p);

    const edit = document.createElement('button');
    const del = document.createElement('button');

    edit.id = "newButtons";
    edit.innerHTML = "Edit";
    edit.value = position;
    del.id = "newButtons";
    del.innerHTML = "Delete";
    del.value = position;

    p.appendChild(del);
    p.appendChild(edit);

    edit.addEventListener('click', () => { 

    });

    del.addEventListener('click', () => { 
    });

    document.getElementById("list").appendChild(li);
    position++;
});