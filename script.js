function getComputerChoice() {
    const int_choice = Math.floor(Math.random() * 3);
    switch (int_choice) {
        case 1 : {
            return "Rock";
        }
        case 2 : {
            return "Paper";
        }
        case 3 : {
            return "Scissor";
        }
    }
}