// // TRAVERSING THE DOM // 
// var itemList = document.querySelector('#items');


// var button = document.getElementById('button')
// var box = document.getElementById('box')

// var itemInput = document.querySelector('input[type="text"');
// var form = document.querySelector('form');
// var select = document.querySelector('select'); 

// var from = document.getElementById('addForm')
// var itemList = document.getElementById('items')
// var filter = document.getElementById('filter')

// // Form Submit event
// form.addEventListener('submit', addItem);
// // Delete event
// itemList.addEventListener('click', removeItem)
// // Filter event
// // filter.addEventListener('keyup', filterItems)

// // Add Item
// function addItem(e) {
//     e.preventDefault()
// }

// // Get Input value 
// var newItem = document.getElementById('item').value;

// // Create new li element 
// var li = document.createElement('li');
// // Add class 
// li.className = 'list-group-item';
// // Add text node with input value
// li.appendChild(document.createTextNode(newItem));

// // Create del button element
// var deleteBtn = document.createElement('button');

// // Add classes to del button
// deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
// // Append text node 
// deleteBtn.appendChild(document.createTextNode('X'));

// // Append button to li
// li.appendChild(deleteBtn);

// // Append li to list 
// li.appendChild(deleteBtn); 




var Form1 = document.getElementById("Form1");
var Form2 = document.getElementById("Form2");
var Form3 = document.getElementById("Form3");
function add() {
    var newField = document.createElement('input');
    newField.setAttribute('type', 'text');
    newField.setAttribute('name', 'text');
    newField.setAttribute('class', 'text');
    newField.setAttribute('siz', 50);
    newField.setAttribute('placeholder', 'Optional Field');
    Form3.appendChild(newField);
}

function remove() {
    var input_tags = formfield.getElementsByTagName('input');
    if (input_tags.length > 2) {
        formfield.removeChild(input_tags[(input_tags.length) - 1]);
    }
}

var Next1 = document.getElementById("Next1");
var Next2 = document.getElementById("Next2");
var Back1 = document.getElementById("Back1");
var Back2 = document.getElementById("Back2");

var progress = document.getElementById("progress");

Next1.onclick = function () {
    Form1.style.left = "-450px"
    Form2.style.left = "40px";
    progress.style.width = "240px";
}
Back1.onclick = function () {
    Form1.style.left = "40px"
    Form2.style.left = "450px";
    progress.style.width = "120px"
}
Next2.onclick = function () {
    Form2.style.left = "-450px"
    Form3.style.left = "40px";
    progress.style.width = "360px"
}
Back2.onclick = function () {
    Form2.style.left = "40px"
    Form3.style.left = "450px";
    progress.style.width = "240px"
}

// Form Submit event
form.addEventListener('submit', addItem);

// Add item
function addItem(e) {
    e.preventDefault();

    // Get Input value 
    var newItem = document.getElementById('item').value;

    // Create new li element 
    var li = document.createElement('li');
    // Add class 
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));
}
// // Delete event
// itemList.addEventListener('click', removeItem)
// // Filter event
// // filter.addEventListener('keyup', filterItems)

