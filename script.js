
let doList = document.getElementById('myList');

let list = JSON.parse(localStorage.getItem('list')) || []; // storing list array


// list function
const showList = (list, text) => {
    let doList = document.getElementById('myList');
    doList.innerHTML = "";

    list.map(({text, id}) => {

        let li = document.createElement("li");
        let removeBox = document.createElement('input');

        removeBox.type = 'checkbox';
        removeBox.className = "removeBtn"; 

        li.setAttribute('id', id);
        li.className = 'myInput';
        li.appendChild(removeBox);
        li.appendChild(document.createTextNode(text));

        doList.appendChild(li);
        })
}

showList(list);


//add list item function
function newElement() {

        let inputValue = document.getElementById('myInput').value;
        let inputId = Date.now(); // id key for list items

        if (inputValue === "") {
            alert("Please enter your text to the list.");
            return false;

        } else {
            list.push({text: inputValue, id: inputId});
            localStorage.setItem("list", JSON.stringify(list)); // setting to local storage 
        }
// add to list 
        showList(list, inputValue);
        document.getElementById('myInput').value = ''; // returning item element to empty text 
}


function removeElement() {
    let checkbox = document.getElementsByClassName("removeBtn");
    let items = document.getElementsByClassName('myInput');

    for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) { // if checked a box to delete item
            checkbox[i].parentNode.removeChild(checkbox[i]);
            items[i].parentNode.removeChild(items[i]);
            list.splice([i], 1); 
            localStorage.setItem("list", JSON.stringify(list));
        }
    }
}
