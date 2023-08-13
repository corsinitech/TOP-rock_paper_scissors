const choices = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll('.rps-button');
const scoreBoard = {
    player: 0,
    computer: 0,
};

function game(){
    while(scoreBoard.player < 3 || scoreBoard.computer < 3){
        let computer = choices[Math.floor(Math.random() * choices.length)];
        let player = buttons.forEach((button) => {
            button.addEventListener('click', function() {
                return button.id;
            });
        });
    }
}

