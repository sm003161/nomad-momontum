const todoForm = document.querySelector(".todoForm"),
    todoInput = todoForm.querySelector("input"),
    todoList = document.querySelector("ul");

let todoArr = [];

function remove(event) {
    const btn = event.target,
        li = btn.parentNode;
    todoList.removeChild(li);
    const todoAfter = todoArr.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    todoArr = todoAfter;
    save();
    }  

    function save() {
        localStorage.setItem("TODO", JSON.stringify(todoArr));
    }

function listUp(text) {
    const li = document.createElement("li"),
        span = document.createElement("span"),
        delBtn = document.createElement("button");
    todoList.appendChild(li);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = todoArr.length + 1;
    span.innerText = text;
    delBtn.innerText = "✕";
    delBtn.addEventListener("click", remove)
    const todoObj = {
        text: text,
        id: todoArr.length + 1};
    todoArr.push(todoObj);
}


function submitHandler(event) {
    event.preventDefault();
    const todoName = todoInput.value;
    listUp(todoName);
    todoInput.value = "";
    save();
}

function submit() {
    todoForm.addEventListener("submit", submitHandler)
}

function load() {
    const TODO = localStorage.getItem("TODO");
    if ( TODO !== null) {
    JSON.parse(TODO).forEach((TODOEach) =>
    listUp(TODOEach.text));
    }
}

function init() {
    load();
    submit();
}

init();