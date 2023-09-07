const buttons = Array.from(document.querySelectorAll("button"));

const anouncement = document.querySelector(".anouncement");

const score = document.querySelector(".score");

buttons.forEach(button => button.addEventListener("click", (e) => {
    let playerChoice = e.target.textContent;
    let computerChoice = getComputerChoice();
    let result = getResult(playerChoice, computerChoice);
    anouncement.textContent = result[1];
    score.textContent = Number(score.textContent) + result[0];
}))

let getComputerChoice = () => {
    switch(Math.floor(Math.random() * 3)) {
        case 0: return "Rock";
        case 1: return "Paper";
        case 2: return "Scissors";
        default: return "Unknown";
    }
}

let getResult = (playerChoice, computerChoice) => {
    let playerChoiceLower = String(playerChoice).toLowerCase();
    let computerChoiceLower = String(computerChoice).toLowerCase();
    if (playerChoiceLower === "rock") {
        if(computerChoiceLower === "rock") return [0, "Draw! Rock against rock"];
        if(computerChoiceLower === "paper") return [0, "You lose! Paper beats rock"];
        if(computerChoiceLower === "scissors") return [1, "You win! Rock beats scissors"];
    }
    else if (playerChoiceLower === "paper") {
        if(computerChoiceLower === "rock") return [1, "You win! Paper beats rock"];
        if(computerChoiceLower === "paper") return [0, "Draw! Paper against paper"];
        if(computerChoiceLower === "scissors") return [0, "You lose! Scissors beat paper"];
    }
    else if (playerChoiceLower === "scissors") {
        if(computerChoiceLower === "rock") return [0, "You lose! Rock beats scissors"];
        if(computerChoiceLower === "paper") return [1, "You win! Scissors beat paper"];
        if(computerChoiceLower === "scissors") return [0, "Draw! Scissors against scissors"];
    }
    else return "Unknown input";
}

