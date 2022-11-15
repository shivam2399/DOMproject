let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

// form submit event
form.addEventListener('submit', addItem);

// delete event
itemList.addEventListener('click', removeItem);

function removeItem(e) {
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure ?')){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function addItem(e) {
    e.preventDefault();

    //get input value
    let newItem = document.getElementById('item').value;
    // create new element 
    let li = document.createElement('li');
    // add class 
    li.className = 'list-group-item';
    // add text node with input value
    li.appendChild(document.createTextNode(newItem));
    
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