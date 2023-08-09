
function getComputerChoice(choices) {
    return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerChoice(choices) {
    let playerChoice = prompt("Pick Rock, Paper, or Scissors!");
    if (playerChoice.toLowerCase() == "rock") {
        return choices[0];
    }
    else if (playerChoice.toLowerCase() == "paper") {
        return choices[1];
    }
    else if (playerChoice.toLowerCase() == "scissors") {
        return choices[2];
    }
    else {
        alert("Improper choice, try again!")
        getPlayerChoice(choices);
    }
}

function winCondition(computerChoice, playerChoice) {
    if (computerChoice == "rock" && playerChoice == "scissors") {
        return "You lose!";
    } else if (computerChoice == "rock" && playerChoice == "paper") {
        return "You win!";
    } else if (computerChoice == "rock" && playerChoice == "rock") {
        return "You tied!";
    } else if (computerChoice == "paper" && playerChoice == "rock") {
        return "You lose!";
    } else if (computerChoice == "paper" && playerChoice == "scissors") {
        return "You win!";
    } else if (computerChoice == "paper" && playerChoice == "paper") {
        return "You tied!";
    } else if (computerChoice == "scissors" && playerChoice == "paper") {
        return "You lose!";
    } else if (computerChoice == "scissors" && playerChoice == "rock") {
        return "You win!";
    } else if (computerChoice == "scissors" && playerChoice == "scissors") {
        return "You tied!";
    }
}

function gameLoop() {
    const choiceArray = ['Rock', 'Paper', 'Scissors'];
    console.log(`Your choices are ${choiceArray.join(", ")} - Pick one!`);

    let computerChoice = String(getComputerChoice(choiceArray)).toLowerCase();
    let playerChoice = String(getPlayerChoice(choiceArray)).toLowerCase();

    let winStatement = winCondition(computerChoice, playerChoice);


    switch (winStatement) {
        case 'You lose!':
            return 'You lose!';
        case 'You win!':
            return 'You win!'
        default:
            return 'You tied!';
    }
}

//let scoreBoard = { "Computer": 0, "Player": 0 };
//let gameLimit = 3;
//
//while (scoreBoard["Computer"] < gameLimit || scoreBoard["Player"] < gameLimit) {
//    let result = gameLoop();
//    if(result == 'You lose'){
//        scoreBoard["Computer"] += 1;
//    } else if (result == 'You win!') {
//        scoreBoard["Player"] += 1;
//    } 
//}
