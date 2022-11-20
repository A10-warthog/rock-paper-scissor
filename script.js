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
    else    
        return playerSelection();
}

function playRound(playerSelection, computerSelection, chance) {
    if (playerSelection === computerSelection) {
        console.log(`It's a Draw! (Chance_left : ${chance})`);
        return "draw";
    } else 
        return differentValues(playerSelection, computerSelection, chance);
}
