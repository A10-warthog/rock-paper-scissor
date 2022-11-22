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
    const string_userChoice = button.textContent.toLowerCase();  
    if (string_userChoice === "rock")
        return "Rock";
    else if (string_userChoice === "paper")
        return "Paper";
    else if (string_userChoice === "scissor")
        return "Scissor"
}

function differentValues(playerChoice, computerChoice, chance) {
    if (playerChoice === "Rock" && computerChoice === "Scissor" ||
        playerChoice === "Paper" && computerChoice === "Rock" ||
        playerChoice === "Scissor" && computerChoice === "Paper" ) {
    	console.log(`You Won! ${playerChoice} beats ${computerChoice} (Chance_Left : ${chance})`);
	return "win";
    } else {
        console.log(`You Lost! ${computerChoice} beats ${playerChoice} (Chance_Left : ${chance})`);
    }
}

function playRound(playerSelection, computerSelection, chance) {
    if (playerSelection === computerSelection) {
        console.log(`It's a Draw! (Chance_left : ${chance})`);
        return "draw";
    } else 
        return differentValues(playerSelection, computerSelection, chance);
}

