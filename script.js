
let doList = document.getElementById('myUL');
import { v4 as uuidv4 } from 'uuid';

const uniqueId = uuid.v4(); //unique id key 
let tasks = [
    {    
    "Go to the Gym": uniqueId
    },
    {
    "Finish School Project": uniqueId
    },

    {
    "Eat Lunch": uniqueId
    },

    {
    "Do Hot Yoga": uniqueId
    },
    
    {
    "Spend time with Family": uniqueId
    }

]

// creating to do list item
for (let i of arr) {
    let task = document.createElement('li');
    task.innerHTML = i;
    tasks.appendChild(task);
}

// appending array of task objects to ul - doList
doList.appendChild(tasks);


// creating local storage for array and into strings 
const myJSON = JSON.stringify(tasks);
localStorage.setItem("storedJSON", myJSON);

//retrieving local storage string back as an array
let array = localStorage.getItem("storedJSON");
let obj = JSON.parse(array);


// close button and append ot each list item

let myNodelist = document.getElementsByTagName('LI');
for (i = 0; i < myNodelist.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = 'close'; 
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}
// creating close button to hide the list item
let close = document.getElementsByClassName('close');
let i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none"; // hiding 
    }
}

// add a "checked" symbol when clicking on a list item

doList.addEventListener('click', function(ev){
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false)

// create a new list item when clicking on "Add" button

function newElement() {
    let li = document.createElement('li');
    let inputValue = document.getElementsByID('myInput').value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    //if nothing written
    if(inputValue === '') {
        alert("Please enter your to do item");
    
    } else {
        doList.appendChild('li')
    }
    document.getElementById('myInput').value = '';

    let span = document.createElement('SPAN');
    let txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
    }
    }
}