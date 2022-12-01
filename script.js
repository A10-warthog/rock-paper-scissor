"use strict"

let int_userCount = 0, int_computerCount = 0;
const run_count = document.querySelector(".run_count");
const userCount = document.querySelector(".run_count__user");
const computerCount = document.querySelector(".run_count__computer"); 
const result = document.querySelector(".result");
const[...userChoice] = document.querySelector(".user_option").children;
const play = document.querySelector(".start_game");
const rePlay = document.querySelector(".play_again");

function endResult() {
    if (int_userCount === 5) 
        result.textContent = "You won the game!!";
    else 
        result.textContent = "You lost the game!!";
    int_userCount = 0;
    int_computerCount = 0;
}

function roundScore(str) {
    if (str === "win")
        userCount.textContent = int_userCount;
    else 
        computerCount.textContent = int_computerCount;

    if (int_computerCount === 5 || int_userCount === 5)
        endResult();
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

function playRound(playerSelection, computerSelection) {
    let result = '';
    if (playerSelection === computerSelection) 
        result.textContent = "It's a Draw!";
    else 
      result = differentValues(playerSelection, computerSelection);
    roundScore(string_result);
}

function getComputerChoice() {
    const int_choice = Math.floor(Math.random() * 3);
    const string_choice = ["Rock", "Paper", "Scissor"];
    return string_choice[int_choice];
}

function getPlayerChoice(e) {
    const button = e.target;
    const string_computerChoice = getComputerChoice(); 
    const string_userChoice = button.textContent;  
    playRound(string_userChoice, string_computerChoice);
}

function game() {
    userChoice.forEach(elm => elm.firstElementChild.addEventListener("mousedown",getPlayerChoice));
}

game();
