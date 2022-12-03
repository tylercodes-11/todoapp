

let inputValue = document.getElementById("inputTodo").value;
let todoList = document.getElementById("todoList");

const createList = (todos) => {
    todos.forEach(todo => {        
	    const listItm = document.createElement("LI");
		listItm.className = "list-group-item";		
		const inputCheckBox = document.createElement("INPUT");
		inputCheckBox.className = "delete-box form-check-input mr-3";
		inputCheckBox.type = "checkbox"
		const inputValueContent = document.createTextNode(todo.title);
		listItm.appendChild(inputCheckBox);
		listItm.appendChild(inputValueContent);
	    todoList.appendChild(listItm);
    });
};

const getTodos = () => {
	let arrayTodos = JSON.parse(localStorage.getItem("list"));

	if(arrayTodos.length === 0) {
        // getting limit of 5 todos from axios placeholder api
	    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
	        .then(response => {
	        	console.log(response);
	            const todos = response.data;
	            console.log(`GET list todos`, todos);
	            createList(todos);
	        })
	        .catch(error => console.error(error));
    }
};

getTodos();

displayOnPage(); 
function addToList(event) {
	event.preventDefault();
	
	inputValue = document.getElementById("inputTodo").value;	
	
	if (inputValue === "" || inputValue === "null") {
    	alert("Enter a todo");
    	return false;
  	} else {
		const listItm = document.createElement("LI");
		listItm.className = "list-group-item";
		todoList.appendChild(listItm);
		
		const inputCheckBox = document.createElement("INPUT");
		inputCheckBox.className = "delete-box form-check-input";
		inputCheckBox.type = "checkbox"
		inputValue = document.getElementById("inputTodo").value;	
		
		const inputValueContent = document.createTextNode(inputValue);
	  	listItm.appendChild(inputCheckBox);
	  	listItm.appendChild(inputValueContent);

	  	saveTodosLocalstorage(inputValue);
	  	document.getElementById("inputTodo").value = ""; 	  	
  	} 
};

function saveTodosLocalstorage(todo) {
	let list;
	if(localStorage.getItem("list") === null) {
		list = [];
	} else {
		list = JSON.parse(localStorage.getItem("list"));
	};	

	list.push(todo);
	localStorage.setItem("list", JSON.stringify(list));
};

function displayOnPage() {
	const list = JSON.parse(localStorage.getItem("list"));

	list.forEach(function(todo) {
		const listItm = document.createElement("LI");
		listItm.className = "list-group-item";
		todoList.appendChild(listItm);

		const inputCheckBox = document.createElement("INPUT");
		inputCheckBox.className = "delete-box form-check-input mr-3";
		inputCheckBox.type = "checkbox"

		const inputValueContent = document.createTextNode(todo);
	  	listItm.appendChild(inputCheckBox);
	  	listItm.appendChild(inputValueContent);
	});
};

function deleteChecked() {
	const checkBoxes = document.getElementsByClassName("delete-box");
	const listTexts = document.getElementsByClassName("list-group-item");

	for (let i = 0; i < checkBoxes.length; i++) {
		if(checkBoxes[i].checked) {
			const list = JSON.parse(localStorage.getItem("list"));
			list.splice([i], 1);
			localStorage.setItem("list", JSON.stringify(list));
			listTexts[i].remove();	
		}		
	}	 
};