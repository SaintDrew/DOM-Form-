// TRAVERSING THE DOM // 
// var itemList = document.querySelector('#items');


// var button = document.getElementById('button')
// var box = document.getElementById('box')

// var itemInput = document.querySelector('input[type="text"');
// var form = document.querySelector('form');
// var select = document.querySelector('select'); 

var from = document.getElementById('addForm')
var itemList = document.getElementById('items')
// var filter = document.getElementById('filter')

// Form Submit event
form.addEventListener('submit', addItem);
// Delete event
// itemList.addEventListener('click', removeItem)
// Filter event
// filter.addEventListener('keyup', filterItems)

// Add Item
function addItem(e){
    e.prevntDefault();

// Get Input value 
var newItem = document.getElementById('item').value;

// Create new li element 
var li = document.createElement('li');
// Add class 
li.className = 'list-group-item';
// console.log(li);

// Add text node with input value
li.appendChild(document.createTextNode(newItem));

itemList.appendChild(li);

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

}



