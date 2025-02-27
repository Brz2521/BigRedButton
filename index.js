const btnRed = document.getElementById("red-button");
let newMessage = document.getElementById("text-message");

let messages = ["DO NOT PRESS","blah blah blah", "Byeeee!"];
let index = 0;

btnRed.onclick = function(){
    newMessage.textContent = messages[index];
    index = (index + 1) % messages.length;
}