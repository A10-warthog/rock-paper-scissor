"use strict"

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

function getPlayerChoice() {
    let string_userChoice = prompt("Enter your choice:").toLowerCase();
    if (string_userChoice === "rock")
        return "Rock";
    else if (string_userChoice === "paper")
        return "Paper";
    else if (string_userChoice === "scissor")
        return "Scissor"
    else {
        alert("You entered " + string_userChoice + "! Please enter either Rock, Paper or Scissor");
        return getPlayerChoice();
    }
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

function game() {
    let int_win = 0, int_lose = 0, int_draw = 0;
    for (let i = 4; i >= 0; i--) {
        let int_result = playRound(getPlayerChoice(), getComputerChoice(), i);
        if (int_result === "win") 
            int_win += 1;
        else if (int_result === "lose")
            int_lose += 1;
        else 
            int_draw += 1;
    }

    if (int_win > int_lose) 
        console.log("You Won!!!");
    else if (int_win < int_lose)
        console.log("You Lost!!!");
    else 
        console.log("It's a Draw!!!");
}

game();