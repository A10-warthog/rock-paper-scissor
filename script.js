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

function playerSelection() {
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
