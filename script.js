"use strict"

let int_userCount = 0, int_computerCount = 0;
let [...userChoice] = document.querySelector(".user_option").children;
let [...button] = document.querySelectorAll("button");
const [...displayNone] = document.querySelectorAll(".display--none");
const [...compOption] = document.querySelector(".computer_option").children;
const run_count = document.querySelector(".run_count");
const userCount = document.querySelector(".user__num");
const computerCount = document.querySelector(".computer__num"); 
const result = document.querySelector(".result");
const play = document.querySelector(".start_game");
const rePlay = document.querySelector(".play_again");

const winChoice = {
    win: {
        Rock : "Scissor",
        Paper: "Rock",
        Scissor: "Paper",
    },
}

function removeSelectEvent() {
    userChoice.forEach(elm => {
        elm.firstElementChild.removeEventListener("mousedown",getPlayerChoice);
    });
}

function endResult() {
    if (int_userCount === 5) 
        result.textContent = "You Won the game!!";
    else 
        result.textContent = "You Lost the game!!";
    removeSelectEvent();
}

function roundScore(str) {
    if (str === "win") {
        int_userCount++;
        userCount.textContent = int_userCount;
    } else {
        int_computerCount++;
        computerCount.textContent = int_computerCount;
    }

    if (int_computerCount === 5 || int_userCount === 5)
        endResult();
}

function playRound(playerSelection, computerSelection) {
    let string_result = "";
    if (playerSelection === computerSelection)
        result.textContent = "It's a Draw!";
    else {
        if (winChoice.win[playerSelection] === computerSelection) {
            string_result = "win";
            result.textContent = `You Won! ${playerSelection} beats ${computerSelection}`;
        } else {
            string_result = "lose";
            result.textContent =  `You Lose! ${computerSelection} beats ${playerSelection}`;
        }
        roundScore(string_result);
    } 
}

function getComputerChoice() {
    const int_choice = Math.floor(Math.random() * 3);
    const string_choice = ["Rock", "Paper", "Scissor"];
    return string_choice[int_choice];
}

function getPlayerChoice(e) {
    const button = e.target;
    const string_computerChoice = getComputerChoice(); 
    const string_userChoice = button.nextElementSibling.textContent;  
    playRound(string_userChoice, string_computerChoice);
}

function game() {
    userChoice.forEach(elm => {
        elm.firstElementChild.addEventListener("mousedown",getPlayerChoice)
    });
}

game();
