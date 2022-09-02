const choices = ['Rock', 'Paper', 'Scissors'];
const computerSelection = computerPlay(); 
let counter = 0;
let scores = {playerScore : 0, computerScore : 0};

function computerPlay() {
    let choice = choices[Math.floor(Math.random()* choices.length)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    let cS = computerSelection;
    let pS = playerSelection;

    if (cS === pS) {
        content.textContent = ('It\'s a tie!');
        scores.playerScore++;
        scores.computerScore++;
    } else if (cS === 'Rock' && pS === 'Paper' || cS === 'Paper' && pS === 'Scissors' || cS === 'Scissors' && pS === 'Rock') {
        content.textContent = (`You win! ${pS} beats ${cS}!`);
        scores.playerScore++;
    } else if (cS === 'Rock' && pS === 'Scissors' || cS === 'Paper' && pS === 'Rock' || cS === 'Scissors' && pS === 'Paper') {
        content.textContent = (`You lose! ${cS} beats ${pS}!`);
        scores.computerScore++;
    } else {
        content.textContent = ('Error. Please choose from one of the following options: "Rock", "Paper", or "Scissors"')
    }
}

function endGame(scores) {
    if (scores.playerScore > scores.computerScore) {
        content.textContent = ('Victory is yours!');
    } else if (scores.playerScore < scores.computerScore) {
        content.textContent = ('Luh-hoo-zuh-her! Better luck next time.');
    } else {
        content.textContent = ('A complete tie. How unsatisfying.');
    }
}

function clickLoop() {
    if(counter < 5) {
        const buttons = document.querySelectorAll('button');

        buttons.forEach((button) => {
            button.addEventListener('click', (event) => {
                playerSelection = event.target.textContent;
                playRound(playerSelection, computerPlay());
                if(counter == 4){
                    endGame(scores);
                } else {
                    counter++;
                }
            });
        });
    } else {
        content.textContent = ('Error!');
    }
}

const results = document.querySelector('#results');
const content = document.createElement('div');

content.classList.add('content');

results.textContent = clickLoop();
content.textContent = "Rock, Paper, or Scissors??";

results.appendChild(content);
