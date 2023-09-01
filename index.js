let getComputerChoice = () => {
    switch(Math.floor(Math.random() * 3)) {
        case 0: return "Rock";
        case 1: return "Paper";
        case 2: return "Scissors";
        default: return "Unknown";
    }
}

let playRound = (playerChoice, computerChoice) => {
    let playerChoiceLower = String(playerChoice).toLowerCase();
    let computerChoiceLower = String(computerChoice).toLowerCase();
    if (playerChoiceLower === "rock") {
        if(computerChoiceLower === "rock") return "Draw! Rock against rock"
        if(computerChoiceLower === "paper") return "You lose! Paper beats rock"
        if(computerChoiceLower === "scissors") return "You win! Rock beats scissors"
    }
    else if (playerChoiceLower === "paper") {
        if(computerChoiceLower === "rock") return "You win! Paper beats rock"
        if(computerChoiceLower === "paper") return "Draw! Paper against paper"
        if(computerChoiceLower === "scissors") return "You lose! Scissors beat paper"
    }
    else if (playerChoiceLower === "scissors") {
        if(computerChoiceLower === "rock") return "You lose! Rock beats scissors"
        if(computerChoiceLower === "paper") return "You win! Scissors beat paper"
        if(computerChoiceLower === "scissors") return "Draw! Scissors against scissors"
    }
    else return "Unknown input";
}

let checkInput = (input) => {
    switch (String(input).toLowerCase()) {
        case "rock" : return true;
        case "paper" : return true;
        case "scissors" : return true;
        default : return false;
    }
}

let game = () => {
    while (true) {
        const playerChoice = prompt("Choose your weapon", "Rock");
        if (!checkInput(playerChoice)) break;
        console.log(playRound(playerChoice, getComputerChoice()));
    }
}