const buttons = document.querySelectorAll('#rps-button');
const choices = ['rock', 'paper', 'scissors'];
const scoreBoard = {
    player: 0,
    computer: 0,
};

let player = "";

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerChoice(button.className);
    });
});

function playerChoice(choice) {
    return player = choice;
}

function computerChoice(choices) {
    return choices[Math.floor(Math.random() * choices.length)];
};

let computer = computerChoice(choices);

console.log(computer);
