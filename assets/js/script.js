//wait for the DOM to finish loading before running the game
// get the button elements and add event listeneres to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

runGame("addition")

})

/**
 * The main game "loop", called he the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
 
    if(gameType=== "addition") {
        displayAddittionQuestion(num1, num2)
    } else {
        alert(`unknown game type: ${gameType}`)
        throw `unknown game type: ${gameType}. Aborting!`;
    }

}


function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAddittionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}

function displaySubtractionQuestion() {

}

function displayMultiplayQuestion() {

}