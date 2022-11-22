"use strict"

const button = document.querySelectorAll("button");

button.forEach(button => button.addEventListener("click", getPlayerChoice))
function getComputerChoice() {
    const int_choice = Math.floor(Math.random() * 3);
    switch (int_choice) {
        case 0 : 
            return "Rock";
        
        case 1 : 
            return "Paper";
        
        case 2 : 
            return "Scissor";
    }
}

function getPlayerChoice(e) {
    const button = e.target;
    const string_computerChoice = getComputerChoice(); 
    const string_userChoice = button.textContent.toLowerCase();  
    if (string_userChoice === "rock")
        playRound("Rock", string_computerChoice);
    else if (string_userChoice === "paper")
        playRound("Paper", string_computerChoice);
    else if (string_userChoice === "scissor")
        playRound("Scissor", string_computerChoice);
}

function differentValues(playerChoice, computerChoice) {
    if (playerChoice === "Rock" && computerChoice === "Scissor" ||
        playerChoice === "Paper" && computerChoice === "Rock" ||
        playerChoice === "Scissor" && computerChoice === "Paper" ) {
    	console.log(`You Won! ${playerChoice} beats ${computerChoice}`);
	return "win";
    } else {
        console.log(`You Lost! ${computerChoice} beats ${playerChoice}`);
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log(`It's a Draw!`);
        return "draw";
    } else 
        return differentValues(playerSelection, computerSelection);
}

