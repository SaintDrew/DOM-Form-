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

for (var i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = '#f4f4f4';
}

// GETELEMENTBYTAGNAME //
var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[0]);
li[0].textContent = 'Roger Federer';
li[0].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

for (var i = 0; i < li.length; i++) {
    li[i].style.backgroundColor = '#f4f4f4';
}

// QUERYSELECTOR // 

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND";

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

for (var i = 0; i < even.length; i++) {
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
// itemList.children[2].style.backgroundColor = '#2691d9'

// previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';

// createElement

// Create a div 
var newDiv = document.createElement('div');
console.log(newDiv)

// Add class
newDiv.className = 'Legends'

var button = document.getElementById('button').addEventListener
    ('click', function () {
        console.log(123);
    });

// addEventListener

// function buttonClick(){
//     console.log('Button clicked')
//}

body.addEventListener('mousemove', runEvent);

function runEvent(e) {
    console.log(`EVENT TYPE: ` + e.type);
    document.body.style.backgroundColor = "rgb(" + e.offsetX + ","
        + e.offsetY + ", 40)";
    // }

    // var button = document.getElementById('button')
    // var box = document.getElementById('box')

    var itemInput = document.querySelector('input[type="text"]');
    // var form = document.querySelector('form');

    // itemInput.addEventListener('keydown', runEvent);

    // Addding to Form with EventListener
    var form = document.getElementById('addForm');
    var itemList = document.getElementById('items');

    // From submit event
    form.addEventListener('submit', addItem);

    // Add Item
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

        itemList.appendChild(li);
    }


}