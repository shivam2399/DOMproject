let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// form submit event
form.addEventListener('submit', addItem, );
// delete event
itemList.addEventListener('click', removeItem);
// filter event
filter.addEventListener('keyup', filterItems);


function removeItem(e) {
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure ?')){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function addItemDescription(e){
    e.preventDefault();

    let newItemDescription = document.getElementById('itemDescription').value;
    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItemDescription));
}
function addItem(e) {
    e.preventDefault();

    //get input value
    let newItem = document.getElementById('item').value;
    let description = document.getElementById('description').value;
    // create new element 
    let li = document.createElement('li');
    // add class 
    li.className = 'list-group-item';
    // add text node with input value
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(' '+description));
    // create delete btn
    let deleteBtn = document.createElement('button');
    // add class
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    //append button to li
    li.appendChild(deleteBtn);
    // append li to Lister
    itemList.appendChild(li);
}


// filter item 
function filterItems(e) {
    // convert txt to lowercase
    let text = e.target.value.toLowerCase();
    // get li
    let items = itemList.getElementsByTagName('li');
    // conv to array
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }
        else {
            item.style.display = 'none';
        }
    });
}