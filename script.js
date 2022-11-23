"use strict"

const userCount = document.querySelector(".running_count__user");
const computerCount = document.querySelector(".running_count__computer"); 
const button = document.querySelectorAll("button");
const result = document.querySelector(".result");
const finalResult = document.querySelector(".final_result");

let int_userCount = 0, int_computerCount = 0;

button.forEach(button => button.addEventListener("click", getPlayerChoice));

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
    	result.textContent = (`You Won! ${playerChoice} beats ${computerChoice}`);
        int_userCount++;
        return "win";
    } else {
        result.textContent = (`You Lost! ${computerChoice} beats ${playerChoice}`);
        int_computerCount++;
        return "lose";
    }
}

function roundScore(str) {
    if (str === "win")
        userCount.textContent = int_userCount;
    else 
        computerCount.textContent = int_computerCount;
}

function playRound(playerSelection, computerSelection) {
    let string_result = '';
    
    if (playerSelection === computerSelection) 
        result.textContent = "It's a Draw!";
    
    else 
      string_result = differentValues(playerSelection, computerSelection);

    roundScore(string_result);
}

