const form = document.querySelector("form"),
    JS_userInput = form.querySelector(".JS_userInput"),
    h4 = document.querySelector("h4");

function submitHandler(event) {
    event.preventDefault();
    const currentUser = JS_userInput.value;
    localStorage.setItem("currentUser", currentUser);
    display();
}

function submit() {
    form.addEventListener("submit", submitHandler);
}

function display() {
    const userName = localStorage.getItem("currentUser");
    if (userName === null) {
        h4.classList.add("go");
        JS_userInput.classList.remove("go");
    } else {
        JS_userInput.classList.add("go");
        h4.classList.remove("go");
        h4.innerText = `Welcome, ${userName}!`;
    }
    
}

display();
submit();