// Examine tHe document object 
console.log(document.title);

///////////////////////////////
// GETELEMENTBYID
// console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.innerText = 'The GOAT';
// headerTitle.innerHTML = '<h3>Legends</h3>'
// headerTitle.style.borderBottom = 'solid 3px #000';
var header = document.getElementById('main-header');
header.style.borderBottom = 'solid'

// GETELEMENTBYCLASSNAME //
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Kobe Bryant';
items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

for(var i = 0; i < items.length; i++){
    items[i].style.backgroundColor = '#f4f4f4';
}

// GETELEMENTBYTAGNAME //
var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[0]);
li[0].textContent = 'Roger Federer';
li[0].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

for(var i = 0; i < li.length; i++){
    li[i].style.backgroundColor = '#f4f4f4';
}

// QUERYSELECTOR // 
var input = document.querySelector('input');
input.value = 'Hello World'

var submit = document.querySelector('input[type="submit"]');
submit.value="SEND";

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector
('.list-group-item:last-child');
lastItem.style.color = 'blue';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'coral'


// QUERYSELECTORALL// 
var titles = document.querySelectorAll('.title')

console.log(titles);
titles[0].textContent = 'Player';

var even = document.querySelectorAll('li:nth-child(even)');

for(var i = 0; i < even.length; i++){
even[i].style.backgroundColor = '#ccc';
}


var itemList = document.querySelector('#items');
// parentNode //
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#c1cce0';

console.log(itemList.parentNode.parentNode.parentNode);

// childNodes //
console.log(itemList.childNodes);
console.log(itemList.children);
itemList.children[2].style.backgroundColor = '#2691d9'
// var button = document.getElementById('button')
// var box = document.getElementById('box')

// var itemInput = document.querySelector('input[type="text"');
// var form = document.querySelector('form');
// var select = document.querySelector('select'); 

// var from = document.getElementById('addForm')
// var itemList = document.getElementById('items')
// // var filter = document.getElementById('filter')

// // Form Submit event
// form.addEventListener('submit', addItem);
// Delete event
// itemList.addEventListener('click', removeItem)
// Filter event
// filter.addEventListener('keyup', filterItems)

// Add Item
// function addItem(e){
//     e.prevntDefault();

// // Get Input value 
// var newItem = document.getElementById('item').value;

// // Create new li element 
// var li = document.createElement('li');
// // Add class 
// li.className = 'list-group-item';
// // console.log(li);

// // Add text node with input value
// li.appendChild(document.createTextNode(newItem));

// itemList.appendChild(li);

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

// }