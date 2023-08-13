const choices = ['rock', 'paper', 'scissors'];
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const scoreBoard = {
    player: 0,
    computer: 0,
};

function getPlayerChoice(choice) {
    console.log(choice.toLowerCase());
}


let computer = (choices) => choices[Math.floor(Math.random() * choices.length)];

console.log(computer);
