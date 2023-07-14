

function getComputerChoice(choices){
    return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerChoice(choices){
    let playerChoice = prompt("Pick Rock, Paper, or Scissors!");
    if(playerChoice.toLowerCase == "rock"){
        return choices[0];
    }
    else if(playerChoice.toLowerCase == "paper"){
        return choices[1];
    }
    else if(playerChoice.toLowerCase == "scissors"){
        return choices[2];
    }
    else {
        alert("Improper choice, try again!")
        getPlayerChoice(choices);
    }
}

function winCondition(computerChoice, playerChoice){

}

function gameLoop(){
    const choiceArray = ['Rock', 'Paper', 'Scissors'];
    console.log(`Your choices are ${choiceArray.join(", ")} - Pick one!`);

    let computerChoice = getComputerChoice(choiceArray);
    let playerChoice = getPlayerChoice(choiceArray);
}


gameLoop();
