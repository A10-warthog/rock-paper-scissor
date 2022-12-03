"use strict"

let int_userCount = 0, int_computerCount = 0;
let [...userChoice] = document.querySelector(".user_option").children;
let [...button] = document.querySelectorAll("button");
const [...displayNone] = document.querySelectorAll(".display--none");
const [...compOption] = document.querySelector(".computer_option").children;
const userCount = document.querySelector(".user__num");
const computerCount = document.querySelector(".computer__num"); 
const result = document.querySelector(".result");
const play = document.querySelector(".start_game");
const rePlay = document.querySelector(".play_again");

userChoice = userChoice.map(child => child.firstElementChild);
button = button.map(child => child.parentElement);
displayNone.pop();

const winChoice = {
    win: {
        Rock : "Scissor",
        Paper: "Rock",
        Scissor: "Paper",
    },
}

function toggleClass(element, className) {
    element.forEach(elm => elm.classList.toggle(className));
}

function addSelectEvent(element, event, func) {
    element.forEach(elm => elm.addEventListener(event, func));
}

function removeSelectEvent(element, event, func) {
    element.forEach(elm => elm.removeEventListener(event, func));
}

function resetValue() {
    int_userCount = 0;
    int_computerCount = 0;
    userCount.textContent = '0';
    computerCount.textContent = '0'
    result.textContent = '';
    toggleClass(displayNone, "display--none");
    toggleClass(button, "display--none");
    compOption[0].src = `img/placeholder.png`;
    compOption[1].textContent = '';
    removeSelectEvent([rePlay.firstElementChild], "click", resetValue);
}

function revertBackValue() {
    removeSelectEvent(userChoice, "mousedown", getPlayerChoice);
    toggleClass(userChoice, "display--hov");
    toggleClass([rePlay], "display--none");
}

function displayFinalResult(element) {
    if (int_userCount === 5) 
        element.textContent = "You Won the game!";
    else    
        element.textContent = "You Lost the game!";
}

function endResult() {
   displayFinalResult(result);
   revertBackValue();
   addSelectEvent([rePlay.firstElementChild], "click", resetValue);
}

function roundScore(str) {
    if (str === "win") {
        int_userCount++;
        userCount.textContent = int_userCount;
    } else {
        int_computerCount++;
        computerCount.textContent = int_computerCount;
    }
}

function playRound(string_element) {
    const userInput = string_element;
    const compInput = getComputerChoice();
    const string_roundResult = getResult(userInput, compInput);
    displayResult(string_roundResult, userInput, compInput, result);
    roundScore(string_roundResult);
    if (int_computerCount === 5 || int_userCount === 5)
        endResult();
}

function displayResult(str, user, comp, element) {
    if (str === "draw")
        element.textContent = "It's a Draw!";
    else if (str === "win")
        element.textContent = `You Won! ${user} beats ${comp}`;
    else 
        element.textContent = `You Lose! ${comp} beats ${user}`;
}

function getResult(userInput, compInput) {
    if (userInput === compInput)
        return "draw";
    else if (winChoice.win[userInput] === compInput)
        return "win";
    else 
        return "lose";
}

function getComputerChoice() {
    const int_randomNum = Math.floor(Math.random() * 3);
    const string_choice = ["Rock", "Paper", "Scissor"];
    const compChoice = string_choice[int_randomNum]
    compOption[0].src = `img/${compChoice.toLowerCase()}-right.png`;
    compOption[1].textContent = compChoice;
    return compChoice;
}

function getPlayerChoice(event) {
    const string_userChoice = event.target.nextElementSibling.textContent;  
    playRound(string_userChoice);
}

function setGamePlay() {
    addSelectEvent(userChoice, "mousedown", playRound);
    toggleClass([play], "display--none");
    toggleClass(userChoice, "display--hov");
    toggleClass(displayNone, "display--none");
    removeSelectEvent([this], "click", game);
}

