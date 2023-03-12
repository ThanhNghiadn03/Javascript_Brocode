// accept user input
// C1 : Use window.prompt()

// let firstName = window.prompt("What your name ?");
// console.log(firstName);

// C2 : html 

let userName;

document.getElementById("submit").onclick = function() {
    userName = document.getElementById("my-text").value;
    console.log(userName);
}