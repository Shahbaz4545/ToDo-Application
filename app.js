var list = document.getElementById('list');


function addTodo(){

var todo_item = document.getElementById('todo-item');

// create li With TextNode
var li = document.createElement('li');
var liText = document.createTextNode(todo_item.value);
li.appendChild(liText)
li.style.listStyle="none";


// create Edit Button With TextNode
var editBtn = document.createElement("Button");
var editText = document.createTextNode("Edit");
editBtn.appendChild(editText)
li.appendChild(editBtn)

// create class attribute With TextNode
editBtn.setAttribute("class","editBtn");
editBtn.setAttribute("onclick","editItem(this)")

// create Delete button With TextNode
var delBtn = document.createElement("Button");
var delText = document.createTextNode(" Delete ");
delBtn.appendChild(delText);
li.appendChild(delBtn)

// create class attribute With TextNode
delBtn.setAttribute("class","delBtn")
delBtn.setAttribute("onclick","deleteItem(this)")


list.appendChild(li)
todo_item.value = "";
console.log(li)
    
}
function deleteItem(e){
    e.parentNode.remove();
}
function editItem(e){
    var beforeText = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter a Updated Value",beforeText);
    e.parentNode.firstChild.nodeValue = editValue; 
}

function deleteAll(){
    list.innerHTML ="";
}